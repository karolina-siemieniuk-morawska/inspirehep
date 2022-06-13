import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getFromObjectOrImmutableMap } from '../utils';
import { ErrorPropType } from '../propTypes';
// @ts-expect-error ts-migrate(6142) FIXME: Module './ErrorAlert' was resolved to '/Users/karo... Remove this comment to see the full error message
import ErrorAlert from './ErrorAlert';

class ErrorAlertOrChildren extends Component {
  render() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'error' does not exist on type 'Readonly<... Remove this comment to see the full error message
    const { error, children } = this.props;
    if (error) {
      return (
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <ErrorAlert message={getFromObjectOrImmutableMap(error, 'message')} />
      );
    }
    return children;
  }
}

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
ErrorAlertOrChildren.propTypes = {
  error: ErrorPropType,
  children: PropTypes.node,
};

export default ErrorAlertOrChildren;
