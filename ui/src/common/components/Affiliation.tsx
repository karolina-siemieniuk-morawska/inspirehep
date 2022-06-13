import React from 'react';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Link } from 'react-router-dom';
import { Map } from 'immutable';
import PropTypes from 'prop-types';
import { INSTITUTIONS } from '../routes';
import { getRecordIdFromRef, getInstitutionName } from '../utils';

function Affiliation({
  affiliation
}: any) {
  const institutionRecordId = getRecordIdFromRef(
    affiliation.getIn(['record', '$ref'])
  );

  const institutionName = getInstitutionName(affiliation);

  return institutionRecordId ? (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Link to={`${INSTITUTIONS}/${institutionRecordId}`}>{institutionName}</Link>
  ) : (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <span>{institutionName}</span>
  );
}

Affiliation.propTypes = {
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'typeof Map' is not assignable to... Remove this comment to see the full error message
  affiliation: PropTypes.instanceOf(Map).isRequired,
};

export default Affiliation;
