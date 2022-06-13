import React from 'react';
import { shallow } from 'enzyme';
import { Select } from 'antd';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../SelectBox' was resolved to '/Users/karo... Remove this comment to see the full error message
import SelectBox from '../SelectBox';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('SelectBox', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('render initial state with all props set', () => {
    const options = [
      { value: 'value1', display: 'Value 1' },
      { value: 'value2', display: 'Value 2' },
    ];
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <SelectBox
        // @ts-expect-error ts-migrate(2322) FIXME: Type '{ defaultValue: string; onChange: any; optio... Remove this comment to see the full error message
        defaultValue={options[0].value}
        // @ts-expect-error ts-migrate(2708) FIXME: Cannot use namespace 'jest' as a value.
        onChange={jest.fn()}
        options={options}
      />
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper).toMatchSnapshot();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('render initial state with data-test-id', () => {
    const options = [
      { value: 'value1', display: 'Value 1' },
      { value: 'value2', display: 'Value 2' },
    ];
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <SelectBox
        data-test-id="test-select"
        // @ts-expect-error ts-migrate(2322) FIXME: Type '{ "data-test-id": string; defaultValue: stri... Remove this comment to see the full error message
        defaultValue={options[0].value}
        // @ts-expect-error ts-migrate(2708) FIXME: Cannot use namespace 'jest' as a value.
        onChange={jest.fn()}
        options={options}
      />
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper).toMatchSnapshot();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('calls onChange when select change', () => {
    const options = [
      { value: 'value1', display: 'Value 1' },
      { value: 'value1', display: 'Value 1' },
    ];
    // @ts-expect-error ts-migrate(2708) FIXME: Cannot use namespace 'jest' as a value.
    const onChange = jest.fn();
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <SelectBox
        // @ts-expect-error ts-migrate(2322) FIXME: Type '{ defaultValue: string; onChange: any; optio... Remove this comment to see the full error message
        defaultValue={options[0].value}
        onChange={onChange}
        options={options}
      />
    );
    const onSelectChange = wrapper.find(Select).prop('onChange');
    onSelectChange(options[1].value);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(onChange).toBeCalledWith(options[1].value);
  });
});
