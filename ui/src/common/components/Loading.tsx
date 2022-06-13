import React, { Component } from 'react';
import { Row, Col, Spin } from 'antd';

class Loading extends Component {
  render() {
    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Row className="w-100" type="flex" justify="center" align="middle">
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Col>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <div data-test-id="loading" className="tc pa4">
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Spin tip="Loading ..." />
          </div>
        </Col>
      </Row>
    );
  }
}

export default Loading;
