import React from 'react';
import { mount } from 'enzyme';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';

import { getStoreWithState, getStore } from '../../../fixtures/store';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../SearchScopeSelectContainer' was resolve... Remove this comment to see the full error message
import SearchScopeSelectContainer from '../SearchScopeSelectContainer';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../components/SearchScopeSelect' was re... Remove this comment to see the full error message
import SearchScopeSelect from '../../components/SearchScopeSelect';
import { CHANGE_SEARCH_BOX_NAMESPACE } from '../../../actions/actionTypes';
import { AUTHORS_NS } from '../../../search/constants';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('SearchScopeSelectContainer', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('passes url query q param to SearchBox', () => {
    const searchBoxNamespace = AUTHORS_NS;
    const store = getStoreWithState({
      search: fromJS({
        searchBoxNamespace,
      }),
    });
    const wrapper = mount(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Provider store={store}>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <SearchScopeSelectContainer />
      </Provider>
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.find(SearchScopeSelect)).toHaveProp({
      searchScopeName: searchBoxNamespace,
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('dispatches CHANGE_SEARCH_BOX_NAMESPACE on change', async () => {
    const searchBoxNamespace = AUTHORS_NS;
    const store = getStore();
    const wrapper = mount(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Provider store={store}>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <SearchScopeSelectContainer />
      </Provider>
    );
    const onSearchScopeChange = wrapper
      .find(SearchScopeSelect)
      .prop('onSearchScopeChange');
    // @ts-expect-error ts-migrate(2571) FIXME: Object is of type 'unknown'.
    onSearchScopeChange(searchBoxNamespace);
    const expectedActions = [
      {
        type: CHANGE_SEARCH_BOX_NAMESPACE,
        payload: { searchBoxNamespace },
      },
    ];
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(store.getActions()).toEqual(expectedActions);
  });
});
