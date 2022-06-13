import React from 'react';
import { mount } from 'enzyme';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Provider } from 'react-redux';

import { getStore, mockActionCreator } from '../../../fixtures/store';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../EmbeddedSearchBoxContainer' was resolve... Remove this comment to see the full error message
import EmbeddedSearchBoxContainer from '../EmbeddedSearchBoxContainer';
import { ASSIGN_AUTHOR_NS } from '../../../search/constants';

import { searchQueryUpdate } from '../../../actions/search';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../components/EmbeddedSearchBox' was re... Remove this comment to see the full error message
import EmbeddedSearchBox from '../../components/EmbeddedSearchBox';

// @ts-expect-error ts-migrate(2708) FIXME: Cannot use namespace 'jest' as a value.
jest.mock('../../../actions/search');
mockActionCreator(searchQueryUpdate);

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('EmbeddedSearchBoxContainer', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('dispatches SEARCH_QUERY_UPDATE on search', () => {
    const store = getStore();
    const namespace = ASSIGN_AUTHOR_NS;
    const wrapper = mount(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Provider store={store}>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <EmbeddedSearchBoxContainer namespace={ASSIGN_AUTHOR_NS} />
      </Provider>
    );
    const onSearch = wrapper.find(EmbeddedSearchBox).prop('onSearch');
    const q = 'test';
    onSearch(q);
    const expectedActions = [searchQueryUpdate(namespace, { q })];
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(store.getActions()).toEqual(expectedActions);
  });
});
