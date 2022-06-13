import React, { Component } from 'react';
import PropTypes from 'prop-types';

// @ts-expect-error ts-migrate(6142) FIXME: Module './LinkLikeButton' was resolved to '/Users/... Remove this comment to see the full error message
import LinkLikeButton from './LinkLikeButton';

class GoBackLink extends Component {
  render() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'onClick' does not exist on type 'Readonl... Remove this comment to see the full error message
    const { children, onClick } = this.props;
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return <LinkLikeButton onClick={onClick}>{children}</LinkLikeButton>;
  }
}

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
GoBackLink.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string,
};

// @ts-expect-error ts-migrate(2339) FIXME: Property 'defaultProps' does not exist on type 'ty... Remove this comment to see the full error message
GoBackLink.defaultProps = {
  children: 'go back',
};

export default GoBackLink;
