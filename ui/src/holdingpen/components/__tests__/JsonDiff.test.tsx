import React from 'react';
import { shallow } from 'enzyme';

import JsonDiff from '../JsonDiff';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('JsonDiff', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('renders diff', () => {
    const first = {
      id: 1,
      foo: 'bar',
      another: 'value',
    };
    const second = {
      id: 2,
      foo: 'not bar',
    };
    // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
    const wrapper = shallow(<JsonDiff first={first} second={second} />);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper).toMatchSnapshot();
  });
});
