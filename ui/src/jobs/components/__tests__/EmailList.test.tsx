import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../EmailList' was resolved to '/Users/karo... Remove this comment to see the full error message
import EmailList from '../EmailList';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('EmailList', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('renders with emails', () => {
    const emails = fromJS(['johndoe@yahoo.com', 'johndoe2@yahoo.com']);
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const wrapper = shallow(<EmailList emails={emails} />);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.dive()).toMatchSnapshot();
  });
});
