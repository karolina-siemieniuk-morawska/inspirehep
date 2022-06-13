import React from 'react';
import PropTypes from 'prop-types';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Link } from 'react-router-dom';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { connect } from 'react-redux';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/SubmissionSuccess'... Remove this comment to see the full error message
import SubmissionSuccess from '../../common/components/SubmissionSuccess';
import { SEMINARS } from '../../../common/routes';

export function SeminarSubmissionSuccessPage({
  recordId
}: any) {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <SubmissionSuccess
      // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
      message={
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <span>
          Successfully submitted, thank you for the submission! See the seminar{' '}
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Link to={`${SEMINARS}/${recordId}`}>here</Link>.
        </span>
      }
    />
  );
}

SeminarSubmissionSuccessPage.propTypes = {
  recordId: PropTypes.number.isRequired,
};

const stateToProps = (state: any) => ({
  recordId: state.submissions.getIn(['successData', 'pid_value'])
});

export default connect(stateToProps)(SeminarSubmissionSuccessPage);
