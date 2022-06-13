import React, { Component } from 'react';

import error500Image from '../images/500.svg';
// @ts-expect-error ts-migrate(6142) FIXME: Module './ErrorPage' was resolved to '/Users/karol... Remove this comment to see the full error message
import ErrorPage from './ErrorPage';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/containers/GoBackLinkContaine... Remove this comment to see the full error message
import GoBackLinkContainer from '../../common/containers/GoBackLinkContainer';

class Error500 extends Component {
  render() {
    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <ErrorPage
        // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
        message="Something went wrong"
        detail={
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <span>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            Please try again later or <GoBackLinkContainer />
          </span>
        }
        imageSrc={error500Image}
      />
    );
  }
}

export default Error500;
