import React from 'react';
import { Alert } from 'antd';

const WARNING_MESSAGE = (
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <span>
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <strong>Disclaimer: </strong> Please note that the list of seminars is
    managed by users and INSPIRE makes no claims as to its completeness and
    accuracy.
  </span>
);

function SeminarCountWarning() {
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return <Alert message={WARNING_MESSAGE} type="warning" showIcon />;
}

export default SeminarCountWarning;
