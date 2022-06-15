import React from 'react';
import { shallow } from 'enzyme';
import { fromJS, Range } from 'immutable';
import { List } from 'antd';

import ClientPaginatedList from '../ClientPaginatedList';
import ListWithPagination from '../ListWithPagination';


describe('ClientPaginatedList', () => {
  
  it('renders first page', () => {
    const items = Range(1, 100).toList();
    const wrapper = shallow(
      <ClientPaginatedList
        // @ts-expect-error ts-migrate(2322) FIXME: Type '{ items: List<number>; renderItem: (item: an... Remove this comment to see the full error message
        items={items}
        renderItem={(item: any) => <List.Item key={item}>{item}</List.Item>}
      />
    );
    
    expect(wrapper).toMatchSnapshot();
  });

  
  it('renders first page with custom pageSize', () => {
    const items = Range(1, 100).toList();
    const wrapper = shallow(
      <ClientPaginatedList
        // @ts-expect-error ts-migrate(2322) FIXME: Type '{ items: List<number>; pageSize: number; ren... Remove this comment to see the full error message
        items={items}
        pageSize={10}
        renderItem={(item: any) => <List.Item key={item}>{item}</List.Item>}
      />
    );
    
    expect(wrapper).toMatchSnapshot();
  });

  
  it('renders as loading if set', () => {
    const items = Range(1, 100).toList();
    const wrapper = shallow(
      <ClientPaginatedList
        // @ts-expect-error ts-migrate(2322) FIXME: Type '{ loading: true; items: List<number>; render... Remove this comment to see the full error message
        loading
        items={items}
        renderItem={(item: any) => <List.Item key={item}>{item}</List.Item>}
        pageSize={10}
      />
    );
    
    expect(wrapper).toMatchSnapshot();
  });

  
  it('renders in grid mode', () => {
    const items = Range(1, 100).toList();
    const wrapper = shallow(
      <ClientPaginatedList
        // @ts-expect-error ts-migrate(2322) FIXME: Type '{ loading: true; items: List<number>; render... Remove this comment to see the full error message
        loading
        items={items}
        renderItem={(item: any) => <List.Item key={item}>{item}</List.Item>}
        pageSize={10}
        grid
      />
    );
    
    expect(wrapper).toMatchSnapshot();
  });

  
  it('renders the new page on page change', () => {
    const items = Range(1, 100).toList();
    const page = 2;
    const wrapper = shallow(
      <ClientPaginatedList
        // @ts-expect-error ts-migrate(2322) FIXME: Type '{ items: List<number>; renderItem: (item: an... Remove this comment to see the full error message
        items={items}
        renderItem={(item: any) => <List.Item key={item}>{item}</List.Item>}
        pageSize={10}
      />
    );
    const onPageChange = wrapper.find(ListWithPagination).prop('onPageChange');
    // @ts-expect-error ts-migrate(2571) FIXME: Object is of type 'unknown'.
    onPageChange(page);
    wrapper.update();
    
    expect(wrapper).toMatchSnapshot();
  });

  
  it('does not render at all if empty', () => {
    const items = fromJS([]);
    const wrapper = shallow(
      <ClientPaginatedList
        // @ts-expect-error ts-migrate(2322) FIXME: Type '{ items: any; renderItem: (item: any) => Ele... Remove this comment to see the full error message
        items={items}
        renderItem={(item: any) => <List.Item key={item}>{item}</List.Item>}
      />
    );
    
    expect(wrapper).toMatchSnapshot();
  });

  
  describe('getPageItems', () => {
    
    it('returns items for a page', () => {
      const items = fromJS([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
      const page = 2;
      const pageSize = 3;
      const expected = fromJS([4, 5, 6]);
      const result = ClientPaginatedList.getPageItems(items, page, pageSize);

      expect(result).toEqual(expected);
    });

    
    it('returns items for the first page', () => {
      const items = fromJS([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
      const page = 1;
      const pageSize = 3;
      const expected = fromJS([1, 2, 3]);
      const result = ClientPaginatedList.getPageItems(items, page, pageSize);

      expect(result).toEqual(expected);
    });

    
    it('returns only remaining items for the last page', () => {
      const items = fromJS([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
      const page = 4;
      const pageSize = 3;
      const expected = fromJS([10]);
      const result = ClientPaginatedList.getPageItems(items, page, pageSize);

      expect(result).toEqual(expected);
    });
  });
});
