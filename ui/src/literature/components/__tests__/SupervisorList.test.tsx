import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../SupervisorList' was resolved to '/Users... Remove this comment to see the full error message
import SupervisorList from '../SupervisorList';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('SupervisorList', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('renders with multiple supervisors', () => {
    const supervisors = fromJS([
      {
        uuid: '123',
        full_name: 'John Doe',
      },
      {
        uuid: '456',
        full_name: 'Jane Doe',
      },
    ]);
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const wrapper = shallow(<SupervisorList supervisors={supervisors} />);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.dive()).toMatchSnapshot();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('renders with one supervisor', () => {
    const supervisors = fromJS([
      {
        uuid: '123',
        full_name: 'John Doe',
      },
    ]);
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const wrapper = shallow(<SupervisorList supervisors={supervisors} />);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.dive()).toMatchSnapshot();
  });
});
