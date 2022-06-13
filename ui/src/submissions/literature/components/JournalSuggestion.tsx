import React, { Component } from 'react';
import PropTypes from 'prop-types';

class JournalSuggestion extends Component {
  render() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'journal' does not exist on type 'Readonl... Remove this comment to see the full error message
    const { journal } = this.props;
    const shortTitle = journal.short_title;
    const journalTitle = journal.journal_title && journal.journal_title.title;
    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <strong>{shortTitle}</strong>
        </div>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className="f7">
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <span>{journalTitle}</span>
        </div>
      </>
    );
  }
}

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
JournalSuggestion.propTypes = {
  journal: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default JournalSuggestion;
