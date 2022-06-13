import React, { Component } from 'react';
import PropTypes from 'prop-types';

// @ts-expect-error ts-migrate(6142) FIXME: Module './CheckboxAggregation' was resolved to '/U... Remove this comment to see the full error message
import CheckboxAggregation from './CheckboxAggregation';
import RangeAggregation from './RangeAggregation';
import MultiSelectAggregation from './MultiSelectAggregation';
// @ts-expect-error ts-migrate(6142) FIXME: Module './TreeAggregation' was resolved to '/Users... Remove this comment to see the full error message
import TreeAggregation from './TreeAggregation';

class AggregationFilter extends Component {
  render() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'aggregationType' does not exist on type ... Remove this comment to see the full error message
    const { aggregationType, ...aggregationProps } = this.props;
    switch (aggregationType) {
      case 'range':
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        return <RangeAggregation {...aggregationProps} />;
      case 'multiselect':
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        return <MultiSelectAggregation {...aggregationProps} />;
      case 'tree':
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        return <TreeAggregation {...aggregationProps} />;
      case 'checkbox':
      default:
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        return <CheckboxAggregation {...aggregationProps} />;
    }
  }
}

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
AggregationFilter.propTypes = {
  aggregationType: PropTypes.oneOf(['range', 'checkbox', 'multiselect', 'tree'])
    .isRequired,
};

export default AggregationFilter;
