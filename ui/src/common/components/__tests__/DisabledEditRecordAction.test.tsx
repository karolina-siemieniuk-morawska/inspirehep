import React from 'react';
import { shallow } from 'enzyme';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../DisabledEditRecordAction' was resolved ... Remove this comment to see the full error message
import DisabledEditRecordAction from '../DisabledEditRecordAction';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('DisabledEditRecordAction', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('renders with message', () => {
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <DisabledEditRecordAction message="Can not be edited" />
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper).toMatchSnapshot();
  });
});
