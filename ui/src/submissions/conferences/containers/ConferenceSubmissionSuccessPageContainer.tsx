import React from 'react';
import PropTypes from 'prop-types';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Link } from 'react-router-dom';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { connect } from 'react-redux';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/SubmissionSuccess'... Remove this comment to see the full error message
import SubmissionSuccess from '../../common/components/SubmissionSuccess';
import { CONFERENCES } from '../../../common/routes';

export function ConferenceSubmissionSucessPage({
  cnum,
  recordId
}: any) {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <SubmissionSuccess
      // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
      message={
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <span>
          Successfully submitted, thank you for the submission! See the
          conference ({cnum}){' '}
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Link to={`${CONFERENCES}/${recordId}`}>here</Link>.
        </span>
      }
    />
  );
}

ConferenceSubmissionSucessPage.propTypes = {
  cnum: PropTypes.string.isRequired,
  recordId: PropTypes.number.isRequired,
};

const stateToProps = (state: any) => ({
  cnum: state.submissions.getIn(['successData', 'cnum']),
  recordId: state.submissions.getIn(['successData', 'pid_value'])
});

export default connect(stateToProps)(ConferenceSubmissionSucessPage);
