import React from 'react';
import { fromJS } from 'immutable';
import { shallow } from 'enzyme';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../ExpandableInlineList' was resolved to '... Remove this comment to see the full error message
import ExpandableInlineList from '../ExpandableInlineList';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../ExpandListToggle' was resolved to '/... Remove this comment to see the full error message
import ExpandListToggle from '../../ExpandListToggle';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('ExpandableInlineList', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('renders only 10 by default with expand toggle', () => {
    const items = fromJS([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <ExpandableInlineList items={items} renderItem={(item: any) => item} />
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper).toMatchSnapshot();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('renders only limited amount with expand toggle', () => {
    const items = fromJS([1, 2, 3, 4, 5]);
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <ExpandableInlineList limit={3} items={items} renderItem={(item: any) => item} />
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper).toMatchSnapshot();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('renders all on expand toggle', () => {
    const items = fromJS([1, 2, 3, 4, 5]);
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <ExpandableInlineList limit={3} items={items} renderItem={(item: any) => item} />
    );
    const onExpandToggle = wrapper.find(ExpandListToggle).prop('onToggle');
    // @ts-expect-error ts-migrate(2571) FIXME: Object is of type 'unknown'.
    onExpandToggle();
    wrapper.update();
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper).toMatchSnapshot();
  });
});
