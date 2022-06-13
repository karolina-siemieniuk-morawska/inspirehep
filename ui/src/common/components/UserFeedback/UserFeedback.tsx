import React, { Component } from 'react';
import { MessageOutlined } from '@ant-design/icons';
import { Modal, Button, Rate, Input, Alert } from 'antd';

import './UserFeedback.scss';
import { trackEvent, checkIsTrackerBlocked } from '../../../tracker';
// @ts-expect-error ts-migrate(2691) FIXME: An import path cannot end with a '.tsx' extension.... Remove this comment to see the full error message
import ExternalLink from '../ExternalLink.tsx';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../ResponsiveView' was resolved to '/Users... Remove this comment to see the full error message
import ResponsiveView from '../ResponsiveView';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../ModalSuccessResult' was resolved to '/U... Remove this comment to see the full error message
import ModalSuccessResult from '../ModalSuccessResult';
import { SURVEY_LINK, FEEDBACK_EMAIL } from '../../constants';

const RATE_DESCRIPTIONS = [
  'poor',
  'below average',
  'average',
  'good',
  'excellent',
];

class UserFeedback extends Component {
  static renderThankYou() {
    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <ModalSuccessResult>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div>Thank you for your response.</div>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div>
          For further feedback, please{' '}
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <ExternalLink href={SURVEY_LINK}>take our survey</ExternalLink>.
        </div>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div>It takes around 5 minutes to complete.</div>
      </ModalSuccessResult>
    );
  }

  constructor(props: any) {
    super(props);

    this.onFeedbackClick = this.onFeedbackClick.bind(this);
    this.onModalCancel = this.onModalCancel.bind(this);
    this.onFeedbackSubmit = this.onFeedbackSubmit.bind(this);
    this.onCommentChange = this.onCommentChange.bind(this);
    this.onRateChange = this.onRateChange.bind(this);
    this.afterModalClose = this.afterModalClose.bind(this);

    this.state = {
      isModalVisible: false,
      isFeedbackButtonVisible: true,
      feedbackSubmitted: false,
      rateValue: 0,
    };
  }

  onFeedbackClick() {
    this.setState({
      isModalVisible: true,
      isFeedbackButtonVisible: false,
    });
  }

  onModalCancel() {
    this.setState({
      isModalVisible: false,
      isFeedbackButtonVisible: true,
    });
  }

  onFeedbackSubmit() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'rateValue' does not exist on type 'Reado... Remove this comment to see the full error message
    const { rateValue, commentValue } = this.state;
    trackEvent('Feedback', 'Main', commentValue, rateValue);
    this.setState({
      rateValue: 0,
      commentValue: null,
      feedbackSubmitted: true,
    });
  }

  onCommentChange(event: any) {
    const { value } = event.target;
    this.setState({ commentValue: value });
  }

  onRateChange(rateValue: any) {
    this.setState({ rateValue });
  }

  afterModalClose() {
    this.setState({
      feedbackSubmitted: false,
    });
  }

  renderFeedbackForm() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'rateValue' does not exist on type 'Reado... Remove this comment to see the full error message
    const { rateValue, commentValue } = this.state;
    const isTrackerBlocked = checkIsTrackerBlocked();
    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <>
        {isTrackerBlocked && (
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <div className="mb4">
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Alert
              type="warning"
              showIcon
              message="AdBlock detected"
              description={
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <>
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <p>
                    To send us your feedback, please disable your adblocker or
                    DoNotTrack and refresh the page.
                  </p>
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <p>
                    Alternatively, you could send us your feedback using the{' '}
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <ExternalLink href={SURVEY_LINK}>
                      feedback form
                    </ExternalLink>{' '}
                    or by email at{' '}
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <ExternalLink href={`mailto:${FEEDBACK_EMAIL}`}>
                      {FEEDBACK_EMAIL}
                    </ExternalLink>
                    .
                  </p>
                </>
              }
            />
          </div>
        )}
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className="mb4">
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <div className="mb1">What is your opinion of the new INSPIRE?</div>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <div>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Rate
              disabled={isTrackerBlocked}
              value={rateValue}
              onChange={this.onRateChange}
            />
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <span className="ant-rate-text">
              {RATE_DESCRIPTIONS[rateValue - 1]}
            </span>
          </div>
        </div>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <div className="mb1">Would you like to add a comment?</div>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <div>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Input.TextArea
              disabled={isTrackerBlocked}
              placeholder="Please give your feedback here"
              rows={5}
              value={commentValue}
              onChange={this.onCommentChange}
            />
          </div>
        </div>
      </>
    );
  }

  render() {
    const {
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'isModalVisible' does not exist on type '... Remove this comment to see the full error message
      isModalVisible,
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'isFeedbackButtonVisible' does not exist ... Remove this comment to see the full error message
      isFeedbackButtonVisible,
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'feedbackSubmitted' does not exist on typ... Remove this comment to see the full error message
      feedbackSubmitted,
    } = this.state;
    const isTrackerBlocked = checkIsTrackerBlocked();
    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div className="__UserFeedback__">
        {isFeedbackButtonVisible && (
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Button
            data-test-id="sticky"
            className="feedback-button"
            type="primary"
            size="large"
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            icon={<MessageOutlined />}
            onClick={this.onFeedbackClick}
          >
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <ResponsiveView min="sm" render={() => <span>Feedback</span>} />
          </Button>
        )}
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Modal
          title="Your Feedback"
          visible={isModalVisible}
          onOk={this.onFeedbackSubmit}
          okText="Submit"
          okButtonProps={{ disabled: isTrackerBlocked }}
          onCancel={this.onModalCancel}
          footer={feedbackSubmitted ? null : undefined} // undefined enables default footer with OK btn
          afterClose={this.afterModalClose}
        >
          {feedbackSubmitted
            ? UserFeedback.renderThankYou()
            : this.renderFeedbackForm()}
        </Modal>
      </div>
    );
  }
}

export default UserFeedback;
