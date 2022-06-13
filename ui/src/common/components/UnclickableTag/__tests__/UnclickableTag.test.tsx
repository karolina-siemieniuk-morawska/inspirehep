import React from 'react';
import { shallow } from 'enzyme';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../UnclickableTag' was resolved to '/Users... Remove this comment to see the full error message
import UnclickableTag from '../UnclickableTag';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('UnclickableTag', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('renders with all props set', () => {
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <UnclickableTag
        // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
        className="this-is-a-test-class"
        color="blue"
        visible
        closable
      >
        This is a tag
      </UnclickableTag>
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper).toMatchSnapshot();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('renders without props', () => {
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const wrapper = shallow(<UnclickableTag>This is a tag</UnclickableTag>);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper).toMatchSnapshot();
  });
});
