import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';

import ExperimentList from '../ExperimentList';


describe('ExperimentList', () => {
  
  it('renders arxiv categories', () => {
    const experiments = fromJS([
      {
        name: 'CERN-LHC-CMS',
        record: { $ref: 'http://labs.inspirehep.net/api/experiments/1110623' },
      },
      { name: 'CERN-LHC-LHCb' },
    ]);
    // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
    const wrapper = shallow(<ExperimentList experiments={experiments} />);
    
    expect(wrapper.dive()).toMatchSnapshot();
  });
});
