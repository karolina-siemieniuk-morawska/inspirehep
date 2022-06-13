import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';

function JournalInfo({
  info
}: any) {
  const journalTitle = info.get('journal_title');
  const journalIssue = info.get('journal_issue');
  const journalVolume = info.get('journal_volume');
  const year = info.get('year');
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <span>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <i>{journalTitle}</i>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      {journalVolume && <span> {journalVolume}</span>}
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      {year && <span> ({year})</span>}
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      {journalIssue && <span> {journalIssue}</span>}
    </span>
  );
}

JournalInfo.propTypes = {
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'typeof Map' is not assignable to... Remove this comment to see the full error message
  info: PropTypes.instanceOf(Map).isRequired,
};

export default JournalInfo;
