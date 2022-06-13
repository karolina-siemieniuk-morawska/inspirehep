import React from 'react';
import { Modal, Button } from 'antd';
import PropTypes from 'prop-types';
import pluralizeUnlessSingle from '../../common/utils';

function ExportToCdsModal({
  visible,
  onCancel,
  onOk,
  selectionSize
}: any) {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Modal
      visible={visible}
      onCancel={onCancel}
      footer={[
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Button key="confirm" type="primary" onClick={onOk}>
          Confirm
        </Button>,
      ]}
    >
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <p>
        You have selected {selectionSize}{' '}
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        {pluralizeUnlessSingle('paper', selectionSize)}.<br />
        Are you sure you want to export it to CDS?
      </p>
    </Modal>
  );
}

ExportToCdsModal.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onOk: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  selectionSize: PropTypes.number.isRequired,
};

export default ExportToCdsModal;
