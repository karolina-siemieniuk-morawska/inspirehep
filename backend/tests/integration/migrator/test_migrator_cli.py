# -*- coding: utf-8 -*-
#
# Copyright (C) 2019 CERN.
#
# inspirehep is free software; you can redistribute it and/or modify it under
# the terms of the MIT License; see LICENSE file for more details.

import os

import mock
import orjson
import pkg_resources
import pytest
from helpers.utils import create_record
from invenio_db import db
from invenio_search import current_search
from mock import patch

from inspirehep.migrator.models import LegacyRecordsMirror
from inspirehep.migrator.tasks import populate_mirror_from_file


@pytest.mark.xfail(
    reason="Flaky test, the current_app configuration is not overwritten properly."
)
def test_migrate_file_halts_in_debug_mode(inspire_app, cli, override_config):
    config = {"DEBUG": True}
    with override_config(**config):
        file_name = pkg_resources.resource_filename(
            __name__, os.path.join("fixtures", "1663923.xml")
        )

        result = cli.invoke(["migrate", "file", file_name])

        assert result.exit_code == 1
        assert "DEBUG" in result.output


def test_migrate_file_doesnt_halt_in_debug_mode_when_forced(
    inspire_app, cli, override_config
):
    config = {"DEBUG": True}
    with override_config(**config):
        file_name = pkg_resources.resource_filename(
            __name__, os.path.join("fixtures", "1663923.xml")
        )

        result = cli.invoke(["migrate", "file", "-f", file_name])

        assert result.exit_code == 0
        assert "DEBUG" not in result.output


def test_migrate_file(inspire_app, cli):
    file_name = pkg_resources.resource_filename(
        __name__, os.path.join("fixtures", "1663923.xml")
    )

    result = cli.invoke(["migrate", "file", "-f", file_name])
    with inspire_app.test_client() as client:
        response = client.get("/literature/1663923")

    assert result.exit_code == 0
    assert response.status_code == 200
    assert orjson.loads(response.data)["metadata"]["control_number"] == 1663923


def test_migrate_file_mirror_only(inspire_app, cli):
    file_name = pkg_resources.resource_filename(
        __name__, os.path.join("fixtures", "1663924.xml")
    )

    result = cli.invoke(["migrate", "file", "-m", "-f", file_name])
    prod_record = LegacyRecordsMirror.query.get(1663924)
    with inspire_app.test_client() as client:
        response = client.get("/literature/1663924")

    assert result.exit_code == 0
    assert prod_record.recid == 1663924
    assert response.status_code == 404


@pytest.mark.xfail(reason="Flaky test, the configuration is not overwritten properly.")
def test_migrate_mirror_halts_in_debug_mode(inspire_app, cli, override_config):
    config = {"DEBUG": True}
    with override_config(**config):
        result = cli.invoke(["migrate", "mirror", "-a"])

        assert result.exit_code == 1
        assert "DEBUG" in result.output


def test_migrate_mirror_doesnt_halt_in_debug_mode_when_forced(
    inspire_app, cli, override_config
):
    config = {"DEBUG": True}
    with override_config(**config):
        result = cli.invoke(["migrate", "mirror", "-f"])

        assert result.exit_code == 0
        assert "DEBUG" not in result.output


def test_migrate_mirror_migrates_pending(inspire_app, cli):
    file_name = pkg_resources.resource_filename(
        __name__, os.path.join("fixtures", "1663924.xml")
    )
    populate_mirror_from_file(file_name)
    result = cli.invoke(["migrate", "mirror", "-f"])
    with inspire_app.test_client() as client:
        response = client.get("/literature/1663924")

    assert result.exit_code == 0
    assert response.status_code == 200
    assert orjson.loads(response.data)["metadata"]["control_number"] == 1663924


def test_migrate_mirror_broken_migrates_invalid(inspire_app, cli):

    file_name = pkg_resources.resource_filename(
        __name__, os.path.join("fixtures", "1663927_broken.xml")
    )
    populate_mirror_from_file(file_name)

    result = cli.invoke(["migrate", "mirror", "-f"])
    with inspire_app.test_client() as client:
        response = client.get("/literature/1663927")

    assert result.exit_code == 0
    assert response.status_code == 404  # it's broken

    prod_record = LegacyRecordsMirror.query.get(1663927)
    prod_record.marcxml = prod_record.marcxml.replace(b"Not a date", b"2018")

    assert prod_record.valid is False

    db.session.merge(prod_record)

    result = cli.invoke(["migrate", "mirror", "-f", "-b"])
    with inspire_app.test_client() as client:
        response = client.get("/literature/1663927")

    assert result.exit_code == 0
    assert response.status_code == 200
    assert orjson.loads(response.data)["metadata"]["control_number"] == 1663927


@pytest.mark.xfail(
    reason="""Running this test in the full suite fails because other tests
    modify 2 records in the DB, but this test remigrates their original
    version, which fails ES indexing because of the version bug with the
    citation counts."""
)
def test_migrate_mirror_all_migrates_all(inspire_app, cli):
    file_name = pkg_resources.resource_filename(
        __name__, os.path.join("fixtures", "1663924.xml")
    )
    populate_mirror_from_file(file_name)

    result = cli.invoke(["migrate", "mirror", "-f"])
    with inspire_app.test_client() as client:
        response = client.get("/literature/1663924")

    assert result.exit_code == 0
    assert response.status_code == 200

    prod_record = LegacyRecordsMirror.query.get(1663924)
    prod_record.marcxml = prod_record.marcxml.replace(
        "A Status report on", "A funny joke about"
    )

    assert prod_record.valid is True

    db.session.merge(prod_record)

    result = cli.invoke(["migrate", "mirror", "-f", "-a"])
    with inspire_app.test_client() as client:
        response = client.get("/literature/1663924")

    assert result.exit_code == 0
    assert response.status_code == 200
    assert (
        "A funny joke"
        in orjson.loads(response.data)["metadata"]["abstracts"][0]["value"]
    )


def test_migrate_records_correctly_with_author_and_indexes_correctly(
    inspire_app, cli, datadir
):
    file_name = (datadir / "1734025.xml").as_posix()
    #  Add literature record
    populate_mirror_from_file(file_name)

    #  Add Author
    file_name2 = (datadir / "1607957.xml").as_posix()
    populate_mirror_from_file(file_name2)

    result = cli.invoke(["migrate", "mirror"])
    assert result.exit_code == 0
    current_search.flush_and_refresh("records-hep")
    current_search.flush_and_refresh("records-authors")
    with inspire_app.test_client() as client:
        search_response = client.get("/literature?q=")
        facets_response = client.get("/literature/facets?q=")

        assert search_response.json["hits"]["total"] == 1

        authors = [
            author.get("key")
            for author in facets_response.json["aggregations"]["author"]["buckets"]
        ]
    assert "1607957_Fernando Pastawski" in authors


@patch(
    "inspirehep.migrator.cli.GracefulKiller.kill_now", side_effect=(False, False, True)
)
@patch("inspirehep.migrator.cli.continuous_migration")
def test_migrate_continuously(
    mock_migration, mock_handler, inspire_app, cli, override_config
):
    no_sleep_config = {"MIGRATION_POLLING_SLEEP": 0}

    with override_config(**no_sleep_config):
        result = cli.invoke(["migrate", "continuously"])

    assert result.exit_code == 0
    assert mock_handler.call_count == 3
    assert mock_migration.call_count == 2


def test_regression_migration_step_exits_without_error_when_steps_ends(
    inspire_app, cli
):
    create_record("lit")
    result = cli.invoke(["migrate", "mirror_step", "-s", "2"])
    assert 0 == result.exit_code


@mock.patch("inspirehep.migrator.cli.migrate_from_mirror")
def test_migration_accepts_from_date_correctly(
    mocked_migrate_from_mirror, inspire_app, cli
):
    result = cli.invoke(["migrate", "mirror", "--all", "-d", "2020-01-01"])
    assert result.exit_code == 0
    mocked_migrate_from_mirror.assert_called_once_with(
        date_from="2020-01-01", disable_external_push=True, also_migrate="all"
    )
