import React from 'react';
import PropTypes from 'prop-types';

// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Link } from 'react-router-dom';
import { AUTHORS } from '../../common/routes';

function InstitutionPeople({
  recordId
}: any) {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <span>
      List of{' '}
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Link to={`${AUTHORS}?q=positions.record.$ref:${recordId}`}>People</Link>
    </span>
  );
}

InstitutionPeople.propTypes = {
  recordId: PropTypes.number.isRequired,
};

export default InstitutionPeople;
