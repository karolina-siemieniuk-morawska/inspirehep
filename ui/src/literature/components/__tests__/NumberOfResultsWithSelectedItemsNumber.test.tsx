import React from 'react';
import { shallow } from 'enzyme';

import NumberOfResultsWithSelectedItemsNumber from '../NumberOfResultsWithSelectedItemsNumber';


describe('NumberOfResultsWithSelectedItemsNumber', () => {
  
  it('renders selected when selected is more than 1', () => {
    const wrapper = shallow(
      <NumberOfResultsWithSelectedItemsNumber
        // @ts-expect-error ts-migrate(2322) FIXME: Type '{ numberOfResults: number; numberOfSelected:... Remove this comment to see the full error message
        numberOfResults={27276}
        numberOfSelected={25}
      />
    );
    
    expect(wrapper).toMatchSnapshot();
  });

  
  it('renders selected when selected is 1', () => {
    const wrapper = shallow(
      <NumberOfResultsWithSelectedItemsNumber
        // @ts-expect-error ts-migrate(2322) FIXME: Type '{ numberOfResults: number; numberOfSelected:... Remove this comment to see the full error message
        numberOfResults={27276}
        numberOfSelected={1}
      />
    );
    
    expect(wrapper).toMatchSnapshot();
  });

  
  it('does not render selected when selected is 0', () => {
    const wrapper = shallow(
      <NumberOfResultsWithSelectedItemsNumber
        // @ts-expect-error ts-migrate(2322) FIXME: Type '{ numberOfResults: number; numberOfSelected:... Remove this comment to see the full error message
        numberOfResults={27276}
        numberOfSelected={0}
      />
    );
    
    expect(wrapper).toMatchSnapshot();
  });
});
