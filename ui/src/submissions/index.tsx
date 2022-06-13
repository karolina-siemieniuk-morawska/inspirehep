import React, { Component } from 'react';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Route, Redirect } from 'react-router-dom';

import {
  SUBMISSIONS_AUTHOR,
  SUBMISSIONS_JOB,
  SUBMISSIONS,
  SUBMISSIONS_LITERATURE,
  SUBMISSIONS_CONFERENCE,
  SUBMISSION_SUCCESS,
  SUBMISSIONS_SEMINAR,
  SUBMISSIONS_INSTITUTION,
  SUBMISSIONS_EXPERIMENT,
} from '../common/routes';
import { SUPERUSER_OR_CATALOGER } from '../common/authorization';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../common/PrivateRoute' was resolved to '/... Remove this comment to see the full error message
import PrivateRoute from '../common/PrivateRoute';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../common/components/SafeSwitch' was resol... Remove this comment to see the full error message
import SafeSwitch from '../common/components/SafeSwitch';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../common/components/DocumentHead' was res... Remove this comment to see the full error message
import DocumentHead from '../common/components/DocumentHead';
// @ts-expect-error ts-migrate(6142) FIXME: Module './authors/containers/AuthorSubmissionPageC... Remove this comment to see the full error message
import AuthorSubmissionPageContainer from './authors/containers/AuthorSubmissionPageContainer';
// @ts-expect-error ts-migrate(6142) FIXME: Module './authors/containers/AuthorUpdateSubmissio... Remove this comment to see the full error message
import AuthorUpdateSubmissionPageContainer from './authors/containers/AuthorUpdateSubmissionPageContainer';
// @ts-expect-error ts-migrate(6142) FIXME: Module './literature/containers/LiteratureSubmissi... Remove this comment to see the full error message
import LiteratureSubmissionPageContainer from './literature/containers/LiteratureSubmissionPageContainer';
// @ts-expect-error ts-migrate(6142) FIXME: Module './jobs/containers/JobSubmissionPageContain... Remove this comment to see the full error message
import JobSubmissionPageContainer from './jobs/containers/JobSubmissionPageContainer';
// @ts-expect-error ts-migrate(6142) FIXME: Module './jobs/containers/JobUpdateSubmissionPageC... Remove this comment to see the full error message
import JobUpdateSubmissionPageContainer from './jobs/containers/JobUpdateSubmissionPageContainer';
// @ts-expect-error ts-migrate(6142) FIXME: Module './conferences/containers/ConferenceSubmiss... Remove this comment to see the full error message
import ConferenceSubmissionPageContainer from './conferences/containers/ConferenceSubmissionPageContainer';
// @ts-expect-error ts-migrate(6142) FIXME: Module './jobs/components/JobUpdateSubmissionSucce... Remove this comment to see the full error message
import JobUpdateSubmissionSuccessPage from './jobs/components/JobUpdateSubmissionSuccessPage';
// @ts-expect-error ts-migrate(6142) FIXME: Module './conferences/containers/ConferenceSubmiss... Remove this comment to see the full error message
import ConferenceSubmissionSuccessPageContainer from './conferences/containers/ConferenceSubmissionSuccessPageContainer';
// @ts-expect-error ts-migrate(6142) FIXME: Module './common/components/SubmissionSuccessPage'... Remove this comment to see the full error message
import SubmissionSuccessPage from './common/components/SubmissionSuccessPage';
// @ts-expect-error ts-migrate(6142) FIXME: Module './seminars/containers/SeminarSubmissionPag... Remove this comment to see the full error message
import SeminarSubmissionPageContainer from './seminars/containers/SeminarSubmissionPageContainer';
// @ts-expect-error ts-migrate(6142) FIXME: Module './seminars/containers/SeminarUpdateSubmiss... Remove this comment to see the full error message
import SeminarUpdateSubmissionPageContainer from './seminars/containers/SeminarUpdateSubmissionPageContainer';
// @ts-expect-error ts-migrate(6142) FIXME: Module './seminars/containers/SeminarSubmissionSuc... Remove this comment to see the full error message
import SeminarSubmissionSuccessPageContainer from './seminars/containers/SeminarSubmissionSuccessPageContainer';
// @ts-expect-error ts-migrate(6142) FIXME: Module './authors/components/AuthorUpdateSubmissio... Remove this comment to see the full error message
import AuthorUpdateSubmissionSuccessPage from './authors/components/AuthorUpdateSubmissionSuccessPage';
// @ts-expect-error ts-migrate(6142) FIXME: Module './institutions/containers/InstitutionSubmi... Remove this comment to see the full error message
import InstitutionSubmissionPageContainer from './institutions/containers/InstitutionSubmissionPageContainer';
// @ts-expect-error ts-migrate(6142) FIXME: Module './experiments/containers/ExperimentSubmiss... Remove this comment to see the full error message
import ExperimentSubmissionPageContainer from './experiments/containers/ExperimentSubmissionPageContainer';

class Submissions extends Component {
  render() {
    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <DocumentHead title="Submit" />
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className="w-100">
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <SafeSwitch>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Redirect exact from={SUBMISSIONS} to={SUBMISSIONS_AUTHOR} />
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Route
              exact
              path={SUBMISSIONS_AUTHOR}
              component={AuthorSubmissionPageContainer}
            />
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Route
              exact
              path={`${SUBMISSIONS_AUTHOR}/:id`}
              component={AuthorUpdateSubmissionPageContainer}
            />
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Route
              exact
              path={SUBMISSIONS_LITERATURE}
              component={LiteratureSubmissionPageContainer}
            />
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Route
              exact
              path={SUBMISSIONS_JOB}
              component={JobSubmissionPageContainer}
            />
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Route
              exact
              path={`${SUBMISSIONS_JOB}/:id`}
              component={JobUpdateSubmissionPageContainer}
            />
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Route
              exact
              path={SUBMISSIONS_CONFERENCE}
              component={ConferenceSubmissionPageContainer}
            />
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Route
              exact
              path={SUBMISSIONS_SEMINAR}
              component={SeminarSubmissionPageContainer}
            />
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Route
              exact
              path={`${SUBMISSIONS_SEMINAR}/:id`}
              component={SeminarUpdateSubmissionPageContainer}
            />
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <PrivateRoute
              exact
              authorizedRoles={SUPERUSER_OR_CATALOGER}
              path={SUBMISSIONS_INSTITUTION}
              component={InstitutionSubmissionPageContainer} 
            />
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <PrivateRoute
              exact
              authorizedRoles={SUPERUSER_OR_CATALOGER}
              path={SUBMISSIONS_EXPERIMENT}
              component={ExperimentSubmissionPageContainer}
            />
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Redirect
              exact
              from={`${SUBMISSIONS_AUTHOR}/new/success`}
              to={SUBMISSION_SUCCESS}
            />
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Route
              exact
              path={`${SUBMISSIONS_AUTHOR}/:id/success`}
              component={AuthorUpdateSubmissionSuccessPage}
            />
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Redirect
              exact
              from={`${SUBMISSIONS_LITERATURE}/new/success`}
              to={SUBMISSION_SUCCESS}
            />
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Redirect
              exact
              from={`${SUBMISSIONS_JOB}/new/success`}
              to={SUBMISSION_SUCCESS}
            />
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Route
              exact
              path={`${SUBMISSIONS_JOB}/:id/success`}
              component={JobUpdateSubmissionSuccessPage}
            />
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Route
              exact
              path={`${SUBMISSIONS_CONFERENCE}/new/success`}
              component={ConferenceSubmissionSuccessPageContainer}
            />
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Route
              exact
              path={`${SUBMISSIONS_SEMINAR}/:id/success`}
              component={SeminarSubmissionSuccessPageContainer}
            />
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Route
              exact
              path={`${SUBMISSIONS_SEMINAR}/new/success`}
              component={SeminarSubmissionSuccessPageContainer}
            />
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Route
              exact
              path={SUBMISSION_SUCCESS}
              component={SubmissionSuccessPage}
            />
          </SafeSwitch>
        </div>
      </>
    );
  }
}

export default Submissions;
