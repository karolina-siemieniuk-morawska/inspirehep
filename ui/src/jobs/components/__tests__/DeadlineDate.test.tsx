import React from 'react';
import { shallow } from 'enzyme';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../DeadlineDate' was resolved to '/Users/k... Remove this comment to see the full error message
import DeadlineDate from '../DeadlineDate';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('DeadlineDate', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('renders with deadlineDate', () => {
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <DeadlineDate deadlineDate="2003-03-12T00:00:00+00:00" />
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper).toMatchSnapshot();
  });
});
