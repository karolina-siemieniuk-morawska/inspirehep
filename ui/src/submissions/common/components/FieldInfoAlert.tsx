import React, { Component } from 'react';
import { Alert, Row, Col } from 'antd';
import PropTypes from 'prop-types';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../withFormItem' was resolved to '/Users/k... Remove this comment to see the full error message
import { LABEL_COL, WRAPPER_COL } from '../withFormItem';

class FieldInfoAlert extends Component {
  render() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'description' does not exist on type 'Rea... Remove this comment to see the full error message
    const { description } = this.props;

    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Row className="mb1">
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Col
          {...{
            sm: { span: 24 },
            md: { span: WRAPPER_COL.md.span, offset: LABEL_COL.md.span },
          }}
        >
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Alert type="info" description={description} showIcon />
        </Col>
      </Row>
    );
  }
}

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
FieldInfoAlert.propTypes = {
  description: PropTypes.node.isRequired,
};

export default FieldInfoAlert;
