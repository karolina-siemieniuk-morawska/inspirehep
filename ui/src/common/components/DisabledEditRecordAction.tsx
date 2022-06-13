import { EditOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';
import React, { ReactNode } from 'react';
import IconText from './IconText';
import ListItemAction from './ListItemAction';

type DisabledEditRecordActionProps = {
  message: string | ReactNode;
};

export default function DisabledEditRecordAction({
  message,
}: DisabledEditRecordActionProps) {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <ListItemAction>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Tooltip title={message}>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Button disabled>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <IconText text="edit" icon={<EditOutlined />} />
        </Button>
      </Tooltip>
    </ListItemAction>
  );
}
