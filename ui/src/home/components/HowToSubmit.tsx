import React from 'react';
import { Row, Col } from 'antd';

import {
  SUBMISSIONS_LITERATURE,
  SUBMISSIONS_AUTHOR,
  SUBMISSIONS_JOB,
  SUBMISSIONS_CONFERENCE,
  SUBMISSIONS_SEMINAR,
} from '../../common/routes';
// @ts-expect-error ts-migrate(6142) FIXME: Module './SubmissionCard' was resolved to '/Users/... Remove this comment to see the full error message
import SubmissionCard from './SubmissionCard';

function HowToSubmit() {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Row justify="center">
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Col className="pa3">
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <SubmissionCard title="Literature" formLink={SUBMISSIONS_LITERATURE}>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <p>Suggest missing articles.</p>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <p>All submissions will be visible upon approval.</p>
        </SubmissionCard>
      </Col>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Col className="pa3">
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <SubmissionCard title="Author" formLink={SUBMISSIONS_AUTHOR}>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <p>Create the profile of a new author.</p>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <p>All submissions will be visible upon approval.</p>
        </SubmissionCard>
      </Col>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Col className="pa3">
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <SubmissionCard title="Job" formLink={SUBMISSIONS_JOB}>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <p>Submit a new job.</p>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <p>All submissions will be visible upon approval.</p>
        </SubmissionCard>
      </Col>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Col className="pa3">
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <SubmissionCard title="Seminar" formLink={SUBMISSIONS_SEMINAR}>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <p>Submit a new seminar.</p>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <p>All submissions will be visible immediately.</p>
        </SubmissionCard>
      </Col>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Col className="pa3">
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <SubmissionCard title="Conference" formLink={SUBMISSIONS_CONFERENCE}>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <p>Submit a new conference.</p>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <p>All submissions will be visible immediately.</p>
        </SubmissionCard>
      </Col>
    </Row>
  );
}

export default HowToSubmit;
