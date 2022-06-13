import { notification } from 'antd';
import React from 'react';

import { CONFERENCES } from '../common/routes';
// TODO: rename ExternalLink
// becuase it's used also for internal links that we want to open in a new tab
// @ts-expect-error ts-migrate(2691) FIXME: An import path cannot end with a '.tsx' extension.... Remove this comment to see the full error message
import ExternalLink from '../common/components/ExternalLink.tsx';

// to render notification over the drawer, if one is open.
const ASSIGNING_NOTIFICATION_KEY = 'assigning-conferences-notification';

export function assigning() {
  notification.info({
    key: ASSIGNING_NOTIFICATION_KEY,
    message: 'Assigning...',
    description: 'We are processing your request',
    duration: null,
  });
}

export function assignSuccess({
  conferenceId,
  conferenceTitle,
  papers
}: any) {
  notification.close(ASSIGNING_NOTIFICATION_KEY);
  notification.success({
    message: 'Assignment Successful!',
    duration: null,
    description: (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <span>
        {papers.size} selected papers assigned to{' '}
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <ExternalLink target="_blank" href={`${CONFERENCES}/${conferenceId}`}>
          {conferenceTitle}
        </ExternalLink>
      </span>
    ),
  });
}

export function assignError() {
  notification.close(ASSIGNING_NOTIFICATION_KEY);
  notification.error({
    className: 'super-zindex',
    message: 'Assignment Error!',
    description: 'Something went wrong.',
  });
}

export function exportToCdsSuccess({
  papers
}: any) {
  notification.success({
    message: 'Export successful!',
    duration: null,
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    description: <span>{papers.size} selected papers exported to CDS.</span>,
  });
}

export function exportToCdsError() {
  notification.close(ASSIGNING_NOTIFICATION_KEY);
  notification.error({
    className: 'super-zindex',
    message: 'Export to CDS Error!',
    description: 'Something went wrong.',
  });
}

export function exporting() {
  notification.info({
    message: 'Exporting to CDS...',
    description: 'We are processing your request',
    duration: null,
  });
}
