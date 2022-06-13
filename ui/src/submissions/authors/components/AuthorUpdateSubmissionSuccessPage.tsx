import React from 'react';
import PropTypes from 'prop-types';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Link } from 'react-router-dom';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/SubmissionSuccess'... Remove this comment to see the full error message
import SubmissionSuccess from '../../common/components/SubmissionSuccess';
import { AUTHORS } from '../../../common/routes';

function AuthorUpdateSubmissionSuccessPage({
  match
}: any) {
  const { id } = match.params;
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <SubmissionSuccess
      // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
      message={
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <span>
          Successfully submitted, thank you! See the author profile{' '}
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Link to={`${AUTHORS}/${id}`}>here</Link>. All proposed updates are
          reviewed by INSPIRE and further updates might be necessary to ensure
          the best performance of the INSPIRE database.
        </span>
      }
    />
  );
}

AuthorUpdateSubmissionSuccessPage.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default AuthorUpdateSubmissionSuccessPage;
