import React from 'react';
import { mount } from 'enzyme';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Provider } from 'react-redux';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { MemoryRouter } from 'react-router-dom';

import { getStoreWithState } from '../../../../fixtures/store';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../HeaderContainer' was resolved to '/User... Remove this comment to see the full error message
import HeaderContainer from '../HeaderContainer';
import { SUBMISSIONS, HOME } from '../../../routes';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../Header' was resolved to '/Users/karolin... Remove this comment to see the full error message
import Header from '../Header';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('HeaderContainer', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('passes props from state when submissions page', () => {
    const store = getStoreWithState({
      router: {
        location: {
          pathname: `${SUBMISSIONS}/page`,
        },
      },
    });
    const wrapper = mount(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Provider store={store}>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <MemoryRouter>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <HeaderContainer />
        </MemoryRouter>
      </Provider>
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.find(Header)).toHaveProp({
      isHomePage: false,
      isSubmissionsPage: true,
      isBetaPage: false,
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('passes props from state when home page', () => {
    const store = getStoreWithState({
      router: {
        location: {
          pathname: `${HOME}`,
        },
      },
    });
    const wrapper = mount(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Provider store={store}>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <MemoryRouter>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <HeaderContainer />
        </MemoryRouter>
      </Provider>
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.find(Header)).toHaveProp({
      isHomePage: true,
      isSubmissionsPage: false,
      isBetaPage: false,
    });
  });
});
