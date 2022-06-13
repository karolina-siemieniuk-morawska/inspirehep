import React from 'react';
import { mount } from 'enzyme';
import { goBack } from 'connected-react-router';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Provider } from 'react-redux';

import { getStore } from '../../../fixtures/store';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../GoBackLinkContainer' was resolved to '/... Remove this comment to see the full error message
import GoBackLinkContainer from '../GoBackLinkContainer';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../components/GoBackLink' was resolved ... Remove this comment to see the full error message
import GoBackLink from '../../components/GoBackLink';

// @ts-expect-error ts-migrate(2708) FIXME: Cannot use namespace 'jest' as a value.
jest.mock('connected-react-router');

// @ts-expect-error ts-migrate(2339) FIXME: Property 'mockReturnValue' does not exist on type ... Remove this comment to see the full error message
goBack.mockReturnValue(async () => {});

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('GoBackLinkContainer', () => {
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'afterEach'.
  afterEach(() => {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'mockClear' does not exist on type '() =>... Remove this comment to see the full error message
    goBack.mockClear();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('render with custom children', () => {
    const wrapper = mount(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Provider store={getStore()}>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <GoBackLinkContainer>custom</GoBackLinkContainer>
      </Provider>
    );

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.find(GoBackLink)).toHaveProp({
      children: 'custom',
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('calls goBack() on click', () => {
    const wrapper = mount(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Provider store={getStore()}>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <GoBackLinkContainer />
      </Provider>
    );
    const onClick = wrapper.find(GoBackLink).prop('onClick');
    // @ts-expect-error ts-migrate(2571) FIXME: Object is of type 'unknown'.
    onClick();
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(goBack).toHaveBeenCalled();
  });
});
