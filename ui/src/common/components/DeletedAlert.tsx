import React from 'react';
import { Alert } from 'antd';

function DeletedAlert() {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className="mb2">
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Alert type="error" message="This record is deleted!" showIcon />
    </div>
  );
}

export default DeletedAlert;
