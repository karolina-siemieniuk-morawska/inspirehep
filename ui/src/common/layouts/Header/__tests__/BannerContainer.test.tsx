import React from 'react';
import { mount } from 'enzyme';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Provider } from 'react-redux';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { MemoryRouter } from 'react-router-dom';
import { fromJS } from 'immutable';

import { getStoreWithState, getStore } from '../../../../fixtures/store';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../BannerContainer' was resolved to '/User... Remove this comment to see the full error message
import BannerContainer from '../BannerContainer';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../Banner' was resolved to '/Users/karolin... Remove this comment to see the full error message
import Banner from '../Banner';
import { UI_CLOSE_BANNER } from '../../../../actions/actionTypes';

const REQUIRED_BANNER_PROPS = {
  id: 'test',
  message: 'Test',
};

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('BannerContainer', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('passes props from state when submissions page', () => {
    const closedBannersById = fromJS({ foo: true });
    const store = getStoreWithState({
      router: {
        location: {
          pathname: `/test`,
        },
      },
      ui: fromJS({
        closedBannersById,
      }),
    });
    const wrapper = mount(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Provider store={store}>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <MemoryRouter>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <BannerContainer {...REQUIRED_BANNER_PROPS} />
        </MemoryRouter>
      </Provider>
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.find(Banner)).toHaveProp({
      currentPathname: '/test',
      closedBannersById,
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('dispatches UI_CLOSE_BANNER with banner id, on banner close', () => {
    const store = getStore();
    const wrapper = mount(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Provider store={store}>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <BannerContainer {...REQUIRED_BANNER_PROPS} />
      </Provider>
    );
    const onBannerClose = wrapper.find(Banner).prop('onClose');
    const { id } = REQUIRED_BANNER_PROPS;
    onBannerClose(id);
    const expectedActions = [
      {
        type: UI_CLOSE_BANNER,
        payload: { id },
      },
    ];
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(store.getActions()).toEqual(expectedActions);
  });
});
