import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'antd';

const ALERT_TYPES_BY_STATUS = { pending: 'warning', closed: 'error' };

function JobStatusAlert({
  status
}: any) {
  // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
  const shouldDisplayAlert = ALERT_TYPES_BY_STATUS[status] != null;

  return (
    shouldDisplayAlert && (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div className="mb2">
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Alert
          // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
          type={ALERT_TYPES_BY_STATUS[status]}
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          message={<span>This job is {status}!</span>}
          showIcon={false}
        />
      </div>
    )
  );
}

JobStatusAlert.propTypes = {
  status: PropTypes.string,
};

export default JobStatusAlert;
