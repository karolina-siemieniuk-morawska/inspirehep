import React from 'react';
import { shallow } from 'enzyme';
import { advanceTo, clear } from 'jest-date-mock';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../SeminarTimezone' was resolved to '/User... Remove this comment to see the full error message
import SeminarTimezone from '../SeminarTimezone';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('SeminarTimezone', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('renders with timezone', () => {
    advanceTo('2020-09-10');
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const wrapper = shallow(<SeminarTimezone timezone="Europe/Zurich" />);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper).toMatchSnapshot();
    clear();
  });
});
