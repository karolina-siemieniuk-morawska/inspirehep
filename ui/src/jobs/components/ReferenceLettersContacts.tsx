import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/URLList' was resol... Remove this comment to see the full error message
import URLList from '../../common/components/URLList';
// @ts-expect-error ts-migrate(6142) FIXME: Module './EmailList' was resolved to '/Users/karol... Remove this comment to see the full error message
import EmailList from './EmailList';
import { InlineUL } from '../../common/components/InlineList';

class ReferenceLettersContacts extends Component {
  render() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'referenceLetters' does not exist on type... Remove this comment to see the full error message
    const { referenceLetters } = this.props;
    const urls = referenceLetters.get('urls');
    const emails = referenceLetters.get('emails');
    const shouldRender = Boolean(urls || emails);
    return (
      shouldRender && (
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <strong>Letters of Reference should be sent to: </strong>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <InlineUL wrapperClassName="di">
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            {emails && <EmailList emails={emails} />}
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            {urls && <URLList urls={urls} />}
          </InlineUL>
        </div>
      )
    );
  }
}

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
ReferenceLettersContacts.propTypes = {
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'typeof Map' is not assignable to... Remove this comment to see the full error message
  referenceLetters: PropTypes.instanceOf(Map),
};
// @ts-expect-error ts-migrate(2339) FIXME: Property 'defaultProps' does not exist on type 'ty... Remove this comment to see the full error message
ReferenceLettersContacts.defaultProps = {
  referenceLetters: Map(),
};
export default ReferenceLettersContacts;
