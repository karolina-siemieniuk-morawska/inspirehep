import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { EditOutlined } from '@ant-design/icons';

import ListItemAction from './ListItemAction';
import IconText from './IconText';
// @ts-expect-error ts-migrate(6142) FIXME: Module './EventTracker' was resolved to '/Users/ka... Remove this comment to see the full error message
import EventTracker from './EventTracker';
// @ts-expect-error ts-migrate(6142) FIXME: Module './ExternalLink' was resolved to '/Users/ka... Remove this comment to see the full error message
import ExternalLink from './ExternalLink';

import {
  EDIT_LITERATURE,
  EDIT_JOB,
  EDIT_CONFERENCE,
  EDIT_AUTHOR,
  EDIT_AUTHOR_CATALOGER,
  EDIT_INSTITUTION,
  EDIT_SEMINAR,
} from '../routes';
import PidType from '../types/PidType';
import PidValue from '../types/PidValue';

const pidTypeToEditRoutePrefix = {
  literature: EDIT_LITERATURE,
  jobs: EDIT_JOB,
  conferences: EDIT_CONFERENCE,
  authors: EDIT_AUTHOR,
  institutions: EDIT_INSTITUTION,
  seminars: EDIT_SEMINAR,
};

interface EditRecordActionProps {
  pidType: PidType;
  pidValue: PidValue;
  isCatalogerLoggedIn: boolean;
}

export default function EditRecordAction({
  pidType,
  pidValue,
  isCatalogerLoggedIn,
}: EditRecordActionProps) {
  const pidTypeRoute =
    pidType === 'authors' && isCatalogerLoggedIn
      ? EDIT_AUTHOR_CATALOGER
      : pidTypeToEditRoutePrefix[pidType];

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <ListItemAction>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <EventTracker eventId="Edit">
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <ExternalLink href={`${pidTypeRoute}/${pidValue}`}>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <IconText text="edit" icon={<EditOutlined />} />
        </ExternalLink>
      </EventTracker>
    </ListItemAction>
  );
}
