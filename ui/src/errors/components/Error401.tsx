import React, { Component } from 'react';
import error401Image from '../images/401.svg';
// @ts-expect-error ts-migrate(6142) FIXME: Module './ErrorPage' was resolved to '/Users/karol... Remove this comment to see the full error message
import ErrorPage from './ErrorPage';

class Error401 extends Component {
  render() {
    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <ErrorPage
        // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
        message="Sorry, you are not authorised to view this page."
        imageSrc={error401Image}
      />
    );
  }
}

export default Error401;
