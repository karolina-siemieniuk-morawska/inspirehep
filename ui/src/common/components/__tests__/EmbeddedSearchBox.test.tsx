import React from 'react';
import { shallow } from 'enzyme';
import { Input } from 'antd';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../EmbeddedSearchBox' was resolved to '/Us... Remove this comment to see the full error message
import EmbeddedSearchBox from '../EmbeddedSearchBox';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('ErrorAlert', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('renders with all props', () => {
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <EmbeddedSearchBox onSearch={jest.fn()} placeholder="Type to search" />
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper).toMatchSnapshot();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('renders with default message', () => {
    // @ts-expect-error ts-migrate(2708) FIXME: Cannot use namespace 'jest' as a value.
    const onSearch = jest.fn();
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const wrapper = shallow(<EmbeddedSearchBox onSearch={onSearch} />);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper).toMatchSnapshot();
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.find(Input.Search).prop('onSearch')).toBe(onSearch);
  });
});
