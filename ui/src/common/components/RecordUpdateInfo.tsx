import React from 'react';
import PropTypes from 'prop-types';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'mome... Remove this comment to see the full error message
import moment from 'moment-timezone';
import { LOCAL_TIMEZONE } from '../constants';

const DATE_AND_TIME_DISPLAY_FORMAT = `MMM D, YYYY`;

function RecordUpdateInfo({
  updateDate
}: any) {
  const formattedDate = moment
    .utc(updateDate)
    .tz(LOCAL_TIMEZONE)
    .format(DATE_AND_TIME_DISPLAY_FORMAT);
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return <span className="light-silver">Updated on {formattedDate}</span>;
}

RecordUpdateInfo.propTypes = { updateDate: PropTypes.string.isRequired };

export default RecordUpdateInfo;
