# -*- coding: utf-8 -*-
#
# Copyright (C) 2019 CERN.
#
# inspirehep is free software; you can redistribute it and/or modify it under
# the terms of the MIT License; see LICENSE file for more details.

import os

import mock
import orjson
import pytest
from freezegun import freeze_time
from helpers.providers.faker import faker
from helpers.utils import create_record
from invenio_db import db

from inspirehep.files import current_s3_instance
from inspirehep.migrator.models import LegacyRecordsMirror
from inspirehep.records.api import AuthorsRecord, JobsRecord, LiteratureRecord


@pytest.mark.vcr()
def test_create_record_with_one_url(inspire_app, cli):
    control_number = 20
    result = cli.invoke(
        [
            "importer",
            "records",
            "-u",
            f"https://inspirebeta.net/api/literature/{control_number}",
        ]
    )
    result_record = LiteratureRecord.get_record_by_pid_value(control_number)

    assert result.exit_code == 0
    assert control_number == result_record["control_number"]


@pytest.mark.vcr()
def test_create_record_with_multiple_urls(inspire_app, cli):
    control_number_literature = 20
    control_number_author = 1_013_123
    result = cli.invoke(
        [
            "importer",
            "records",
            "-u",
            f"https://inspirebeta.net/api/literature/{control_number_literature}",
            "-u",
            f"https://inspirebeta.net/api/authors/{control_number_author}",
        ]
    )
    result_record_literature = LiteratureRecord.get_record_by_pid_value(
        control_number_literature
    )
    result_record_author = AuthorsRecord.get_record_by_pid_value(control_number_author)

    assert result.exit_code == 0
    assert control_number_literature == result_record_literature["control_number"]
    assert control_number_author == result_record_author["control_number"]


@pytest.mark.vcr()
def test_create_record_with_unreachable_url(inspire_app, cli):
    url_unreachable = "http://something"
    result = cli.invoke(["importer", "records", "-u", url_unreachable])
    expected_message = (
        f"Something went wrong! Cannot reach the given url {url_unreachable}."
    )
    assert result.exit_code == 0
    assert expected_message in result.output


@pytest.mark.vcr()
def test_create_record_with_not_existing_record(inspire_app, cli):
    control_number = 999_999
    result = cli.invoke(
        [
            "importer",
            "records",
            "-u",
            f"https://inspirebeta.net/api/literature/{control_number}",
        ]
    )
    expected_message = (
        "Something went wrong! Status code 404, "
        f"https://inspirebeta.net/api/literature/{control_number} "
        "cannot be imported."
    )
    assert result.exit_code == 0
    assert expected_message in result.output


def test_create_record_with_one_file(inspire_app, cli):
    data = faker.record("lit", with_control_number=True)
    control_number = data["control_number"]

    with cli.isolated_filesystem():
        with open(f"{control_number}.json", "wb") as f:
            f.write(orjson.dumps(data))

        result = cli.invoke(["importer", "records", "-f", f"{control_number}.json"])
        result_record = LiteratureRecord.get_record_by_pid_value(control_number)

        assert result.exit_code == 0
        assert control_number == result_record["control_number"]


def test_create_record_with_multiple_files(inspire_app, cli):
    data_literature = faker.record("lit", with_control_number=True)
    data_author = faker.record("aut", with_control_number=True)
    control_number_literature = data_literature["control_number"]
    control_number_author = data_author["control_number"]

    with cli.isolated_filesystem():
        with open(f"{control_number_literature}.json", "wb") as f:
            f.write(orjson.dumps(data_literature))
        with open(f"{control_number_author}.json", "wb") as f:
            f.write(orjson.dumps(data_author))
        result = cli.invoke(
            [
                "importer",
                "records",
                "-f",
                f"{control_number_literature}.json",
                "-f",
                f"{control_number_author}.json",
            ]
        )
        result_record_literature = LiteratureRecord.get_record_by_pid_value(
            control_number_literature
        )
        result_record_author = AuthorsRecord.get_record_by_pid_value(
            control_number_author
        )

        assert result.exit_code == 0
        assert control_number_literature == result_record_literature["control_number"]
        assert control_number_author == result_record_author["control_number"]


def test_create_record_with_directory(inspire_app, cli):
    data_literature = faker.record("lit", with_control_number=True)
    data_author = faker.record("aut", with_control_number=True)
    control_number_literature = data_literature["control_number"]
    control_number_author = data_author["control_number"]

    with cli.isolated_filesystem():
        os.mkdir("test_directory/")
        with open(f"test_directory/{control_number_literature}.json", "wb") as f:
            f.write(orjson.dumps(data_literature))
        with open(f"test_directory/{control_number_author}.json", "wb") as f:
            f.write(orjson.dumps(data_author))

        result = cli.invoke(["importer", "records", "-d", "test_directory"])
        result_record_literature = LiteratureRecord.get_record_by_pid_value(
            control_number_literature
        )
        result_record_author = AuthorsRecord.get_record_by_pid_value(
            control_number_author
        )

        assert result.exit_code == 0
        assert control_number_literature == result_record_literature["control_number"]
        assert control_number_author == result_record_author["control_number"]


@freeze_time("2019-12-01")
@mock.patch("inspirehep.records.cli.send_job_deadline_reminder")
def test_close_expired_jobs_with_notify(
    mock_send_job_deadline_reminder, inspire_app, cli
):
    expired_record = create_record(
        "job", data={"status": "open", "deadline_date": "2019-11-01"}
    )
    create_record("job", data={"status": "open", "deadline_date": "2020-11-01"})
    cli.invoke(["jobs", "close_expired_jobs", "--notify"])

    expired_record = JobsRecord.get_record_by_pid_value(
        expired_record["control_number"]
    )

    mock_send_job_deadline_reminder.assert_called_once()
    mock_send_job_deadline_reminder.assert_called_with(dict(expired_record))


@freeze_time("2019-11-01")
def test_close_expired_jobs_has_exclusive_deadline(inspire_app, cli):
    job = create_record("job", data={"status": "open", "deadline_date": "2019-11-01"})
    result = cli.invoke(["jobs", "close_expired_jobs"])
    job = JobsRecord.get_record_by_pid_value(job["control_number"])

    assert result.exit_code == 0
    assert job["status"] == "open"


@freeze_time("2019-11-02")
@mock.patch("inspirehep.records.cli.send_job_deadline_reminder")
def test_close_expired_jobs_without_notify(
    mock_send_job_deadline_reminder, inspire_app, cli
):
    expired_record = create_record(
        "job", data={"status": "open", "deadline_date": "2019-11-01"}
    )
    not_expired_record = create_record(
        "job", data={"status": "open", "deadline_date": "2020-11-01"}
    )
    result = cli.invoke(["jobs", "close_expired_jobs"])
    expired_record = JobsRecord.get_record_by_pid_value(
        expired_record["control_number"]
    )
    not_expired_record = JobsRecord.get_record_by_pid_value(
        not_expired_record["control_number"]
    )

    assert result.exit_code == 0
    assert expired_record["status"] == "closed"
    assert not_expired_record["status"] == "open"

    mock_send_job_deadline_reminder.assert_not_called()


@freeze_time("2019-12-01")
def test_close_expired_jobs_ignores_deleted_records(inspire_app, cli):
    deleted_record = create_record(
        "job", data={"status": "open", "deadline_date": "2019-11-01"}
    )
    deleted_record["deleted"] = True
    deleted_record.update(dict(deleted_record))
    result = cli.invoke(["jobs", "close_expired_jobs"])
    deleted_record = JobsRecord.get_record_by_pid_value(
        deleted_record["control_number"], with_deleted=True
    )

    assert result.exit_code == 0
    assert deleted_record["status"] == "open"


def test_legacy_records_mirror_xml_export(cli, tmp_path):
    xml_path = os.path.join(tmp_path, "legacy_records_xml")
    db.session.add(
        LegacyRecordsMirror.from_marcxml(
            b"<record>"
            b'  <controlfield tag="001">111</controlfield>'
            b'  <datafield tag="245" ind1=" " ind2=" ">'
            b'    <subfield code="a">This is a citing record</subfield>'
            b"  </datafield>"
            b'  <datafield tag="980" ind1=" " ind2=" ">'
            b'    <subfield code="a">HEP</subfield>'
            b"  </datafield>"
            b"</record>"
        )
    )
    db.session.commit()
    cli.invoke(["legacy_records", "export_xml", "--dir-path", xml_path])
    assert os.path.exists(os.path.join(xml_path, "111.xml"))


def test_legacy_records_mirror_xml_upload(cli, s3, tmp_path):
    xml_path = os.path.join(tmp_path, "legacy_records_xml")
    os.mkdir(xml_path)
    current_s3_instance.client.create_bucket(Bucket="inspire-tmp")
    open(os.path.join(xml_path, "987654.xml"), "w").close
    cli.invoke(
        [
            "legacy_records",
            "upload_xmls",
            "--dir-path",
            xml_path,
            "--bucket",
            "inspire-tmp",
        ]
    )
    result = current_s3_instance.file_exists(
        key="legacy_xml_987654.xml", bucket="inspire-tmp"
    )
    assert result


@mock.patch("click.confirm")
def test_legacy_records_mirror_xml_cleanup(mock_click, cli, tmp_path):
    xml_path = os.path.join(tmp_path, "legacy_records_xml")
    os.mkdir(xml_path)
    mock_click.return_value = "y"
    open(os.path.join(xml_path, "1.xml"), "w").close
    open(os.path.join(xml_path, "2.xml"), "w").close
    open(os.path.join(xml_path, "3.xml"), "w").close
    cli.invoke(["legacy_records", "cleanup_dir", "--dir-path", xml_path])
    assert not os.path.exists(xml_path)
