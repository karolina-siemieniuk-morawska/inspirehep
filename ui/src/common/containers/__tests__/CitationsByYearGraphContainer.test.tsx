import React from 'react';
import { mount } from 'enzyme';
import { fromJS } from 'immutable';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Provider } from 'react-redux';

import { getStoreWithState } from '../../../fixtures/store';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../CitationsByYearGraphContainer' was reso... Remove this comment to see the full error message
import CitationsByYearGraphContainer from '../CitationsByYearGraphContainer';
import CitationsByYearGraph from '../../components/CitationsByYearGraph';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('CitationsByYearGraphContainer', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('pass props from state', () => {
    const store = getStoreWithState({
      citations: fromJS({
        loadingCitationsByYear: false,
        errorCitationsByYear: null,
        byYear: {
          '1999': 134,
          '2002': 125,
        },
      }),
    });

    const wrapper = mount(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Provider store={store}>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CitationsByYearGraphContainer />
      </Provider>
    );

    const dummyWrapper = wrapper.find(CitationsByYearGraph);

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(dummyWrapper).toHaveProp({
      citationsByYear: {
        '1999': 134,
        '2002': 125,
      },
      error: null,
      loading: false,
    });
  });
});
