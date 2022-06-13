import React from 'react';
import PropTypes from 'prop-types';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Link } from 'react-router-dom';
import { getLiteratureSearchUrlForAuthorBAI } from '../../common/utils';

function AuthorBAI({
  bai
}: any) {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <span>
      Author Identifier:{' '}
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Link to={getLiteratureSearchUrlForAuthorBAI(bai)}>{bai}</Link>
    </span>
  );
}

AuthorBAI.propTypes = {
  bai: PropTypes.string.isRequired,
};

export default AuthorBAI;
