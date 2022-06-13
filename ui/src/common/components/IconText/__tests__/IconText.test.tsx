import React from 'react';
import { shallow } from 'enzyme';
import { InfoOutlined } from '@ant-design/icons';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../IconText' was resolved to '/Users/karol... Remove this comment to see the full error message
import IconText from '../IconText';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('IconText', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('renders with all props set', () => {
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const wrapper = shallow(<IconText icon={<InfoOutlined />} text="Test" />);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper).toMatchSnapshot();
  });
});
