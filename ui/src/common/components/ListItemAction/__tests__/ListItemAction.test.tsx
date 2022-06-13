import React from 'react';
import { shallow } from 'enzyme';
import { Button } from 'antd';
import { ExpandOutlined } from '@ant-design/icons';

import IconText from '../../IconText';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../ListItemAction' was resolved to '/Users... Remove this comment to see the full error message
import ListItemAction from '../ListItemAction';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('ListItemAction', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('renders', () => {
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <ListItemAction>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Button>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <IconText text="cite" icon={<ExpandOutlined />} />
        </Button>
      </ListItemAction>
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper).toMatchSnapshot();
  });
});
