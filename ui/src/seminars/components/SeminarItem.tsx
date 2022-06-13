import React from 'react';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Map } from 'immutable';

import { VideoCameraAddOutlined, FileOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
// @ts-expect-error ts-migrate(2691) FIXME: An import path cannot end with a '.tsx' extension.... Remove this comment to see the full error message
import EditRecordAction from '../../common/components/EditRecordAction.tsx';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/ResultItem' was re... Remove this comment to see the full error message
import ResultItem from '../../common/components/ResultItem';
import { SEMINARS } from '../../common/routes';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/AuthorList' was re... Remove this comment to see the full error message
import AuthorList from '../../common/components/AuthorList';
import { doTimezonesHaveDifferentTimes } from '../../common/utils';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/EventTitle' was re... Remove this comment to see the full error message
import EventTitle from '../../common/components/EventTitle';
// @ts-expect-error ts-migrate(6142) FIXME: Module './SeminarDateTimes' was resolved to '/User... Remove this comment to see the full error message
import SeminarDateTimes from './SeminarDateTimes';
import { LOCAL_TIMEZONE } from '../../common/constants';
// @ts-expect-error ts-migrate(6142) FIXME: Module './ExportToCalendarAction/ExportToCalendarA... Remove this comment to see the full error message
import ExportToCalendarAction from './ExportToCalendarAction/ExportToCalendarAction';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../literature/components/UrlsAction' wa... Remove this comment to see the full error message
import UrlsAction from '../../literature/components/UrlsAction';

function SeminarItem({
  metadata,
  selectedTimezone,
  enableActions
}: any) {
  const title = metadata.get('title');
  const recordId = metadata.get('control_number');
  const canEdit = metadata.get('can_edit', false);
  const urls = metadata.get('urls');
  const joinUrls = metadata.get('join_urls');
  const materialUrls = metadata.get('material_urls');
  const speakers = metadata.get('speakers');
  const startDate = metadata.get('start_datetime');
  const endDate = metadata.get('end_datetime');
  const timezoneDifferentThanLocal =
    selectedTimezone &&
    doTimezonesHaveDifferentTimes(selectedTimezone, LOCAL_TIMEZONE);
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <ResultItem
      // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
      leftActions={
        enableActions && (
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            {urls && <UrlsAction urls={urls} />}
            {joinUrls && (
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <UrlsAction
                urls={joinUrls}
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                icon={<VideoCameraAddOutlined />}
                text="join"
              />
            )}
            {materialUrls && (
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <UrlsAction
                urls={materialUrls}
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                icon={<FileOutlined />}
                text="material"
              />
            )}
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <ExportToCalendarAction seminar={metadata} />
            {canEdit && (
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <EditRecordAction pidType="seminars" pidValue={recordId} />
            )}
          </>
        )
      }
    >
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Row type="flex">
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Col>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Link className="result-item-title" to={`${SEMINARS}/${recordId}`}>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <EventTitle title={title} />
          </Link>
        </Col>
      </Row>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Row>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Col>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <AuthorList authors={speakers} />
        </Col>
      </Row>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Row>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Col>
          {timezoneDifferentThanLocal ? (
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <>
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <SeminarDateTimes
                startDate={startDate}
                endDate={endDate}
                timezone={selectedTimezone}
                displayTimezone
                className="red"
              />{' '}
              (
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <SeminarDateTimes
                startDate={startDate}
                endDate={endDate}
                timezone={LOCAL_TIMEZONE}
                displayTimezone
              />
              )
            </>
          ) : (
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <SeminarDateTimes
              startDate={startDate}
              endDate={endDate}
              timezone={LOCAL_TIMEZONE}
            />
          )}
        </Col>
      </Row>
    </ResultItem>
  );
}

SeminarItem.propTypes = {
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'typeof Map' is not assignable to... Remove this comment to see the full error message
  metadata: PropTypes.instanceOf(Map).isRequired,
  selectedTimezone: PropTypes.string,
  enableActions: PropTypes.bool,
};

SeminarItem.defaultProps = {
  enableActions: true,
};

export default SeminarItem;
