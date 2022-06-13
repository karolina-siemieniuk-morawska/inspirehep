import React from 'react';
import PropTypes from 'prop-types';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { connect } from 'react-redux';
import { Map } from 'immutable';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Link } from 'react-router-dom';

import { submit } from '../../../actions/submissions';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/SubmissionPage' wa... Remove this comment to see the full error message
import SubmissionPage from '../../common/components/SubmissionPage';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/ExperimentSubmission' was re... Remove this comment to see the full error message
import ExperimentSubmission from '../components/ExperimentSubmission';
import { EXPERIMENTS_PID_TYPE } from '../../../common/constants';
import { EXPERIMENTS } from '../../../common/routes';

export const ExperimentSubmissionPage = ({
  error,
  onSubmit
}: any) => (
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <SubmissionPage
    title="Suggest experiment"
    description={
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <span>
        This form allows you to create a new experiment record. It will
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        appear in the <Link to={EXPERIMENTS}>Experiments List</Link> immediately.
      </span>
    }
  >
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <ExperimentSubmission
      error={error}
      onSubmit={onSubmit}
    />
  </SubmissionPage>
);

ExperimentSubmissionPage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'typeof Map' is not assignable to... Remove this comment to see the full error message
  error: PropTypes.instanceOf(Map),
};

const stateToProps = (state: any) => ({
  error: state.submissions.get('submitError')
});

const dispatchToProps = (dispatch: any) => ({
  async onSubmit(formData: any) {
    await dispatch(submit(EXPERIMENTS_PID_TYPE, formData));
  }
});

export default connect(stateToProps, dispatchToProps)(ExperimentSubmissionPage);
