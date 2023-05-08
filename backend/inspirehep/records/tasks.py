# -*- coding: utf-8 -*-
#
# Copyright (C) 2019 CERN.
#
# inspirehep is free software; you can redistribute it and/or modify it under
# the terms of the MIT License; see LICENSE file for more details.

from io import BytesIO

import structlog
from botocore.exceptions import ClientError
from celery import shared_task
from dict_deep import deep_set
from elasticsearch_dsl import Q
from flask import current_app
from inspire_schemas.utils import get_refs_to_schemas
from inspire_utils.dedupers import dedupe_list_of_dicts
from inspire_utils.record import get_value
from invenio_db import db
from invenio_records.models import RecordMetadata
from jsonschema import ValidationError
from sqlalchemy.exc import OperationalError
from sqlalchemy.orm.exc import StaleDataError

from inspirehep.errors import (
    DB_TASK_EXCEPTIONS,
    DB_TASK_EXCEPTIONS_WITHOUT_STALE_DATA,
    ES_TASK_EXCEPTIONS,
)
from inspirehep.files.api import current_s3_instance
from inspirehep.migrator.models import LegacyRecordsMirror
from inspirehep.pidstore.api import PidStoreBase
from inspirehep.records.api import InspireRecord, LiteratureRecord
from inspirehep.records.utils import _create_ticket_self_curation, get_ref_from_pid
from inspirehep.search.api import InspireSearch
from inspirehep.utils import flatten_list

LOGGER = structlog.getLogger()


def update_records_relations(uuids):
    """Task which updates records_citations, institution_literature, experiment_literature and conference_literature tables with
    relation to proper literature records.

    Args:
        uuids: records uuids for which relations should be reprocessed
    Returns:
        set: set of properly processed records uuids
    """
    for uuid in uuids:
        try:
            with db.session.begin_nested():
                record = InspireRecord.get_record(uuid, with_deleted=True)
                if isinstance(record, LiteratureRecord):
                    record.update_refs_in_citation_table()
                    record.update_conference_paper_and_proccedings()
                    record.update_institution_relations()
                    record.update_experiment_relations()
                    record.update_journal_relations()
        except OperationalError:
            LOGGER.exception(
                "OperationalError on recalculate relations.", uuid=str(uuid)
            )
            raise
        except Exception:
            LOGGER.exception("Cannot recalculate relations", uuid=str(uuid))

    db.session.commit()
    return uuids


@shared_task(
    bind=True,
    queue="redirect_references",
    retry_backoff=True,
    acks_late=True,
    retry_kwargs={"max_retries": 6},
    autoretry_for=(*DB_TASK_EXCEPTIONS, *ES_TASK_EXCEPTIONS),
)
def redirect_references_to_merged_record(self, uuid):
    record = InspireRecord.get_record(uuid, with_deleted=True)
    new_record_ref = record["new_record"]["$ref"]
    deleted_record_ref = record["self"]["$ref"]
    record_schema = PidStoreBase.get_schema_name_from_uri(record["$schema"])
    possible_refs_to_record = get_refs_to_schemas()[record_schema]
    update_references_pointing_to_merged_record(
        possible_refs_to_record, deleted_record_ref, new_record_ref
    )


def update_references_pointing_to_merged_record(
    refs_to_schema, merged_record_uri, new_record_uri
):
    for index, path in refs_to_schema:
        query = get_query_for_given_path(index, path, merged_record_uri)
        es_index_name = f"records-{index}"
        matched_records = (
            InspireSearch(index=es_index_name).query(query).params(scroll="60m").scan()
        )
        for matched_record in matched_records:
            pid_type = current_app.config["SCHEMA_TO_PID_TYPES"][index]
            record_class = InspireRecord.get_subclasses()[pid_type]
            matched_inspire_record_data = (
                db.session.query(RecordMetadata)
                .filter_by(id=matched_record.meta.id)
                .first()
            )
            matched_inspire_record = record_class(
                matched_inspire_record_data.json, model=matched_inspire_record_data
            )
            referenced_records_in_path = flatten_list(
                get_value(matched_inspire_record, path[: -len(".$ref")], [])
            )

            for referenced_record in referenced_records_in_path:
                update_reference_if_reference_uri_matches(
                    referenced_record, merged_record_uri, new_record_uri
                )
            deduped_matched_inspire_record = remove_duplicate_refs_from_record(
                matched_inspire_record, path
            )

            if deduped_matched_inspire_record:
                matched_inspire_record = deduped_matched_inspire_record
            matched_inspire_record.update(dict(matched_inspire_record))
            LOGGER.info(
                "Updated reference for record", uuid=str(matched_inspire_record.id)
            )
        db.session.commit()


def get_query_for_given_path(index, path, record_ref):
    record_with_reference_pid = current_app.config["SCHEMA_TO_PID_TYPES"][index]
    nested_fields = InspireRecord.get_subclasses()[
        record_with_reference_pid
    ].nested_record_fields
    if path.split(".")[0] in nested_fields:
        query = Q(
            "nested", path=path.split(".")[0], query=Q("match", **{path: record_ref})
        )
    else:
        query = Q("match", **{path: record_ref})
    return query


def update_reference_if_reference_uri_matches(
    reference_record, merged_record_uri, new_record_uri
):
    if reference_record["$ref"] == merged_record_uri:
        reference_record.update({"$ref": new_record_uri})


@shared_task
def regenerate_author_records_table_entries(uuids_to_regenerate):
    records = LiteratureRecord.get_records(uuids_to_regenerate)
    for record in records:
        record.update_authors_records_table()
        record.update_self_citations()
        db.session.commit()


def remove_duplicate_refs_from_record(matched_inspire_record, path):
    references_path = ".".join(path.split(".")[:-2])
    references = flatten_list(get_value(matched_inspire_record, references_path, []))

    deduped_references = dedupe_list_of_dicts(references)
    if len(references) == len(deduped_references):
        return None

    deep_set(matched_inspire_record, references_path, deduped_references)
    return matched_inspire_record


@shared_task(
    ignore_results=False,
    acks_late=True,
    retry_backoff=2,
    retry_kwargs={"max_retries": 6},
    autoretry_for=DB_TASK_EXCEPTIONS,
)
def populate_journal_literature(uuids):
    records = LiteratureRecord.get_records(uuids)
    for record in records:
        record.update_journal_relations()
        db.session.commit()


@shared_task(
    ignore_results=False,
    acks_late=True,
    retry_backoff=True,
    retry_kwargs={"max_retries": 8},
    autoretry_for=DB_TASK_EXCEPTIONS,
)
def remove_bai_from_literature_authors(uuids):
    records = LiteratureRecord.get_records(uuids)
    for record in records:
        for author in record.get("authors"):
            author_ids = author.get("ids")
            if not author_ids:
                continue
            new_ids = [
                id_dict for id_dict in author_ids if id_dict["schema"] != "INSPIRE BAI"
            ]
            if new_ids:
                author["ids"] = new_ids
            else:
                del author["ids"]
        try:
            record.update(dict(record), disable_disambiguation=True)
            db.session.commit()
        except ValidationError:
            LOGGER.warning(
                "Can't update record due to validation error",
                recid=record["control_number"],
                uuid=record.id,
            )


@shared_task(
    acks_late=True,
    retry_backoff=True,
    autoretry_for=DB_TASK_EXCEPTIONS_WITHOUT_STALE_DATA,
    retry_kwargs={"max_retries": 5},
    queue="curation",
)
def reference_self_curation(
    record_id, revision_id, reference_index, new_reference_recid, user_email
):
    record = InspireRecord.get_record(record_id)
    if record.revision_id > revision_id:
        raise StaleDataError
    updated_reference = get_ref_from_pid("lit", new_reference_recid)
    record["references"][reference_index]["record"] = updated_reference
    record["references"][reference_index]["curated_relation"] = True
    record.update(dict(record))
    db.session.commit()

    _create_ticket_self_curation(
        record_control_number=record["control_number"],
        record_revision_id=record.revision_id,
        user_email=user_email,
    )


@shared_task(
    retry_backoff=True,
    acks_late=True,
    retry_kwargs={"max_retries": 3},
    autoretry_for=(*DB_TASK_EXCEPTIONS, *ES_TASK_EXCEPTIONS),
)
def export_legacy_recids(bucket_name, recids, db_batch_size):
    current_s3_instance.create_bucket(bucket_name)
    prefixed_bucket_name = current_s3_instance.get_prefixed_bucket(bucket_name)
    mime_type = "application/xml"
    acl = current_app.config["S3_FILE_ACL"]
    query = (
        LegacyRecordsMirror.query.filter(LegacyRecordsMirror.recid.in_(recids))
        .yield_per(db_batch_size)
        .with_entities(LegacyRecordsMirror.recid, LegacyRecordsMirror._marcxml)
    )
    for legacy_record in query:
        filename = str(legacy_record[0])
        key = f"legacy_xml_{legacy_record[0]}"
        fileob = BytesIO(legacy_record[1])
        try:
            current_s3_instance.upload_file(
                fileob, key, filename, mime_type, acl, prefixed_bucket_name
            )
        except ClientError as e:
            LOGGER.warning(
                "There was an issue uploading to s3",
                filename=filename,
                bucket_name=prefixed_bucket_name,
                stacktrace=e.msg,
            )
