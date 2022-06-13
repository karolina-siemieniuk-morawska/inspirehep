import React, { Component } from 'react';

import error500Image from '../images/500.svg';
// @ts-expect-error ts-migrate(6142) FIXME: Module './ErrorPage' was resolved to '/Users/karol... Remove this comment to see the full error message
import ErrorPage from './ErrorPage';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/containers/GoBackLinkContaine... Remove this comment to see the full error message
import GoBackLinkContainer from '../../common/containers/GoBackLinkContainer';

class ErrorNetwork extends Component {
  render() {
    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <ErrorPage
        // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
        message="Connection error!"
        imageSrc={error500Image}
        detail={
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <span>
            Please check your internet connection and{' '}
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <GoBackLinkContainer>try again</GoBackLinkContainer>
          </span>
        }
      />
    );
  }
}

export default ErrorNetwork;
