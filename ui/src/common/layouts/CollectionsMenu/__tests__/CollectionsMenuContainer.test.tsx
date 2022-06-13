import React from 'react';
import { mount } from 'enzyme';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Provider } from 'react-redux';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { MemoryRouter } from 'react-router-dom';

import { getStoreWithState } from '../../../../fixtures/store';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../CollectionsMenuContainer' was resolved ... Remove this comment to see the full error message
import CollectionsMenuContainer from '../CollectionsMenuContainer';
import { SUBMISSIONS_AUTHOR } from '../../../routes';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../CollectionsMenu' was resolved to '/User... Remove this comment to see the full error message
import CollectionsMenu from '../CollectionsMenu';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('CollectionsMenuContainer', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('passes props from state', () => {
    const store = getStoreWithState({
      router: {
        location: {
          pathname: SUBMISSIONS_AUTHOR,
        },
      },
    });
    const wrapper = mount(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Provider store={store}>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <MemoryRouter>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <CollectionsMenuContainer onHeightChange={jest.fn()} />
        </MemoryRouter>
      </Provider>
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.find(CollectionsMenu)).toHaveProp({
      currentPathname: SUBMISSIONS_AUTHOR,
    });
  });
});
