import React from 'react';
import { mount } from 'enzyme';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Provider } from 'react-redux';

import { getStore } from '../../../fixtures/store';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../NumberOfPublishedPapersContainer' was r... Remove this comment to see the full error message
import NumberOfPublishedPapersContainer from '../NumberOfPublishedPapersContainer';
import { SEARCH_QUERY_UPDATE } from '../../../actions/actionTypes';
import { AUTHOR_PUBLICATIONS_NS } from '../../../search/constants';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../../common/components/LinkLikeButton'... Remove this comment to see the full error message
import LinkLikeButton from '../../../common/components/LinkLikeButton';
import { PUBLISHED_QUERY } from '../../../common/constants';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('NumberOfPublishedPapersContainer', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('dispatches SEARCH_QUERY_UPDATE on click', () => {
    const store = getStore();
    const namespace = AUTHOR_PUBLICATIONS_NS;
    const wrapper = mount(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Provider store={store}>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <NumberOfPublishedPapersContainer>30</NumberOfPublishedPapersContainer>
      </Provider>
    );
    wrapper.find(LinkLikeButton).simulate('click');
    const expectedActions = [
      {
        type: SEARCH_QUERY_UPDATE,
        payload: { namespace, query: { page: '1', ...PUBLISHED_QUERY } },
      },
    ];
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(store.getActions()).toEqual(expectedActions);
  });
});
