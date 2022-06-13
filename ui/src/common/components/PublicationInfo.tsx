import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import { getPageDisplay } from '../../literature/utils';
// @ts-expect-error ts-migrate(6142) FIXME: Module './JournalInfo' was resolved to '/Users/kar... Remove this comment to see the full error message
import JournalInfo from './JournalInfo';

class PublicationInfo extends Component {
  getPageOrArtidDisplay() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'info' does not exist on type 'Readonly<{... Remove this comment to see the full error message
    const { info } = this.props;

    if (getPageDisplay(info)) {
      return getPageDisplay(info);
    }

    if (info.has('artid')) {
      return info.get('artid');
    }
    return null;
  }

  render() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'info' does not exist on type 'Readonly<{... Remove this comment to see the full error message
    const { info } = this.props;
    const material = info.get('material');
    const journalIssue = info.get('journal_issue');
    const pageOrArtidDisplay = this.getPageOrArtidDisplay();
    if (info.has('journal_title')) {
      return (
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <span>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <JournalInfo info={info} />
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          {pageOrArtidDisplay && journalIssue && <span>,</span>}
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          {pageOrArtidDisplay && <span> {pageOrArtidDisplay}</span>}
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          {material && material !== 'publication' && <span> ({material})</span>}
        </span>
      );
    }

    if (info.has('pubinfo_freetext')) {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      return <span>{info.get('pubinfo_freetext')}</span>;
    }

    return null;
  }
}

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
PublicationInfo.propTypes = {
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'typeof Map' is not assignable to... Remove this comment to see the full error message
  info: PropTypes.instanceOf(Map).isRequired,
};

export default PublicationInfo;
