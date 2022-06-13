import React from 'react';
import PropTypes from 'prop-types';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Link } from 'react-router-dom';
import { Map } from 'immutable';
import { getRecordIdFromRef, getAuthorName } from '../../../common/utils';
import { AUTHORS } from '../../../common/routes';

function Advisor({
  advisor
}: any) {
  const name = advisor.get('name');
  const $ref = advisor.getIn(['record', '$ref']);
  const recordId = getRecordIdFromRef($ref);
  const profileOrSearchUrl = recordId
    ? `${AUTHORS}/${recordId}`
    : `${AUTHORS}?q=${encodeURIComponent(name)}`;
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return <Link to={profileOrSearchUrl}>{getAuthorName(advisor)}</Link>;
}

Advisor.propTypes = {
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'typeof Map' is not assignable to... Remove this comment to see the full error message
  advisor: PropTypes.instanceOf(Map).isRequired,
};

export default Advisor;
