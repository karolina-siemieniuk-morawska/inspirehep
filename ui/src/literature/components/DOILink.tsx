import React, { Component } from 'react';
import PropTypes from 'prop-types';

// @ts-expect-error ts-migrate(2691) FIXME: An import path cannot end with a '.tsx' extension.... Remove this comment to see the full error message
import ExternalLink from '../../common/components/ExternalLink.tsx';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/EventTracker' was ... Remove this comment to see the full error message
import EventTracker from '../../common/components/EventTracker';

class DOILink extends Component {
  render() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'doi' does not exist on type 'Readonly<{}... Remove this comment to see the full error message
    const { children, doi } = this.props;
    const href = `//doi.org/${doi}`;
    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <EventTracker eventId="DoiLink">
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <ExternalLink href={href}>{children}</ExternalLink>
      </EventTracker>
    );
  }
}

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
DOILink.propTypes = {
  children: PropTypes.node.isRequired,
  doi: PropTypes.string.isRequired,
};

export default DOILink;
