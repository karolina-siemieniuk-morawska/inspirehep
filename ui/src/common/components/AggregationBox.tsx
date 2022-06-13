import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'clas... Remove this comment to see the full error message
import classNames from 'classnames';

class AggregationBox extends Component {
  render() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'name' does not exist on type 'Readonly<{... Remove this comment to see the full error message
    const { name, headerAction, children, className } = this.props;
    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div className={classNames('w-100 br1', className)}>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Row type="flex" justify="space-between">
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Col flex="auto">
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <h3 className="pb1 fw4">{name}</h3>
          </Col>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Col>{headerAction}</Col>
        </Row>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Row className="w-100">
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Col flex="auto">{children}</Col>
        </Row>
      </div>
    );
  }
}

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
AggregationBox.propTypes = {
  headerAction: PropTypes.node,
  name: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
};

// @ts-expect-error ts-migrate(2339) FIXME: Property 'defaultProps' does not exist on type 'ty... Remove this comment to see the full error message
AggregationBox.defaultProps = {
  headerAction: null,
  children: null,
};

export default AggregationBox;
