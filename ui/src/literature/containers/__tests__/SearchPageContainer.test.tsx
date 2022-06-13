import React from 'react';
import { mount } from 'enzyme';
import { fromJS } from 'immutable';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Provider } from 'react-redux';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { MemoryRouter } from 'react-router-dom';

import { getStoreWithState } from '../../../fixtures/store';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../SearchPageContainer' was resolved to '/... Remove this comment to see the full error message
import SearchPageContainer, { SearchPage } from '../SearchPageContainer';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../ToolActionContainer' was resolved to '/... Remove this comment to see the full error message
import ToolActionContainer from '../ToolActionContainer';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('SearchPageContainer Container', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('set assignView true if cataloger is logged in and flag is enabled', () => {
    // TODO: Remove line when the flag is not needed anymore
    const store = getStoreWithState({
      user: fromJS({
        loggedIn: true,
        data: {
          roles: ['cataloger'],
        },
      }),
    });
    const wrapper = mount(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Provider store={store}>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <MemoryRouter initialEntries={['/literature']} initialIndex={0}>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <SearchPageContainer />
        </MemoryRouter>
      </Provider>
    );

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.find(SearchPage)).toHaveProp({
      assignView: true,
    });

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.find(ToolActionContainer)).toExist();
  });
});
