import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { FileDoneOutlined } from '@ant-design/icons';
import { Button, Menu, Tooltip } from 'antd';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { useParams } from 'react-router-dom';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/DropdownMenu' was ... Remove this comment to see the full error message
import DropdownMenu from '../../common/components/DropdownMenu';
import IconText from '../../common/components/IconText';
import ListItemAction from '../../common/components/ListItemAction';

function AssignDifferentProfileAction({
  onAssignWithoutUnclaimed,
  onAssignWithoutClaimed,
  disabled,
  currentUserId,
  claimingUnclaimedPapersDisabled,
  claimingClaimedPapersDisabled
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
    });
  }, [currentAuthorId, currentUserId, onAssignWithoutUnclaimed]);

  const onSelfAssign = () => {
    if (!claimingUnclaimedPapersDisabled) {
      onAssignUnclaimed();
    }
    if (!claimingClaimedPapersDisabled) {
      onAssignClaimed();
    }
  };

  return (
    // TODO: rename `ListItemAction` because it's not only used for list item actions, such as (assign all and cite all)
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <ListItemAction>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <DropdownMenu
        // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
        disabled={disabled}
        title={
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Tooltip
            title={
              disabled
                ? 'Please select the papers you want to claim or remove from the profile.'
                : null
            }
          >
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Button>
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <IconText text="claim" icon={<FileDoneOutlined />} />
            </Button>
          </Tooltip>
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

AssignDifferentProfileAction.propTypes = {
  onAssignWithoutUnclaimed: PropTypes.func.isRequired,
  onAssignWithoutClaimed: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  claimingUnclaimedPapersDisabled: PropTypes.bool,
  claimingClaimedPapersDisabled: PropTypes.bool,
};

export default AssignDifferentProfileAction;
