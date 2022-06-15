import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';
import Abstract from '../Abstract';

<<<<<<< Updated upstream

describe('Abstract', () => {
  
=======
describe('Abstract', () => {
>>>>>>> Stashed changes
  it('renders with abstract', () => {
    const abstract = fromJS({
      source: 'arXiv',
      value: 'Test abstract',
    });
    // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
    const wrapper = shallow(<Abstract abstract={abstract} />);
<<<<<<< Updated upstream
    
    expect(wrapper).toMatchSnapshot();
  });

  
=======
    expect(wrapper).toMatchSnapshot();
  });

>>>>>>> Stashed changes
  it('does not display abstractSource when it is null', () => {
    const abstract = fromJS({
      value: 'Test abstract',
    });
    // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
    const wrapper = shallow(<Abstract abstract={abstract} />);
<<<<<<< Updated upstream
    
    expect(wrapper).toMatchSnapshot();
  });

  
  it('does not render if abstract is null', () => {
    const wrapper = shallow(<Abstract />);
    
=======
    expect(wrapper).toMatchSnapshot();
  });

  it('does not render if abstract is null', () => {
    const wrapper = shallow(<Abstract />);
>>>>>>> Stashed changes
    expect(wrapper).toMatchSnapshot();
  });
});
