import React, { Component } from 'react';
import PropTypes from 'prop-types';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Link } from 'react-router-dom';

import { LITERATURE } from '../routes';

class CollaborationLink extends Component {
  get collaboration() {
    const { children } = this.props;
    return children;
  }

  render() {
    const link = `${LITERATURE}?q=collaboration:${this.collaboration}`;
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return <Link to={link}>{this.collaboration}</Link>;
  }
}

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
CollaborationLink.propTypes = {
  children: PropTypes.string.isRequired,
};

export default CollaborationLink;
