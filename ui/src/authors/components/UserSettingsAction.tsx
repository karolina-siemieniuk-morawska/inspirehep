import React, { useCallback, useState } from 'react';
import { Button } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

import ListItemAction from '../../common/components/ListItemAction';
import IconText from '../../common/components/IconText';
// @ts-expect-error ts-migrate(6142) FIXME: Module './UserSettingsModal' was resolved to '/Use... Remove this comment to see the full error message
import UserSettingsModal from './UserSettingsModal';

function UserSettingsAction() {
  const [isSettingsModalVisible, setSettingsModalVisible] = useState(false);

  const onClick = useCallback(() => {
    setSettingsModalVisible(true);
  }, []);
  const onSettingsModalCancel = useCallback(() => {
    setSettingsModalVisible(false);
  }, []);
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <ListItemAction>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Button onClick={onClick}>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <IconText text="settings" icon={<SettingOutlined />} />
        </Button>
      </ListItemAction>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <UserSettingsModal
        visible={isSettingsModalVisible}
        onCancel={onSettingsModalCancel}
      />
    </>
  );
}

export default UserSettingsAction;
