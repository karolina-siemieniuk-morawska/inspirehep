import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../Advisors' was resolved to '/Users/karol... Remove this comment to see the full error message
import Advisors from '../Advisors';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('Advisors', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('renders advisors', () => {
    const advisors = fromJS([
      {
        name: 'Degreeless Advisor',
      },
      {
        name: 'Other Advisor',
        degree_type: 'other',
      },
      {
        name: 'Master Advisor',
        degree_type: 'master',
      },
      {
        name: 'PhD Advisor',
        degree_type: 'phd',
      },
      {
        name: 'Another PhD Advisor',
        degree_type: 'phd',
      },
    ]);
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const wrapper = shallow(<Advisors advisors={advisors} />);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper).toMatchSnapshot();
  });
});
