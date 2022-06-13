import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../PositionsTimeline' was resolved to '/Us... Remove this comment to see the full error message
import PositionsTimeline from '../PositionsTimeline';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../../common/components/ExpandListToggl... Remove this comment to see the full error message
import ExpandListToggle from '../../../common/components/ExpandListToggle';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('PositionsTimeline', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('renders with positions', () => {
    const positions = fromJS([
      {
        institution: 'Inst 1',
        display_date: '1990-1994',
        rank: 'UNDERGRADUATE',
      },
      {
        institution: 'Inst 2',
        display_date: '1994-2000',
        rank: 'PHD',
      },
      {
        institution: 'CERN',
        display_date: '2000-present',
        rank: 'STAFF',
        current: true,
      },
    ]);
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const wrapper = shallow(<PositionsTimeline positions={positions} />);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper).toMatchSnapshot();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('renders with single position', () => {
    const positions = fromJS([
      {
        institution: 'Inst 1',
        rank: 'UNDERGRADUATE',
        display_date: 'present',
        current: true,
      },
    ]);
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const wrapper = shallow(<PositionsTimeline positions={positions} />);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper).toMatchSnapshot();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('renders only first 3 by default', () => {
    const positions = fromJS([
      { institution: 'Inst 1' },
      { institution: 'Inst 2' },
      { institution: 'Inst 3' },
      { institution: 'Inst 4' },
      { institution: 'Inst 5' },
      { institution: 'Inst 6' },
    ]);
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const wrapper = shallow(<PositionsTimeline positions={positions} />);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper).toMatchSnapshot();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('renders all when ExpandListToggle is toggled by default', () => {
    const positions = fromJS([
      { institution: 'Inst 1' },
      { institution: 'Inst 2' },
      { institution: 'Inst 3' },
      { institution: 'Inst 4' },
      { institution: 'Inst 5' },
      { institution: 'Inst 6' },
    ]);
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const wrapper = shallow(<PositionsTimeline positions={positions} />);
    const toggleWrapper = wrapper.find(ExpandListToggle);
    const onExpandToggle = toggleWrapper.prop('onToggle');
    // @ts-expect-error ts-migrate(2571) FIXME: Object is of type 'unknown'.
    onExpandToggle();
    wrapper.update();
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper).toMatchSnapshot();
  });
});
