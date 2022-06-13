import React from 'react';
import PropTypes from 'prop-types';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
import { Map } from 'immutable';

import fetchJob from '../../actions/jobs';
import ContentBox from '../../common/components/ContentBox';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/RichDescription' w... Remove this comment to see the full error message
import RichDescription from '../../common/components/RichDescription';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/DateFromNow' was resolved to... Remove this comment to see the full error message
import DateFromNow from '../components/DateFromNow';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/ArxivCategoryList'... Remove this comment to see the full error message
import ArxivCategoryList from '../../common/components/ArxivCategoryList';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/ExperimentList' wa... Remove this comment to see the full error message
import ExperimentList from '../../common/components/ExperimentList';
// @ts-expect-error ts-migrate(2691) FIXME: An import path cannot end with a '.tsx' extension.... Remove this comment to see the full error message
import EditRecordAction from '../../common/components/EditRecordAction.tsx';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/RegionsList' was resolved to... Remove this comment to see the full error message
import RegionsList from '../components/RegionsList';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/InstitutionsList' was resolv... Remove this comment to see the full error message
import InstitutionsList from '../components/InstitutionsList';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/RanksList' was resolved to '... Remove this comment to see the full error message
import RanksList from '../components/RanksList';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/DeadlineDate' was resolved t... Remove this comment to see the full error message
import DeadlineDate from '../components/DeadlineDate';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/ContactList' was r... Remove this comment to see the full error message
import ContactList from '../../common/components/ContactList';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/ReferenceLettersContacts' wa... Remove this comment to see the full error message
import ReferenceLettersContacts from '../components/ReferenceLettersContacts';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/MoreInfo' was resolved to '/... Remove this comment to see the full error message
import MoreInfo from '../components/MoreInfo';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/DocumentHead' was ... Remove this comment to see the full error message
import DocumentHead from '../../common/components/DocumentHead';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/JobTitle' was resolved to '/... Remove this comment to see the full error message
import JobTitle from '../components/JobTitle';
import {
  InlineUL,
  SEPARATOR_MIDDLEDOT,
} from '../../common/components/InlineList';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/JobStatusAlert' was resolved... Remove this comment to see the full error message
import JobStatusAlert from '../components/JobStatusAlert';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/DeletedAlert' was ... Remove this comment to see the full error message
import DeletedAlert from '../../common/components/DeletedAlert';
import { makeCompliantMetaDescription } from '../../common/utils';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/withRouteActionsDispatcher' w... Remove this comment to see the full error message
import withRouteActionsDispatcher from '../../common/withRouteActionsDispatcher';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/RequireOneOf' was ... Remove this comment to see the full error message
import RequireOneOf from '../../common/components/RequireOneOf';

function DetailPage({
  record
}: any) {
  const metadata = record.get('metadata');
  const created = record.get('created');
  const updated = record.get('updated');
  const position = metadata.get('position');
  const controlNumber = metadata.get('control_number');
  const institutions = metadata.get('institutions');
  const regions = metadata.get('regions');
  const arxivCategories = metadata.get('arxiv_categories');
  const ranks = metadata.get('ranks');
  const experiments = metadata.get('accelerator_experiments');
  const deadlineDate = metadata.get('deadline_date');
  const description = metadata.get('description');
  const status = metadata.get('status');
  const contacts = metadata.get('contact_details');
  const referenceLetters = metadata.get('reference_letters');
  const urls = metadata.get('urls');
  const canEdit = metadata.get('can_edit', false);
  const externalJobId = metadata.get('external_job_identifier');
  const deleted = metadata.get('deleted', false);

  const metaDescription = makeCompliantMetaDescription(description);

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <DocumentHead title={position} description={metaDescription} />
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Row type="flex" justify="center">
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Col className="mt3" xs={24} md={21} lg={19} xl={18}>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <ContentBox
            // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
            leftActions={
              canEdit && (
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <EditRecordAction pidType="jobs" pidValue={controlNumber} />
              )
            }
          >
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Row>
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Col span={24}>{deleted && <DeletedAlert />}</Col>
            </Row>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Row>
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Col span={24}>
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <JobStatusAlert status={status} />
              </Col>
            </Row>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Row>
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Col>
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <h2>
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <JobTitle position={position} externalJobId={externalJobId} />
                </h2>
              </Col>
            </Row>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <RequireOneOf dependencies={[institutions, regions]}>
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Row className="mt1">
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Col>
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <InlineUL separator={SEPARATOR_MIDDLEDOT}>
                    {institutions && (
                      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <InstitutionsList institutions={institutions} />
                    )}
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <RegionsList regions={regions} />
                  </InlineUL>
                </Col>
              </Row>
            </RequireOneOf>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <RequireOneOf dependencies={[arxivCategories, ranks, experiments]}>
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Row className="mt2">
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Col>
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <ArxivCategoryList
                    // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
                    arxivCategories={arxivCategories}
                    wrapperClassName="di"
                  />
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <InlineUL
                    // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
                    separator={SEPARATOR_MIDDLEDOT}
                    wrapperClassName="di"
                  >
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    {ranks && <RanksList ranks={ranks} />}
                    {experiments && (
                      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <ExperimentList experiments={experiments} />
                    )}
                  </InlineUL>
                </Col>
              </Row>
            </RequireOneOf>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Row className="mt3">
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Col>
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <DeadlineDate deadlineDate={deadlineDate} />
              </Col>
            </Row>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Row className="mt4">
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Col>
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <strong>Job description:</strong>
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <RichDescription>{description}</RichDescription>
              </Col>
            </Row>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Row className="mt4">
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Col>
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <ContactList contacts={contacts} />
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <ReferenceLettersContacts referenceLetters={referenceLetters} />
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <MoreInfo urls={urls} />
              </Col>
            </Row>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Row type="flex" justify="end">
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Col>
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                Posted <DateFromNow date={created} />, updated{' '}
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <DateFromNow date={updated} />
              </Col>
            </Row>
          </ContentBox>
        </Col>
      </Row>
    </>
  );
}

DetailPage.propTypes = {
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'typeof Map' is not assignable to... Remove this comment to see the full error message
  record: PropTypes.instanceOf(Map).isRequired,
};

const mapStateToProps = (state: any) => ({
  loading: state.jobs.get('loading'),
  record: state.jobs.get('data')
});

const DetailPageContainer = connect(mapStateToProps)(DetailPage);

export default withRouteActionsDispatcher(DetailPageContainer, {
  routeParamSelector: ({
    id
  }: any) => id,
  routeActions: (id: any) => [fetchJob(id)],
  loadingStateSelector: (state: any) => !state.jobs.hasIn(['data', 'metadata']),
});
