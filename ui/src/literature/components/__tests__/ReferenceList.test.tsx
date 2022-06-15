import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';

import ReferenceList from '../ReferenceList';
import ListWithPagination from '../../../common/components/ListWithPagination';

<<<<<<< Updated upstream

describe('ReferenceList', () => {
  
=======
describe('ReferenceList', () => {
>>>>>>> Stashed changes
  it('renders with references', () => {
    const references = fromJS([
      {
        titles: [{ title: 'Reference 1' }],
      },
      {
        titles: [{ title: 'Reference 2' }],
      },
    ]);
    const wrapper = shallow(
      <ReferenceList
        loading={false}
        error={null}
        references={references}
        total={1}
<<<<<<< Updated upstream
        
=======
>>>>>>> Stashed changes
        onQueryChange={jest.fn()}
        query={{ size: 25, page: 1 }}
      />
    );
<<<<<<< Updated upstream
    
    expect(wrapper).toMatchSnapshot();
  });

  
=======
    expect(wrapper).toMatchSnapshot();
  });

>>>>>>> Stashed changes
  it('renders items with (page * index) key if title is absent', () => {
    const references = fromJS([
      {
        publication_info: [{ journal_title: 'Journal 1' }],
      },
      {
        authors: [{ full_name: 'Author 2' }],
      },
    ]);
    const wrapper = shallow(
      <ReferenceList
        loading={false}
        error={null}
        references={references}
        total={1}
<<<<<<< Updated upstream
        
=======
>>>>>>> Stashed changes
        onQueryChange={jest.fn()}
        query={{ size: 25, page: 1 }}
      />
    );
<<<<<<< Updated upstream
    
    expect(wrapper).toMatchSnapshot();
  });

  
  it('calls onQueryChange and sets the correct page', () => {
    
=======
    expect(wrapper).toMatchSnapshot();
  });

  it('calls onQueryChange and sets the correct page', () => {
>>>>>>> Stashed changes
    const onQueryChange = jest.fn();
    const wrapper = shallow(
      <ReferenceList
        loading={false}
        error={null}
        references={fromJS([{ titles: [{ title: 'Reference 1' }] }])}
        total={50}
        onQueryChange={onQueryChange}
        query={{ size: 25, page: 1 }}
      />
    );
    const page = 2;
    const onListPageChange = wrapper
      .find(ListWithPagination)
      .prop('onPageChange');
    // @ts-expect-error ts-migrate(2571) FIXME: Object is of type 'unknown'.
    onListPageChange(page);
<<<<<<< Updated upstream
    
=======
>>>>>>> Stashed changes
    expect(onQueryChange).toHaveBeenCalledWith({
      page,
    });
  });

<<<<<<< Updated upstream
  
=======
>>>>>>> Stashed changes
  it('does not render the list if total 0', () => {
    const wrapper = shallow(
      <ReferenceList
        loading={false}
        error={null}
        references={fromJS([{ titles: [{ title: 'Reference 1' }] }])}
        total={0}
<<<<<<< Updated upstream
        
=======
>>>>>>> Stashed changes
        onQueryChange={jest.fn()}
        query={{ size: 25, page: 1 }}
      />
    );
<<<<<<< Updated upstream
    
    expect(wrapper).toMatchSnapshot();
  });

  
=======
    expect(wrapper).toMatchSnapshot();
  });

>>>>>>> Stashed changes
  it('renders with error', () => {
    const wrapper = shallow(
      <ReferenceList
        loading={false}
        error={fromJS({ message: 'error' })}
        references={fromJS([])}
        total={0}
<<<<<<< Updated upstream
        
=======
>>>>>>> Stashed changes
        onQueryChange={jest.fn()}
        query={{ size: 25, page: 1 }}
      />
    );
<<<<<<< Updated upstream
    
=======
>>>>>>> Stashed changes
    expect(wrapper).toMatchSnapshot();
  });
});

<<<<<<< Updated upstream

it('calls onQueryChange and sets display to 50 references/page', () => {
  
=======
it('calls onQueryChange and sets display to 50 references/page', () => {
>>>>>>> Stashed changes
  const onQueryChange = jest.fn();
  const wrapper = shallow(
    <ReferenceList
      loading={false}
      error={null}
      references={fromJS([{ titles: [{ title: 'Reference 1' }] }])}
      total={50}
      onQueryChange={onQueryChange}
      query={{ size: 50 }}
    />
  );
  const page = '1';
  const size = 50;
  const onListPageSizeChange = wrapper
    .find(ListWithPagination)
    .prop('onSizeChange');
  // @ts-expect-error ts-migrate(2571) FIXME: Object is of type 'unknown'.
  onListPageSizeChange(page, size);
<<<<<<< Updated upstream
  
=======
>>>>>>> Stashed changes
  expect(onQueryChange).toHaveBeenCalledWith({
    page,
    size,
  });
});
