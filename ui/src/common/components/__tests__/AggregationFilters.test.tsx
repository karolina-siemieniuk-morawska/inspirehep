import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../AggregationFilters' was resolved to '/U... Remove this comment to see the full error message
import AggregationFilters from '../AggregationFilters';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../AggregationFilter' was resolved to '/Us... Remove this comment to see the full error message
import AggregationFilter from '../AggregationFilter';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('AggregationFilters', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('renders with all props set', () => {
    const aggregations = fromJS({
      agg1: {
        buckets: [
          {
            key: 'foo',
            doc_count: 1,
          },
        ],
        meta: {
          title: '[Range] Aggregation 1',
          order: 1,
          type: 'range',
        },
      },
      agg2: {
        buckets: [
          {
            key: 'foo_2',
            doc_count: 1,
          },
        ],
        meta: {
          title: 'Aggregation 2',
          order: 3,
          split: true,
          type: 'checkbox',
        },
      },
      agg3: {
        buckets: [
          {
            key: 'foo_3',
            doc_count: 1,
          },
        ],
        meta: {
          title: 'Aggregation 3',
          order: 2,
          split: true,
          type: 'checkbox',
          bucket_help: {
            published: {
              text:
                'Published papers are believed to have undergone rigorous peer review.',
              link: 'https://inspirehep.net/info/faq/general#published',
            },
          },
        },
      },
    });
    const initialAggregations = fromJS({
      agg1: {
        buckets: [
          {
            key: 'foo',
            doc_count: 1,
          },
        ],
        meta: {
          title: '[Range] Aggregation 1',
          order: 1,
          type: 'range',
        },
      },
    });
    const query = { agg1: 'foo' };
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <AggregationFilters
        // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
        query={query}
        aggregations={aggregations}
        initialAggregations={initialAggregations}
        numberOfResults={2}
        // @ts-expect-error ts-migrate(2708) FIXME: Cannot use namespace 'jest' as a value.
        onAggregationChange={jest.fn()}
      />
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper).toMatchSnapshot();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('renders with all props set [inline]', () => {
    const aggregations = fromJS({
      agg1: {
        buckets: [
          {
            key: 'foo',
            doc_count: 1,
          },
        ],
        meta: {
          title: '[Range] Aggregation 1',
          order: 1,
          type: 'range',
        },
      },
      agg2: {
        buckets: [
          {
            key: 'foo_2',
            doc_count: 1,
          },
        ],
        meta: {
          title: 'Aggregation 2',
          order: 2,
          split: true,
          type: 'checkbox',
        },
      },
    });
    const initialAggregations = fromJS({
      agg1: {
        buckets: [
          {
            key: 'foo',
            doc_count: 1,
          },
        ],
        meta: {
          title: '[Range] Aggregation 1',
          order: 1,
          type: 'range',
        },
      },
    });
    const query = { agg1: 'foo' };
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <AggregationFilters
        // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
        inline
        query={query}
        aggregations={aggregations}
        initialAggregations={initialAggregations}
        numberOfResults={2}
        // @ts-expect-error ts-migrate(2708) FIXME: Cannot use namespace 'jest' as a value.
        onAggregationChange={jest.fn()}
      />
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper).toMatchSnapshot();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('does not render aggregations with empty buckets', () => {
    const aggregations = fromJS({
      agg1: {
        buckets: [{}],
        meta: {
          title: 'Aggregation 1',
          order: 1,
          type: 'checkbox',
        },
      },
      agg2: {
        buckets: [],
        meta: {
          title: 'Aggregation 2',
          order: 2,
          type: 'checkbox',
        },
      },
    });
    const initialAggregations = fromJS({
      agg1: {
        buckets: [
          {
            key: 'foo',
            doc_count: 1,
          },
        ],
        meta: {
          title: '[Range] Aggregation 1',
          order: 1,
          type: 'range',
        },
      },
    });
    const query = {};
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <AggregationFilters
        // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
        query={query}
        aggregations={aggregations}
        initialAggregations={initialAggregations}
        numberOfResults={2}
        // @ts-expect-error ts-migrate(2708) FIXME: Cannot use namespace 'jest' as a value.
        onAggregationChange={jest.fn()}
      />
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper).toMatchSnapshot();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('does not render aggregations when numberOfResults is 0', () => {
    const aggregations = fromJS({
      agg: {
        buckets: [
          {
            key: 'foo',
            doc_count: 0,
          },
        ],
        meta: {
          title: 'Jessica Jones',
          order: 1,
          type: 'checkbox',
        },
      },
      emptyAgg: {
        buckets: [],
        meta: {
          title: 'Luke Cage',
          order: 2,
          type: 'checkbox',
        },
      },
    });
    const initialAggregations = fromJS({
      agg1: {
        buckets: [
          {
            key: 'foo',
            doc_count: 1,
          },
        ],
        meta: {
          title: '[Range] Aggregation 1',
          order: 1,
          type: 'range',
        },
      },
    });
    const query = {};
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <AggregationFilters
        // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
        query={query}
        aggregations={aggregations}
        initialAggregations={initialAggregations}
        numberOfResults={0}
        // @ts-expect-error ts-migrate(2708) FIXME: Cannot use namespace 'jest' as a value.
        onAggregationChange={jest.fn()}
      />
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper).toMatchSnapshot();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('calls onAggregationChange when aggregation is changed', () => {
    const aggregations = fromJS({
      agg: {
        buckets: [
          {
            key: 'foo',
            doc_count: 1,
          },
          {
            key: 'bar',
            doc_count: 2,
          },
          {
            key: 'uncool',
            doc_count: 3,
          },
        ],
        meta: {
          title: 'Aggregation',
          order: 1,
          type: 'checkbox',
        },
      },
    });
    const initialAggregations = fromJS({
      agg1: {
        buckets: [
          {
            key: 'foo',
            doc_count: 1,
          },
        ],
        meta: {
          title: '[Range] Aggregation 1',
          order: 1,
          type: 'range',
        },
      },
    });
    const query = {};
    // @ts-expect-error ts-migrate(2708) FIXME: Cannot use namespace 'jest' as a value.
    const onAggregationChange = jest.fn();
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <AggregationFilters
        // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
        query={query}
        aggregations={aggregations}
        initialAggregations={initialAggregations}
        numberOfResults={2}
        onAggregationChange={onAggregationChange}
      />
    );
    const onAggregationFilterChange = wrapper
      .find(AggregationFilter)
      .prop('onChange');
    // @ts-expect-error ts-migrate(2571) FIXME: Object is of type 'unknown'.
    onAggregationFilterChange(['foo', 'bar']);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(onAggregationChange).toBeCalledWith('agg', ['foo', 'bar']);
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('renders aggregations when numberOfResults is 0 and displayWhenNoResults is true', () => {
    const aggregations = fromJS({
      agg: {
        buckets: [
          {
            key: 'foo',
            doc_count: 0,
          },
        ],
        meta: {
          title: 'Jessica Jones',
          order: 1,
          type: 'checkbox',
        },
      },
    });
    const initialAggregations = fromJS({
      agg1: {
        buckets: [
          {
            key: 'foo',
            doc_count: 1,
          },
        ],
        meta: {
          title: '[Range] Aggregation 1',
          order: 1,
          type: 'range',
        },
      },
    });
    const query = {};
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <AggregationFilters
        // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
        query={query}
        aggregations={aggregations}
        initialAggregations={initialAggregations}
        numberOfResults={0}
        // @ts-expect-error ts-migrate(2708) FIXME: Cannot use namespace 'jest' as a value.
        onAggregationChange={jest.fn()}
        displayWhenNoResults
      />
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper).toMatchSnapshot();
  });
});
