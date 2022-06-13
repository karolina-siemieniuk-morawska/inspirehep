import React from 'react';
import { mount } from 'enzyme';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Provider } from 'react-redux';

import { getStoreWithState } from '../../../fixtures/store';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../LoginPageContainer' was resolved to '/U... Remove this comment to see the full error message
import LoginPageContainer from '../LoginPageContainer';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../components/LoginPage' was resolved t... Remove this comment to see the full error message
import LoginPage from '../../components/LoginPage';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('LoginPageContainer', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('passes props from state', () => {
    const store = getStoreWithState({
      router: {
        location: {
          previousUrl: '/jobs?q=cern',
        },
      },
    });

    const wrapper = mount(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Provider store={store}>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <LoginPageContainer />
      </Provider>
    );

    const dummyWrapper = wrapper.find(LoginPageContainer);

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(dummyWrapper.find(LoginPage)).toHaveProp({
      previousUrl: '/jobs?q=cern',
    });
  });
});
