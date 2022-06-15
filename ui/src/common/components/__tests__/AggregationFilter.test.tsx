import React from 'react';
import { fromJS } from 'immutable';
import { shallow } from 'enzyme';

import AggregationFilter from '../AggregationFilter';
import RangeAggregation from '../RangeAggregation';


describe('AggregationFilter', () => {
  
  it('renders RangeAggregation if aggregation type is range', () => {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'maximumMax' does not exist on type '{ se... Remove this comment to see the full error message
    const realMaximumMaxDefaultValue = RangeAggregation.defaultProps.maximumMax;
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'maximumMax' does not exist on type '{ se... Remove this comment to see the full error message
    RangeAggregation.defaultProps.maximumMax = 2018;

    const buckets = fromJS([
      {
        key: '2011',
        doc_count: 1,
      },
      {
        key: '2012',
        doc_count: 2,
      },
    ]);
    const initialBuckets = fromJS([
      {
        key: '2011',
        doc_count: 111,
      },
      {
        key: '2012',
        doc_count: 12,
      },
    ]);

    const wrapper = shallow(
      <AggregationFilter
        // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
        onChange={jest.fn()}
        buckets={buckets}
        initialBuckets={initialBuckets}
        name="Test"
        selections="2011--2012"
        aggregationType="range"
      />
    );
    
    expect(wrapper).toMatchSnapshot();
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'maximumMax' does not exist on type '{ se... Remove this comment to see the full error message
    RangeAggregation.defaultProps.maximumMax = realMaximumMaxDefaultValue;
  });

  
  it('renders CheckboxAggregation if aggregation type is checkbox', () => {
    const buckets = fromJS([
      {
        key: 'bucket1',
        doc_count: 1,
      },
      {
        key: 'bucket2',
        doc_count: 2,
      },
    ]);
    const wrapper = shallow(
      <AggregationFilter
        // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
        onChange={jest.fn()}
        buckets={buckets}
        name="Test"
        selections={['bucket1']}
        aggregationType="checkbox"
      />
    );
    
    expect(wrapper).toMatchSnapshot();
  });

  
  it('renders MultiSelectAggregation if aggregation type is multiselect', () => {
    const buckets = fromJS([
      {
        key: 'bucket1',
        doc_count: 1,
      },
      {
        key: 'bucket2',
        doc_count: 2,
      },
    ]);
    const wrapper = shallow(
      <AggregationFilter
        // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
        onChange={jest.fn()}
        buckets={buckets}
        selections={['bucket1']}
        aggregationType="multiselect"
        name="Test"
      />
    );
    
    expect(wrapper).toMatchSnapshot();
  });

  
  it('renders TreeAggregation if aggregation type is tree', () => {
    const buckets = fromJS([
      {
        key: 'bucket1',
        doc_count: 1,
      },
      {
        key: 'bucket1|bucket2',
        doc_count: 2,
      },
    ]);
    const wrapper = shallow(
      <AggregationFilter
        // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
        onChange={jest.fn()}
        buckets={buckets}
        selections={['bucket1']}
        aggregationType="tree"
        name="Test"
      />
    );
    
    expect(wrapper).toMatchSnapshot();
  });
});
