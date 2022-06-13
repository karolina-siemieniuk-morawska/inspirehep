import React from 'react';
import { mount } from 'enzyme';
import { fromJS } from 'immutable';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Provider } from 'react-redux';

import { getStore, mockActionCreator } from '../../../fixtures/store';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../CitationSummaryGraphContainer' was reso... Remove this comment to see the full error message
import CitationSummaryGraphContainer from '../CitationSummaryGraphContainer';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../components/CitationSummaryGraph/Cita... Remove this comment to see the full error message
import CitationSummaryGraph from '../../components/CitationSummaryGraph/CitationSummaryGraph';
import {
  CITEABLE_BAR_TYPE,
  PUBLISHED_BAR_TYPE,
  CITATION_COUNT_PARAM,
  CITATION_COUNT_WITHOUT_SELF_CITATIONS_PARAM,
} from '../../constants';
import { AUTHOR_PUBLICATIONS_NS } from '../../../search/constants';
import { searchQueryUpdate } from '../../../actions/search';
import { EXCLUDE_SELF_CITATIONS_PREFERENCE } from '../../../reducers/user';

// @ts-expect-error ts-migrate(2708) FIXME: Cannot use namespace 'jest' as a value.
jest.mock('../../../actions/citations');

// @ts-expect-error ts-migrate(2708) FIXME: Cannot use namespace 'jest' as a value.
jest.mock('../../../actions/search');
mockActionCreator(searchQueryUpdate);

const mockCiteableData = [
  {
    key: '0.0-1.0',
    from: 0,
    to: 1,
    doc_count: 1,
  },
  {
    key: '1.0-50.0',
    from: 1,
    to: 50,
    doc_count: 2,
  },
  {
    key: '50.0-250.0',
    from: 50,
    to: 250,
    doc_count: 3,
  },
  {
    key: '250.0-500.0',
    from: 250,
    to: 500,
    doc_count: 4,
  },
  {
    key: '500.0-*',
    from: 500,
    doc_count: 0,
  },
];
const mockPublishedData = [
  {
    key: '0.0-1.0',
    from: 0,
    to: 1,
    doc_count: 10,
  },
  {
    key: '1.0-50.0',
    from: 1,
    to: 50,
    doc_count: 20,
  },
  {
    key: '50.0-250.0',
    from: 50,
    to: 250,
    doc_count: 30,
  },
  {
    key: '250.0-500.0',
    from: 250,
    to: 500,
    doc_count: 40,
  },
  {
    key: '500.0-*',
    from: 500,
    doc_count: 50,
  },
];
const mockLoading = false;
const mockError = null;
const mockCitationsState = fromJS({
  loadingCitationSummary: mockLoading,
  errorCitationSummary: mockError,
  citationSummary: {
    doc_count: 30,
    'h-index': {
      value: {
        all: 8,
        published: 9,
      },
    },
    citations: {
      buckets: {
        all: {
          doc_count: 29,
          citations_count: {
            value: 2,
          },
          citation_buckets: {
            buckets: mockCiteableData,
          },
          average_citations: {
            value: 4.12345,
          },
        },
        published: {
          doc_count: 0,
          citations_count: {
            value: 20,
          },
          citation_buckets: {
            buckets: mockPublishedData,
          },
          average_citations: {
            value: 9,
          },
        },
      },
    },
  },
});

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('CitationSummaryGraphContainer', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('passes props from state', () => {
    const namespace = AUTHOR_PUBLICATIONS_NS;
    const store = getStore({
      citations: mockCitationsState,
      user: fromJS({
        preferences: {
          [EXCLUDE_SELF_CITATIONS_PREFERENCE]: true,
        },
      }),
    });
    const wrapper = mount(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Provider store={store}>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CitationSummaryGraphContainer namespace={namespace} />
      </Provider>
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.find(CitationSummaryGraph)).toHaveProp({
      citeableData: mockCiteableData,
      publishedData: mockPublishedData,
      error: mockError,
      loading: mockLoading,
      selectedBar: null,
      excludeSelfCitations: true,
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('dispatches SEARCH_QUERY_UPDATE for author publication namespace with clean query when onSelectBarChange called with null', () => {
    const namespace = AUTHOR_PUBLICATIONS_NS;
    const store = getStore();
    const wrapper = mount(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Provider store={store}>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CitationSummaryGraphContainer namespace={namespace} />
      </Provider>
    );
    const onSelectBarChange = wrapper
      .find(CitationSummaryGraph)
      .prop('onSelectBarChange');
    // @ts-expect-error ts-migrate(2571) FIXME: Object is of type 'unknown'.
    onSelectBarChange(null);

    const query = {
      [CITATION_COUNT_PARAM]: undefined,
      [CITATION_COUNT_WITHOUT_SELF_CITATIONS_PARAM]: undefined,
      citeable: undefined,
      refereed: undefined,
      page: '1',
    };
    const expectedActions = [searchQueryUpdate(namespace, query)];
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(store.getActions()).toEqual(expectedActions);
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('dispatches SEARCH_QUERY_UPDATE for author publication namespace with citeable query when onSelectBarChange called with citeable bar with excluded self citations', () => {
    const namespace = AUTHOR_PUBLICATIONS_NS;
    const excludeSelfCitations = true;
    const store = getStore();
    const wrapper = mount(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Provider store={store}>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CitationSummaryGraphContainer namespace={namespace} />
      </Provider>
    );
    // @ts-expect-error ts-migrate(2571) FIXME: Object is of type 'unknown'.
    wrapper.find(CitationSummaryGraph).prop('onSelectBarChange')(
      {
        xValue: '0--0',
        type: CITEABLE_BAR_TYPE,
      },
      excludeSelfCitations
    );
    const query = {
      [CITATION_COUNT_WITHOUT_SELF_CITATIONS_PARAM]: '0--0',
      citeable: true,
      refereed: undefined,
      page: '1',
    };
    const expectedActions = [searchQueryUpdate(namespace, query)];
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(store.getActions()).toEqual(expectedActions);
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('dispatches SEARCH_QUERY_UPDATE for author publication namespace with published query when onSelectBarChange called with published bar', () => {
    const namespace = AUTHOR_PUBLICATIONS_NS;
    const excludeSelfCitations = false;
    const store = getStore();
    const wrapper = mount(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Provider store={store}>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CitationSummaryGraphContainer namespace={namespace} />
      </Provider>
    );
    // @ts-expect-error ts-migrate(2571) FIXME: Object is of type 'unknown'.
    wrapper.find(CitationSummaryGraph).prop('onSelectBarChange')(
      {
        xValue: '0--0',
        type: PUBLISHED_BAR_TYPE,
      },
      excludeSelfCitations
    );
    const query = {
      [CITATION_COUNT_PARAM]: '0--0',
      citeable: true,
      refereed: true,
      page: '1',
    };
    const expectedActions = [searchQueryUpdate(namespace, query)];
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(store.getActions()).toEqual(expectedActions);
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('sets selectedBar prop from author publications namespace state for a citable bar', () => {
    const namespace = AUTHOR_PUBLICATIONS_NS;
    const store = getStore({
      citations: mockCitationsState,
      search: fromJS({
        namespaces: {
          [namespace]: {
            query: { citeable: true, citation_count: '500--250' },
          },
        },
      }),
    });
    const wrapper = mount(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Provider store={store}>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CitationSummaryGraphContainer namespace={namespace} />
      </Provider>
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.find(CitationSummaryGraph)).toHaveProp({
      selectedBar: {
        type: 'citeable',
        xValue: '500--250',
      },
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('sets selectedBar prop from author publications namespace state for a published bar', () => {
    const namespace = AUTHOR_PUBLICATIONS_NS;
    const store = getStore({
      citations: mockCitationsState,
      search: fromJS({
        namespaces: {
          [namespace]: {
            query: { citeable: true, citation_count: '0--0', refereed: 'true' },
          },
        },
      }),
    });
    const wrapper = mount(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Provider store={store}>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CitationSummaryGraphContainer namespace={namespace} />
      </Provider>
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.find(CitationSummaryGraph)).toHaveProp({
      selectedBar: {
        type: 'published',
        xValue: '0--0',
      },
    });
  });
});
