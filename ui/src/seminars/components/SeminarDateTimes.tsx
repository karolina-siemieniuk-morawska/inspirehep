import React from 'react';
import PropTypes from 'prop-types';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'mome... Remove this comment to see the full error message
import moment from 'moment-timezone';
import { TIME_FORMAT } from '../../common/constants';

function SeminarDateTimes({
  startDate,
  endDate,
  timezone,
  displayTimezone,
  className
}: any) {
  const startMoment = moment.utc(startDate).tz(timezone);
  const endMoment = moment.utc(endDate).tz(timezone);
  const DATE_AND_TIME_DISPLAY_FORMAT = `D MMMM YYYY, ${TIME_FORMAT}`;
  const startDateDisplay = startMoment.format(DATE_AND_TIME_DISPLAY_FORMAT);
  const endDateDisplay = startMoment.isSame(endMoment, 'day')
    ? endMoment.format(TIME_FORMAT)
    : endMoment.format(DATE_AND_TIME_DISPLAY_FORMAT);
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <span className={className}>
      {startDateDisplay} - {endDateDisplay}
      {displayTimezone ? ` ${moment.tz(timezone).format('z')}` : ''}
    </span>
  );
}

SeminarDateTimes.propTypes = {
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  timezone: PropTypes.string.isRequired,
  displayTimezone: PropTypes.bool,
  className: PropTypes.string,
};
SeminarDateTimes.defaultProps = {
  displayTimezone: false,
};

export default SeminarDateTimes;
