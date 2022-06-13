import React from 'react';
import PropTypes from 'prop-types';
// @ts-expect-error ts-migrate(2691) FIXME: An import path cannot end with a '.tsx' extension.... Remove this comment to see the full error message
import FormattedNumber from '../../common/components/FormattedNumber.tsx';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/containers/NumberOfResultsCon... Remove this comment to see the full error message
import NumberOfResultsContainer from '../../common/containers/NumberOfResultsContainer';

function getFormattedNumberOfSelectedOrNull(numberOfSelected: any) {
  if (numberOfSelected === 0) {
    return null;
  }
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <FormattedNumber>{numberOfSelected}</FormattedNumber> of{' '}
    </>
  );
}

function NumberOfResults({
  namespace,
  numberOfSelected
}: any) {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <span>
      {!!numberOfSelected && getFormattedNumberOfSelectedOrNull(numberOfSelected)}
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <NumberOfResultsContainer namespace={namespace} />
    </span>
  );
}

NumberOfResults.propTypes = {
  namespace: PropTypes.string.isRequired,
  numberOfSelected: PropTypes.number,
};

export default NumberOfResults;
