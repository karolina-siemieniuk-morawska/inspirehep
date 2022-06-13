import React from 'react';
import { mount } from 'enzyme';
import { fromJS } from 'immutable';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Provider } from 'react-redux';

import { getStoreWithState } from '../../../fixtures/store';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../../literature/containers/LiteratureS... Remove this comment to see the full error message
import LiteratureSearchContainer from '../../../literature/containers/LiteratureSearchContainer';
import { AUTHOR_CITATIONS_NS } from '../../../search/constants';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../AuthorCitationsContainer' was resolved ... Remove this comment to see the full error message
import AuthorCitationsContainer from '../AuthorCitationsContainer';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('AuthorCitationsContainer', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('passes all props to LiteratureSearchContainer', () => {
    const store = getStoreWithState({
      authors: fromJS({
        data: {
          metadata: {
            bai: 'T.Dude.1',
          },
        },
      }),
    });
    const wrapper = mount(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Provider store={store}>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <AuthorCitationsContainer />
      </Provider>
    );

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.find(LiteratureSearchContainer)).toHaveProp({
      namespace: AUTHOR_CITATIONS_NS,
      baseQuery: {
        q: 'refersto a T.Dude.1',
      },
    });
  });
});
