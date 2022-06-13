import React from 'react';
import { mount } from 'enzyme';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';

import { getStoreWithState } from '../../../../fixtures/store';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../HeaderMenuContainer' was resolved to '/... Remove this comment to see the full error message
import HeaderMenuContainer from '../HeaderMenuContainer';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../HeaderMenu' was resolved to '/Users/kar... Remove this comment to see the full error message
import HeaderMenu from '../HeaderMenu';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('HeaderMenuContainer', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('passes props from state', () => {
    const store = getStoreWithState({
      user: fromJS({
        loggedIn: true,
        data: {
          profile_control_number: '1010819',
        }
      }),
    });
    const wrapper = mount(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Provider store={store}>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <HeaderMenuContainer />
      </Provider>
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.find(HeaderMenu)).toHaveProp({
      loggedIn: true,
      profileControlNumber: '1010819',
    });
  });
});
