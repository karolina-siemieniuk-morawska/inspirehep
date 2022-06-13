import React from 'react';
import { notification } from 'antd';

import { USER_LOGIN } from '../common/routes';

export default function notifySessionExpired() {
  notification.error({
    message: 'You are logged out due to inactivity.',
    duration: null,
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    description: <a href={`${USER_LOGIN}`}>Go to login page.</a>,
  });
}
