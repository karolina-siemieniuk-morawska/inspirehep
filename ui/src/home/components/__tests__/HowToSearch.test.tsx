import React from 'react';
import { shallow } from 'enzyme';
import { Radio } from 'antd';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../HowToSearch' was resolved to '/Users/ka... Remove this comment to see the full error message
import HowToSearch, { FREETEXT_RADIO } from '../HowToSearch';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('HowToSearch', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('renders with spires examples by default', () => {
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const wrapper = shallow(<HowToSearch />);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper).toMatchSnapshot();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('renders freetext examples after freetext radio option is selected', () => {
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const wrapper = shallow(<HowToSearch />);
    const changeEvent = { target: { value: FREETEXT_RADIO } };
    wrapper.find(Radio.Group).simulate('change', changeEvent);
    wrapper.update();
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper).toMatchSnapshot();
  });
});
