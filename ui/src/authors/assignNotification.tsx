import { notification } from 'antd';
import React from 'react';

import { AUTHORS } from '../common/routes';
// TODO: rename ExternalLink
// becuase it's used also for internal links that we want to open in a new tab
// @ts-expect-error ts-migrate(2691) FIXME: An import path cannot end with a '.tsx' extension.... Remove this comment to see the full error message
import ExternalLink from '../common/components/ExternalLink.tsx';
import pluralizeUnlessSingle from '../common/utils';

// to render notification over the drawer, if one is open.
const ASSIGNING_NOTIFICATION_KEY = 'assigning-notification';

export function assigning() {
  notification.info({
    key: ASSIGNING_NOTIFICATION_KEY,
    message: 'Claiming...',
    description: 'We are processing your request',
    duration: null,
  });
}

export function assignSuccess({
  from,
  to,
  papers
}: any) {
  notification.close(ASSIGNING_NOTIFICATION_KEY);
  notification.success({
    message: 'Processing request...',
    duration: null,
    description: (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <span>
        Selected papers ({papers}) will be moved from{' '}
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <ExternalLink target="_blank" href={`${AUTHORS}/${from}`}>
          {from}
        </ExternalLink>{' '}
        to{' '}
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <ExternalLink target="_blank" href={`${AUTHORS}/${to}`}>
          {to}
        </ExternalLink>
        .
      </span>
    ),
  });
}

export function assignSuccessOwnProfile({
  numberOfClaimedPapers,
  numberOfUnclaimedPapers
}: any) {
  const message =
    numberOfClaimedPapers === 0
      ? 'All selected papers will be claimed to your profile.'
      : `${numberOfUnclaimedPapers} ${pluralizeUnlessSingle(
          'paper',
          numberOfUnclaimedPapers
        )} will be claimed to your profile. ${numberOfClaimedPapers} ${pluralizeUnlessSingle(
          'paper',
          numberOfClaimedPapers
        )} can not be claimed. `;
  notification.close(ASSIGNING_NOTIFICATION_KEY);
  notification.success({
    message,
    duration: null,
  });
}

export function unassignSuccessOwnProfile() {
  const message = 'All selected papers will be removed from your profile.';
  notification.success({
    message,
    duration: null,
  });
}

export function assignSuccessDifferentProfileUnclaimedPapers() {
  const message = 'All selected papers will be moved to your profile.';
  notification.close(ASSIGNING_NOTIFICATION_KEY);
  notification.success({
    message,
    duration: null,
  });
}

export function assignSuccessDifferentProfileClaimedPapers() {
  const message = 'Some claims will be reviewed by our staff for approval.';
  notification.close(ASSIGNING_NOTIFICATION_KEY);
  notification.success({
    message,
    duration: null,
  });
}

export function assignError() {
  notification.close(ASSIGNING_NOTIFICATION_KEY);
  notification.error({
    className: 'super-zindex',
    message: 'Claim Error!',
    description: 'Something went wrong.',
  });
}
