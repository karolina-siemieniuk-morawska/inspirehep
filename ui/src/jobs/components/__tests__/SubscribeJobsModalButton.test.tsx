import React from 'react';
import { shallow } from 'enzyme';
import { Modal } from 'antd';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../SubscribeJobsModalButton' was resolved ... Remove this comment to see the full error message
import SubscribeJobsModalButton from '../SubscribeJobsModalButton';
import subscribeJobMailingList from '../../subscribeJobMailingList';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../../common/components/LinkLikeButton'... Remove this comment to see the full error message
import LinkLikeButton from '../../../common/components/LinkLikeButton';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../SubscribeJobsForm' was resolved to '/Us... Remove this comment to see the full error message
import SubscribeJobsForm from '../SubscribeJobsForm';

// @ts-expect-error ts-migrate(2708) FIXME: Cannot use namespace 'jest' as a value.
jest.mock('../../subscribeJobMailingList');

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('SubscribeJobsModalButton', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('renders with initial state', () => {
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const wrapper = shallow(<SubscribeJobsModalButton />);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper).toMatchSnapshot();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('sets modal visible on button click', () => {
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const wrapper = shallow(<SubscribeJobsModalButton />);

    // @ts-expect-error ts-migrate(2571) FIXME: Object is of type 'unknown'.
    wrapper.find(LinkLikeButton).prop('onClick')();
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.find(Modal).prop('visible')).toBe(true);
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('renders with error alert if hasError', () => {
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const wrapper = shallow(<SubscribeJobsModalButton />);

    wrapper.setState({ hasError: true });
    wrapper.update();
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper).toMatchSnapshot();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('renders confirmation if subscription is submitted', () => {
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const wrapper = shallow(<SubscribeJobsModalButton />);

    wrapper.setState({ isSubscriptionSubmitted: true });
    wrapper.update();
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper).toMatchSnapshot();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('sets isSubscriptionSubmitted false after modal is closed', () => {
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const wrapper = shallow(<SubscribeJobsModalButton />);

    wrapper.setState({ isSubscriptionSubmitted: true });

    const afterModalClose = wrapper.find(Modal).prop('afterClose');
    // @ts-expect-error ts-migrate(2722) FIXME: Cannot invoke an object which is possibly 'undefin... Remove this comment to see the full error message
    afterModalClose();

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper).toHaveState({ isSubscriptionSubmitted: false });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('calls subscribeJobMailingList on SubscribeJobsFrom submit', () => {
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const wrapper = shallow(<SubscribeJobsModalButton />);

    const onSubscribeFormSubmit = wrapper
      .find(SubscribeJobsForm)
      .prop('onSubmit');
    const data = {
      email: 'harun@cern.ch',
      first_name: 'Harun',
      last_name: 'Urhan',
    };
    onSubscribeFormSubmit(data);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(subscribeJobMailingList).toHaveBeenCalledWith(data);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.find(Modal).prop('visible')).toBe(false);
  });
});
