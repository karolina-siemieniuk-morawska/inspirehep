import React from 'react';
import { shallow } from 'enzyme';
import { Popconfirm } from 'antd';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../OrcidPushSetting' was resolved to '/Use... Remove this comment to see the full error message
import OrcidPushSetting from '../OrcidPushSetting';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('OrcidPushSetting', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('renders when enabled', () => {
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <OrcidPushSetting onChange={jest.fn()} isUpdating={false} enabled />
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper).toMatchSnapshot();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('renders when disabled', () => {
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <OrcidPushSetting
        // @ts-expect-error ts-migrate(2708) FIXME: Cannot use namespace 'jest' as a value.
        onChange={jest.fn()}
        isUpdating={false}
        enabled={false}
      />
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper).toMatchSnapshot();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('calls on change when toggling is confirmed', () => {
    // @ts-expect-error ts-migrate(2708) FIXME: Cannot use namespace 'jest' as a value.
    const onChange = jest.fn();
    const currentEnabled = true;
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <OrcidPushSetting
        onChange={onChange}
        isUpdating={false}
        enabled={currentEnabled}
      />
    );
    const onConfirm = wrapper.find(Popconfirm).prop('onConfirm');
    // @ts-expect-error ts-migrate(2722) FIXME: Cannot invoke an object which is possibly 'undefin... Remove this comment to see the full error message
    onConfirm();
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(onChange).toHaveBeenCalledWith(!currentEnabled);
  });
});
