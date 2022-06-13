import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { connect } from 'react-redux';
import { Map } from 'immutable';

import {
  fetchUpdateFormData,
  submitUpdate,
} from '../../../actions/submissions';
import { SEMINARS_PID_TYPE } from '../../../common/constants';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/SeminarSubmission' was resol... Remove this comment to see the full error message
import SeminarSubmission from '../components/SeminarSubmission';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../../common/components/LoadingOrChildr... Remove this comment to see the full error message
import LoadingOrChildren from '../../../common/components/LoadingOrChildren';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/SubmissionPage' wa... Remove this comment to see the full error message
import SubmissionPage from '../../common/components/SubmissionPage';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../../common/components/ErrorAlertOrChi... Remove this comment to see the full error message
import ErrorAlertOrChildren from '../../../common/components/ErrorAlertOrChildren';

function SeminarUpdateSubmissionPage({
  error,
  updateFormData,
  loadingUpdateFormData,
  updateFormDataError,
  dispatch,
  match
}: any) {
  const recordId = match.params.id;
  const onSubmit = useCallback(
    async formData => {
      await dispatch(submitUpdate(SEMINARS_PID_TYPE, recordId, formData));
    },
    [dispatch, recordId]
  );
  useEffect(
    () => {
      dispatch(fetchUpdateFormData(SEMINARS_PID_TYPE, recordId));
    },
    [dispatch, recordId]
  );
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <SubmissionPage
      title="Update a seminar"
      description="All modifications will appear immediately."
    >
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <LoadingOrChildren loading={loadingUpdateFormData}>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <ErrorAlertOrChildren error={updateFormDataError}>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <SeminarSubmission
            error={error}
            onSubmit={onSubmit}
            initialFormData={updateFormData}
          />
        </ErrorAlertOrChildren>
      </LoadingOrChildren>
    </SubmissionPage>
  );
}

SeminarUpdateSubmissionPage.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  dispatch: PropTypes.func.isRequired,
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'typeof Map' is not assignable to... Remove this comment to see the full error message
  error: PropTypes.instanceOf(Map),
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'typeof Map' is not assignable to... Remove this comment to see the full error message
  updateFormData: PropTypes.instanceOf(Map),
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'typeof Map' is not assignable to... Remove this comment to see the full error message
  updateFormDataError: PropTypes.instanceOf(Map),
  loadingUpdateFormData: PropTypes.bool.isRequired,
};

const stateToProps = (state: any) => ({
  error: state.submissions.get('submitError'),
  updateFormData: state.submissions.get('initialData'),
  updateFormDataError: state.submissions.get('initialDataError'),
  loadingUpdateFormData: state.submissions.get('loadingInitialData')
});

const dispatchToProps = (dispatch: any) => ({
  dispatch
});

export default connect(stateToProps, dispatchToProps)(
  SeminarUpdateSubmissionPage
);
