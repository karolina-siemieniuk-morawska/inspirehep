import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { ToolOutlined } from '@ant-design/icons';
import { Button, Menu } from 'antd';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/DropdownMenu' was ... Remove this comment to see the full error message
import DropdownMenu from '../../common/components/DropdownMenu';
import IconText from '../../common/components/IconText';
import ListItemAction from '../../common/components/ListItemAction';
import { MAX_BULK_ASSIGN } from '../constants';
// @ts-expect-error ts-migrate(6142) FIXME: Module './ExportToCdsModal' was resolved to '/User... Remove this comment to see the full error message
import ExportToCdsModal from './ExportToCdsModal';

function ToolAction({
  onAssignToConference,
  onExportToCds,
  disabledBulkAssign,
  selectionSize
}: any) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const onClickExportToCds = useCallback(() => {
    setIsModalVisible(true);
  }, []);
  const onExportToCdsModalCancel = useCallback(() => {
    setIsModalVisible(false);
  }, []);

  const handleCdsExportOk = () => {
    setIsModalVisible(false);
    onExportToCds();
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
            <IconText text="tools" icon={<ToolOutlined />} />
          </Button>
        }
      >
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Menu.Item
          title={
            disabledBulkAssign
              ? `Please select up to ${MAX_BULK_ASSIGN} papers that you want to assign to a conference.`
              : null
          }
          disabled={disabledBulkAssign}
          data-test-id="assign-conference"
          key="assign-conference"
          onClick={() => onAssignToConference()}
        >
          Assign conference
        </Menu.Item>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Menu.Item
          title={
            disabledBulkAssign
              ? `Please select up to ${MAX_BULK_ASSIGN} papers that you want to export to CDS.`
              : null
          }
          disabled={disabledBulkAssign}
          data-test-id="export-to-CDS"
          key="export-to-CDS"
          onClick={onClickExportToCds}
        >
          Export to CDS
        </Menu.Item>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <ExportToCdsModal
          onCancel={onExportToCdsModalCancel}
          onOk={handleCdsExportOk}
          visible={isModalVisible}
          selectionSize={selectionSize}
        />
      </DropdownMenu>
    </ListItemAction>
  );
}

ToolAction.propTypes = {
  onAssignToConference: PropTypes.func.isRequired,
  onExportToCds: PropTypes.func.isRequired,
  disabledBulkAssign: PropTypes.bool,
  selectionSize: PropTypes.number,
};

export default ToolAction;
