import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ContentBox from './ContentBox';

class ResultItem extends Component {
  render() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'leftActions' does not exist on type 'Rea... Remove this comment to see the full error message
    const { leftActions, rightActions, children } = this.props;
    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <ContentBox leftActions={leftActions} rightActions={rightActions}>
        {children}
      </ContentBox>
    );
  }
}

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
ResultItem.propTypes = {
  leftActions: PropTypes.node,
  rightActions: PropTypes.node,
  children: PropTypes.node,
};

export default ResultItem;
