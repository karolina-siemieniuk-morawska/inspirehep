import React from 'react';
import { FileDoneOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/DropdownMenu' was ... Remove this comment to see the full error message
import DropdownMenu from '../../common/components/DropdownMenu';
import IconText from '../../common/components/IconText';
import ListItemAction from '../../common/components/ListItemAction';

// @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
const ClaimingDisabledButton = () => <ListItemAction>
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <DropdownMenu
    // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
    disabled
    title={
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Tooltip title='Login to claim your papers'>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Button disabled>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <IconText text="claim" icon={<FileDoneOutlined />} />
        </Button>
      </Tooltip>
    }
  />
</ListItemAction>;

export default ClaimingDisabledButton;
