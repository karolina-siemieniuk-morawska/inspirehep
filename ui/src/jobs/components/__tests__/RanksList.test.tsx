import React from 'react';
import { shallow } from 'enzyme';
import { List } from 'immutable';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../RanksList' was resolved to '/Users/karo... Remove this comment to see the full error message
import RanksList from '../RanksList';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('RanksList', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('renders ranks', () => {
    const ranks = List(['POSTDOC', 'PHD']);
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const wrapper = shallow(<RanksList ranks={ranks} />);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.dive()).toMatchSnapshot();
  });
});
