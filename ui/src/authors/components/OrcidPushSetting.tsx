import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Switch, Popconfirm } from 'antd';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../containers/OrcidPushSettingMessageConta... Remove this comment to see the full error message
import OrcidPushSettingMessageContainer from '../containers/OrcidPushSettingMessageContainer';

function renderPopConfirmTitle(isCurrentlyEnabled: any) {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      {isCurrentlyEnabled ? (
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <p>
          Your INSPIRE works will no longer be exported to your ORCID account.
        </p>
      ) : (
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <p>
          Your INSPIRE claimed works will be exported to your ORCID account.
        </p>
      )}
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <span>Are you sure?</span>
    </>
  );
}

function OrcidPushSetting({
  isUpdating,
  onChange,
  enabled
}: any) {
  const onSettingToggleConfirm = useCallback(() => {
    onChange(!enabled);
  }, [enabled, onChange]);
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div className="mb3">
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <span className="mr2">Export your INSPIRE works to ORCID</span>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Popconfirm
          title={renderPopConfirmTitle(enabled)}
          onConfirm={onSettingToggleConfirm}
        >
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Switch loading={isUpdating} checked={enabled} />
        </Popconfirm>
      </div>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <OrcidPushSettingMessageContainer />
      </div>
    </>
  );
}

OrcidPushSetting.propTypes = {
  onChange: PropTypes.func.isRequired,
  isUpdating: PropTypes.bool.isRequired,
  enabled: PropTypes.bool.isRequired,
};

export default OrcidPushSetting;
