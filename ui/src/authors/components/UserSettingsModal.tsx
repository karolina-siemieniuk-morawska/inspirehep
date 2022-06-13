import React from 'react';
import { Modal } from 'antd';
import PropTypes from 'prop-types';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../containers/OrcidPushSettingContainer' w... Remove this comment to see the full error message
import OrcidPushSettingContainer from '../containers/OrcidPushSettingContainer';

function UserSettingsModal({
  onCancel,
  visible
}: any) {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Modal title="Settings" visible={visible} footer={null} onCancel={onCancel}>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <OrcidPushSettingContainer />
    </Modal>
  );
}

UserSettingsModal.propTypes = {
  onCancel: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default UserSettingsModal;
