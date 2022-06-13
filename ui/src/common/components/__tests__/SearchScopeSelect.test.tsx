import React from 'react';
import { shallow } from 'enzyme';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../SearchScopeSelect' was resolved to '/Us... Remove this comment to see the full error message
import SearchScopeSelect from '../SearchScopeSelect';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../SelectBox' was resolved to '/Users/karo... Remove this comment to see the full error message
import SelectBox from '../SelectBox';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('SearchScopeSelect', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('render initial state with all props set', () => {
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <SearchScopeSelect
        // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
        onSearchScopeChange={jest.fn()}
        searchScopeName="authors"
      />
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper).toMatchSnapshot();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('calls onSearchScopeChange on select change', () => {
    // @ts-expect-error ts-migrate(2708) FIXME: Cannot use namespace 'jest' as a value.
    const onSearchScopeChange = jest.fn();
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <SearchScopeSelect
        // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
        searchScopeName="literature"
        onSearchScopeChange={onSearchScopeChange}
      />
    );
    const onSelectChange = wrapper.find(SelectBox).prop('onChange');
    const newScope = 'authors';
    onSelectChange(newScope);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(onSearchScopeChange).toBeCalledWith(newScope);
  });
});
