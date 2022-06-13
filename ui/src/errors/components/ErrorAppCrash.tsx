import React, { Component } from 'react';
import { Row } from 'antd';

import error500Image from '../images/500.svg';
// @ts-expect-error ts-migrate(6142) FIXME: Module './ErrorPage' was resolved to '/Users/karol... Remove this comment to see the full error message
import ErrorPage from './ErrorPage';

class ErrorAppCrash extends Component {
  render() {
    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Row type="flex" justify="center">
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <ErrorPage
          // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
          message="Something went wrong"
          detail={
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <span>
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              Please try again later, you can <a href="/">go back home</a> now.
            </span>
          }
          imageSrc={error500Image}
        />
      </Row>
    );
  }
}

export default ErrorAppCrash;
