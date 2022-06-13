import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { FileDoneOutlined } from '@ant-design/icons';
import { Button, Menu } from 'antd';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { useParams } from 'react-router-dom';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/DropdownMenu' was ... Remove this comment to see the full error message
import DropdownMenu from '../../common/components/DropdownMenu';
import IconText from '../../common/components/IconText';
import ListItemAction from '../../common/components/ListItemAction';

function AssignOneDifferentProfileAction({
  onAssignWithoutUnclaimed,
  onAssignWithoutClaimed,
  onAssignUserCanNotClaim,
  currentUserId,
  claimingUnclaimedPapersDisabled,
  claimingClaimedPapersDisabled,
  userCanNotClaimProfile
}: any) {
  const currentAuthorId = Number(useParams().id);
  const onAssignUnclaimed = useCallback(() => {
    onAssignWithoutClaimed({
      from: currentAuthorId,
      to: currentUserId,
    });
  }, [currentAuthorId, currentUserId, onAssignWithoutClaimed]);
  const onAssignClaimed = useCallback(() => {
    onAssignWithoutUnclaimed({
      from: currentAuthorId,
      to: currentUserId,
      userCanNotClaimProfile,
    });
  }, [
    currentAuthorId,
    currentUserId,
    userCanNotClaimProfile,
    onAssignWithoutUnclaimed,
  ]);

  const onAssignUserCantClaim = useCallback(() => {
    onAssignUserCanNotClaim({
      from: currentAuthorId,
      to: currentUserId,
    });
  }, [currentAuthorId, currentUserId, onAssignUserCanNotClaim]);

  const onSelfAssign = () => {
    const onlyCanNotClaim =
      userCanNotClaimProfile && claimingClaimedPapersDisabled;
    const onlyClaimUnclaimed =
      !claimingUnclaimedPapersDisabled &&
      !userCanNotClaimProfile &&
      claimingClaimedPapersDisabled;
    const onlyClaimClaimedAndMaybeNotMatchingName = !claimingClaimedPapersDisabled;

    if (onlyCanNotClaim) {
      onAssignUserCantClaim();
    }
    if (onlyClaimUnclaimed) {
      onAssignUnclaimed();
    }
    if (onlyClaimClaimedAndMaybeNotMatchingName) {
      onAssignClaimed();
    }
  };

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <ListItemAction>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <DropdownMenu
        // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
        title={
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Button>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <IconText text="claim" icon={<FileDoneOutlined />} />
          </Button>
        }
      >
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Menu.Item
          data-test-id="assign-self"
          key="assign-self"
          onClick={onSelfAssign}
        >
          Move to my profile
        </Menu.Item>
      </DropdownMenu>
    </ListItemAction>
  );
}

AssignOneDifferentProfileAction.propTypes = {
  onAssignWithoutUnclaimed: PropTypes.func.isRequired,
  onAssignWithoutClaimed: PropTypes.func.isRequired,
  onAssignUserCanNotClaim: PropTypes.func.isRequired,
  claimingUnclaimedPapersDisabled: PropTypes.bool,
  claimingClaimedPapersDisabled: PropTypes.bool,
  userCanNotClaimProfile: PropTypes.bool,
};

export default AssignOneDifferentProfileAction;
