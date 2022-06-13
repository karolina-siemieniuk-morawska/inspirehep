import React from 'react';
import { shallow } from 'enzyme';
import { Button } from 'antd';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../UserSettingsAction' was resolved to '/U... Remove this comment to see the full error message
import UserSettingsAction from '../UserSettingsAction';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../UserSettingsModal' was resolved to '/Us... Remove this comment to see the full error message
import UserSettingsModal from '../UserSettingsModal';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('UserSettingsAction', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('renders', () => {
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const wrapper = shallow(<UserSettingsAction />);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper).toMatchSnapshot();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('sets modal visible on click and invisible on modal cancel', () => {
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const wrapper = shallow(<UserSettingsAction />);

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.find(UserSettingsModal)).toHaveProp({
      visible: false,
    });

    wrapper.find(Button).simulate('click');
    wrapper.update();
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.find(UserSettingsModal)).toHaveProp({
      visible: true,
    });

    const onModalCancel = wrapper.find(UserSettingsModal).prop('onCancel');
    onModalCancel();
    wrapper.update();
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.find(UserSettingsModal)).toHaveProp({
      visible: false,
    });
  });
});
