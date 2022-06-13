import React, { Component } from 'react';

// @ts-expect-error ts-migrate(6142) FIXME: Module './SubmissionSuccess' was resolved to '/Use... Remove this comment to see the full error message
import SubmissionSuccess from './SubmissionSuccess';

class SubmissionSuccessPage extends Component {
  render() {
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return <SubmissionSuccess />;
  }
}

export default SubmissionSuccessPage;
