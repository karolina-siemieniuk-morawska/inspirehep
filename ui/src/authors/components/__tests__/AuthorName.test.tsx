import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';

import AuthorName from '../AuthorName';


describe('AuthorName', () => {
  
  it('renders with preferred_name', () => {
    const name = fromJS({ preferred_name: 'Harun Urhan' });
    // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
    const wrapper = shallow(<AuthorName name={name} />);
    
    expect(wrapper).toMatchSnapshot();
  });

  
  it('renders with native_name', () => {
    const name = fromJS({
      preferred_name: 'Harun Urhan',
      native_names: ['赵新丽'],
    });
    // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
    const wrapper = shallow(<AuthorName name={name} />);
    
    expect(wrapper).toMatchSnapshot();
  });

  
  it('renders with formatted value if preffered_name is not present and value is comma separated', () => {
    const name = fromJS({ value: 'Urhan, Harun' });
    // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
    const wrapper = shallow(<AuthorName name={name} />);
    
    expect(wrapper).toMatchSnapshot();
  });

  
  it('renders with value if preffered_name is not present and value is not comma separated', () => {
    const name = fromJS({ value: 'Urhan Harun' });
    // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
    const wrapper = shallow(<AuthorName name={name} />);
    
    expect(wrapper).toMatchSnapshot();
  });
});
