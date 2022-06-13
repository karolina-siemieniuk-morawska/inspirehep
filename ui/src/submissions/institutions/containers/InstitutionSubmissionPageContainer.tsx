import React from 'react'
import PropTypes from 'prop-types';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { connect } from 'react-redux';
import { Map } from 'immutable';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Link } from 'react-router-dom';

import { submit } from '../../../actions/submissions';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/SubmissionPage' wa... Remove this comment to see the full error message
import SubmissionPage from '../../common/components/SubmissionPage';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/InstitutionSubmission' was r... Remove this comment to see the full error message
import InstitutionSubmission from '../components/InstitutionSubmission';
import { INSTITUTIONS_PID_TYPE } from '../../../common/constants';
import { INSTITUTIONS } from '../../../common/routes';

export const InstitutionSubmissionPage = ({
  error,
  onSubmit
}: any) => (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <SubmissionPage
      title="Suggest institution"
      description={
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <span>
          This form allows you to create a new institution record. It will
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          appear in the <Link to={INSTITUTIONS}>Institutions List</Link> immediately.
        </span>
      }
    >
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <InstitutionSubmission
      error={error}
      onSubmit={onSubmit}
    />
  </SubmissionPage>
);

InstitutionSubmissionPage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'typeof Map' is not assignable to... Remove this comment to see the full error message
  error: PropTypes.instanceOf(Map),
};

const stateToProps = (state: any) => ({
  error: state.submissions.get('submitError')
});

const dispatchToProps = (dispatch: any) => ({
  async onSubmit(formData: any) {
    await dispatch(submit(INSTITUTIONS_PID_TYPE, formData));
  }
});

export default connect(stateToProps, dispatchToProps)(InstitutionSubmissionPage);
