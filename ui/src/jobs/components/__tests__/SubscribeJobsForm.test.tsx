import React from 'react';
import { shallow } from 'enzyme';
import { Formik } from 'formik';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../SubscribeJobsForm' was resolved to '/Us... Remove this comment to see the full error message
import SubscribeJobsForm from '../SubscribeJobsForm';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('SubscribeJobsForm', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('renders', () => {
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const wrapper = shallow(<SubscribeJobsForm onSubmit={jest.fn()} />).dive();
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper).toMatchSnapshot();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('calls onSubmit on Formik submit', () => {
    // @ts-expect-error ts-migrate(2708) FIXME: Cannot use namespace 'jest' as a value.
    const onSubmit = jest.fn();
    const data = {
      email: 'harun@cern.ch',
      first_name: 'Harun',
      last_name: 'Urhan',
    };
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const wrapper = shallow(<SubscribeJobsForm onSubmit={onSubmit} />);

    const onFormikSubmit = wrapper.find(Formik).prop('onSubmit');
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    onFormikSubmit(data);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(onSubmit).toHaveBeenCalledWith(data);
  });
});
