import React, { Component } from 'react';
import PropTypes from 'prop-types';

// @ts-expect-error ts-migrate(2691) FIXME: An import path cannot end with a '.tsx' extension.... Remove this comment to see the full error message
import ExternalLink from '../../common/components/ExternalLink.tsx';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/EventTracker' was ... Remove this comment to see the full error message
import EventTracker from '../../common/components/EventTracker';

class ArxivEprintLink extends Component {
  get arxivId() {
    const { children } = this.props;
    return children;
  }

  render() {
    const href = `//arxiv.org/abs/${this.arxivId}`;
    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <EventTracker eventId="ArvixEprintLink">
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <ExternalLink href={href}>{this.arxivId}</ExternalLink>
      </EventTracker>
    );
  }
}

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
ArxivEprintLink.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ArxivEprintLink;
