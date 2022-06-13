import React, { Component } from 'react';
import PropTypes from 'prop-types';

// @ts-expect-error ts-migrate(6142) FIXME: Module './Loading' was resolved to '/Users/karolin... Remove this comment to see the full error message
import Loading from './Loading';

class LoadingOrChildren extends Component {
  render() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'loading' does not exist on type 'Readonl... Remove this comment to see the full error message
    const { children, loading } = this.props;
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return loading ? <Loading /> : children;
  }
}

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
LoadingOrChildren.propTypes = {
  loading: PropTypes.bool,
  children: PropTypes.node,
};

// @ts-expect-error ts-migrate(2339) FIXME: Property 'defaultProps' does not exist on type 'ty... Remove this comment to see the full error message
LoadingOrChildren.defaultProps = {
  loading: undefined,
  children: undefined,
};

export default LoadingOrChildren;
