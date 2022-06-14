import React from 'react';
import { shallow } from 'enzyme';

import DOIMaterial from '../DOIMaterial';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('DOIMaterial', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('renders with material', () => {
    // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
    const wrapper = shallow(<DOIMaterial material="myMaterial" />);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper).toMatchSnapshot();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('does not render without material', () => {
    const wrapper = shallow(<DOIMaterial />);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper).toMatchSnapshot();
  });
});
