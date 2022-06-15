import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';

import PublicNotesList from '../PublicNotesList';


describe('PublicNotesList', () => {
  
  it('renders public notes', () => {
    const publicNotes = fromJS([
      {
        source: 'arXiv',
        value: 'note1',
      },
      {
        value: 'note2',
      },
      {
        value: 'note3 here https://pos.sissa.it/390/977/pdf',
      },
    ]);
    // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
    const wrapper = shallow(<PublicNotesList publicNotes={publicNotes} />);
    
    expect(wrapper.dive()).toMatchSnapshot();
  });
});
