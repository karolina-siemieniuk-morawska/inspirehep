import React, { Component } from 'react';
import PropTypes from 'prop-types';
import pluralizeUnlessSingle from '../utils';
// @ts-expect-error ts-migrate(2691) FIXME: An import path cannot end with a '.tsx' extension.... Remove this comment to see the full error message
import FormattedNumber from './FormattedNumber.tsx';

class NumberOfResults extends Component {
  render() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'numberOfResults' does not exist on type ... Remove this comment to see the full error message
    const { numberOfResults } = this.props;
    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <span>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <FormattedNumber>{numberOfResults}</FormattedNumber>{' '}
        {pluralizeUnlessSingle('result', numberOfResults)}
      </span>
    );
  }
}

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
NumberOfResults.propTypes = {
  numberOfResults: PropTypes.number.isRequired,
};

export default NumberOfResults;
