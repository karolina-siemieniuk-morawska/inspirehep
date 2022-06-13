import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { InlineUL } from '../../common/components/InlineList';
import { hasDayMonthAndYear, hasMonthAndYear } from '../../common/utils';

function getDisplayFormatForDateString(date: any) {
  if (hasDayMonthAndYear(date)) {
    return 'MMM D, YYYY';
  }

  if (hasMonthAndYear(date)) {
    return 'MMM, YYYY';
  }

  return 'YYYY';
}

function getFormattedDate(date: any) {
  return moment(date).format(getDisplayFormatForDateString(date));
}

function ExperimentDates({
  dateStarted,
  dateProposed,
  dateApproved,
  dateCompleted,
  dateCancelled,
  wrapperClassName
}: any) {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <InlineUL wrapperClassName={wrapperClassName}>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      {dateProposed && <span>Proposed: {getFormattedDate(dateProposed)}</span>}
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      {dateApproved && <span>Approved: {getFormattedDate(dateApproved)}</span>}
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      {dateStarted && <span>Started: {getFormattedDate(dateStarted)}</span>}
      {dateCancelled && (
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <span>Cancelled: {getFormattedDate(dateCancelled)}</span>
      )}
      {dateCompleted && (
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <span>Completed: {getFormattedDate(dateCompleted)}</span>
      )}
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      {!dateCancelled && !dateCompleted && <span>Still Running</span>}
    </InlineUL>
  );
}

ExperimentDates.propTypes = {
  dateStarted: PropTypes.string,
  dateProposed: PropTypes.string,
  dateApproved: PropTypes.string,
  dateCompleted: PropTypes.string,
  dateCancelled: PropTypes.string,
  wrapperClassName: PropTypes.string,
};

export default ExperimentDates;
