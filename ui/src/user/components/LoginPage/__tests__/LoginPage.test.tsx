import React from 'react';
import { shallow } from 'enzyme';
import { Button } from 'antd';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../LoginPage' was resolved to '/Users/karo... Remove this comment to see the full error message
import LoginPage from '../LoginPage';

// @ts-expect-error ts-migrate(2708) FIXME: Cannot use namespace 'jest' as a value.
jest.mock('../../../../actions/user');

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('LoginPage', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('renders page', () => {
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <LoginPage onLoginClick={jest.fn()} previousUrl="/" />
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper).toMatchSnapshot();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('passes previousUrl as next query parameter', () => {
    const previousUrl = '/jobs?q=CERN';
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const wrapper = shallow(<LoginPage previousUrl={previousUrl} />);
    const href = wrapper.find(Button).prop('href');
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(href).toContain(previousUrl);
  });
});
