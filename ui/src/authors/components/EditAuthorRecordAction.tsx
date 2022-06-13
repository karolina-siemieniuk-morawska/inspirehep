import React from 'react';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/DisabledEditRecord... Remove this comment to see the full error message
import DisabledEditRecordAction from '../../common/components/DisabledEditRecordAction';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/EditRecordAction' ... Remove this comment to see the full error message
import EditRecordAction from '../../common/components/EditRecordAction';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/ExternalLink' was ... Remove this comment to see the full error message
import ExternalLink from '../../common/components/ExternalLink';
import PidValue from '../../common/types/PidValue';

type EditAuthorRecordActionProps = {
  isCatalogerLoggedIn: boolean;
  canEdit: boolean;
  pidValue: PidValue;
};

const CAN_NOT_EDIT_AUTHOR_MESSAGE = (
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <span>
    Login to edit your profile. For any changes in other profiles, contact us at{' '}
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <ExternalLink href="mailto:authors@inspirehep.net">
      authors@inspirehep.net
    </ExternalLink>
  </span>
);

export default function EditAuthorRecordAction({
  isCatalogerLoggedIn,
  canEdit,
  pidValue,
}: EditAuthorRecordActionProps) {
  return canEdit ? (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <EditRecordAction
      pidType="authors"
      pidValue={pidValue}
      isCatalogerLoggedIn={isCatalogerLoggedIn}
    />
  ) : (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <DisabledEditRecordAction message={CAN_NOT_EDIT_AUTHOR_MESSAGE} />
  );
}
