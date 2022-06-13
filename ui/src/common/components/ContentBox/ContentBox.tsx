import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Card } from 'antd';

import './ContentBox.scss';

class ContentBox extends Component {
  render() {
    const {
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'title' does not exist on type 'Readonly<... Remove this comment to see the full error message
      title,
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'leftActions' does not exist on type 'Rea... Remove this comment to see the full error message
      leftActions,
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'rightActions' does not exist on type 'Re... Remove this comment to see the full error message
      rightActions,
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'loading' does not exist on type 'Readonl... Remove this comment to see the full error message
      loading,
      children,
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'subTitle' does not exist on type 'Readon... Remove this comment to see the full error message
      subTitle,
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'className' does not exist on type 'Reado... Remove this comment to see the full error message
      className,
    } = this.props;

    return (
      children && (
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className={`__ContentBox__ h-100 ${className}`}>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Card className="h-100" title={title} loading={loading}>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <div className="pa2">
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              {subTitle && <h3 className="pb1">{subTitle}</h3>}
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <div>{children}</div>
            </div>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Row className="actions ph2" type="flex" justify="space-between">
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Col>{leftActions}</Col>
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Col>{rightActions}</Col>
            </Row>
          </Card>
        </div>
      )
    );
  }
}

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
ContentBox.propTypes = {
  leftActions: PropTypes.node,
  rightActions: PropTypes.node,
  children: PropTypes.node,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  loading: PropTypes.bool,
  className: PropTypes.string,
};

// @ts-expect-error ts-migrate(2339) FIXME: Property 'defaultProps' does not exist on type 'ty... Remove this comment to see the full error message
ContentBox.defaultProps = {
  leftActions: null,
  rightActions: null,
  children: null,
  title: null,
  subTitle: null,
  loading: false,
  className: '',
};

export default ContentBox;
