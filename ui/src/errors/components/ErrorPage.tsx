import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';

class ErrorPage extends Component {
  render() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'detail' does not exist on type 'Readonly... Remove this comment to see the full error message
    const { detail, message, imageSrc } = this.props;
    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Col className="mt3 mb3" span={14} justify="center" align="middle">
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Row>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Col span={24}>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <h3 className="f2 sm-f3">{message}</h3>
          </Col>
        </Row>
        {detail && (
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Row>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Col span={24}>
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <h3 className="f3 normal sm-f4">{detail}</h3>
            </Col>
          </Row>
        )}
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Row>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Col span={24}>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <img src={imageSrc} alt="ERROR" />
          </Col>
        </Row>
      </Col>
    );
  }
}

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
ErrorPage.propTypes = {
  detail: PropTypes.node,
  message: PropTypes.string.isRequired,
  imageSrc: PropTypes.node.isRequired,
};

// @ts-expect-error ts-migrate(2339) FIXME: Property 'defaultProps' does not exist on type 'ty... Remove this comment to see the full error message
ErrorPage.defaultProps = {
  detail: null,
};

export default ErrorPage;
