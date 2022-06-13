import React from 'react';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import { Row, Col } from 'antd';

import fetchExperiment from '../../actions/experiments';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/withRouteActionsDispatcher' w... Remove this comment to see the full error message
import withRouteActionsDispatcher from '../../common/withRouteActionsDispatcher';
import ContentBox from '../../common/components/ContentBox';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/DocumentHead' was ... Remove this comment to see the full error message
import DocumentHead from '../../common/components/DocumentHead';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/AffiliationList' w... Remove this comment to see the full error message
import AffiliationList from '../../common/components/AffiliationList';
import { SEPARATOR_MIDDLEDOT } from '../../common/components/InlineList';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/RelatedRecordsList... Remove this comment to see the full error message
import RelatedRecordsList from '../../common/components/RelatedRecordsList';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/RequireOneOf' was ... Remove this comment to see the full error message
import RequireOneOf from '../../common/components/RequireOneOf';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/Latex' was resolve... Remove this comment to see the full error message
import Latex from '../../common/components/Latex';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/DeletedAlert' was ... Remove this comment to see the full error message
import DeletedAlert from '../../common/components/DeletedAlert';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../literature/components/UrlsAction' wa... Remove this comment to see the full error message
import UrlsAction from '../../literature/components/UrlsAction';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/ExperimentDates' was resolve... Remove this comment to see the full error message
import ExperimentDates from '../components/ExperimentDates';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/ExperimentCollaboration' was... Remove this comment to see the full error message
import ExperimentCollaboration from '../components/ExperimentCollaboration';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/ExperimentAssociatedArticles... Remove this comment to see the full error message
import ExperimentAssociatedArticlesLink from '../components/ExperimentAssociatedArticlesLink';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/ExperimentCollaborationMembe... Remove this comment to see the full error message
import ExperimentCollaborationMembersLink from '../components/ExperimentCollaborationMembersLink';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/ExperimentCollaborationArtic... Remove this comment to see the full error message
import ExperimentCollaborationArticlesLink from '../components/ExperimentCollaborationArticlesLink';
import PublicNotesList from '../../common/components/PublicNotesList';
import { newSearch } from '../../actions/search';
// @ts-expect-error ts-migrate(6142) FIXME: Module './ExperimentPapers' was resolved to '/User... Remove this comment to see the full error message
import ExperimentPapers from './ExperimentPapers';
import { makeCompliantMetaDescription } from '../../common/utils';
import { EXPERIMENT_PAPERS_NS } from '../../search/constants';
import { EXPERIMENTS_PID_TYPE } from '../../common/constants';

function DetailPage({
  record
}: any) {
  const metadata = record.get('metadata');

  const legacyName = metadata.get('legacy_name');
  const institutions = metadata.get('institutions');
  const longName = metadata.get('long_name');
  const parentExperiments = metadata.get('parent_experiments');
  const successorExperiments = metadata.get('successor_experiments');
  const predecessorExperiments = metadata.get('predecessor_experiments');
  const subsidiaryExperiments = metadata.get('subsidiary_experiments');
  const description = metadata.get('description');
  const deleted = metadata.get('deleted', false);
  const urls = metadata.get('urls');
  const dateStarted = metadata.get('date_started');
  const dateProposed = metadata.get('date_proposed');
  const dateApproved = metadata.get('date_approved');
  const dateCancelled = metadata.get('date_cancelled');
  const dateCompleted = metadata.get('date_completed');
  const collaboration = metadata.get('collaboration');
  const recordId = metadata.get('control_number');
  const publicNotes = metadata.get('public_notes');

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <DocumentHead
        // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
        title={legacyName}
        description={makeCompliantMetaDescription(description)}
      />
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Row justify="center">
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Col className="mv3" xs={24} md={22} lg={21} xxl={18}>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <ContentBox
            // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
            className="sm-pb3"
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            leftActions={urls && <UrlsAction urls={urls} text="links" />}
          >
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Row>
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Col span={24}>{deleted && <DeletedAlert />}</Col>
            </Row>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Row>
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Col>
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <h2>
                  {legacyName}
                  {institutions && (
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <span className="pl1 f6">
                      (
                      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <AffiliationList
                        // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
                        affiliations={institutions}
                        separator={SEPARATOR_MIDDLEDOT}
                      />
                      )
                    </span>
                  )}
                </h2>
              </Col>
            </Row>
            {longName && (
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Row>
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Col>{longName}</Col>
              </Row>
            )}
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <RequireOneOf
              dependencies={[
                dateApproved,
                dateProposed,
                dateStarted,
                dateCancelled,
                dateCompleted,
              ]}
            >
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Row>
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Col>
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  (<ExperimentDates
                    dateApproved={dateApproved}
                    dateProposed={dateProposed}
                    dateStarted={dateStarted}
                    dateCancelled={dateCancelled}
                    dateCompleted={dateCompleted}
                    wrapperClassName="di"
                  />)
                </Col>
              </Row>
            </RequireOneOf>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <RequireOneOf
              dependencies={[
                parentExperiments,
                successorExperiments,
                predecessorExperiments,
                subsidiaryExperiments,
              ]}
            >
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Row className="mt3">
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Col>
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <RelatedRecordsList
                    relatedRecords={parentExperiments}
                    relationType="Parent"
                    label="Experiment"
                    pidType={EXPERIMENTS_PID_TYPE}
                  />
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <RelatedRecordsList
                    relatedRecords={subsidiaryExperiments}
                    relationType="Subsidiary"
                    label="Experiment"
                    pidType={EXPERIMENTS_PID_TYPE}
                  />
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <RelatedRecordsList
                    relatedRecords={successorExperiments}
                    relationType="Successor"
                    label="Experiment"
                    pidType={EXPERIMENTS_PID_TYPE}
                  />
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <RelatedRecordsList
                    relatedRecords={predecessorExperiments}
                    relationType="Predecessor"
                    label="Experiment"
                    pidType={EXPERIMENTS_PID_TYPE}
                  />
                </Col>
              </Row>
            </RequireOneOf>
            {collaboration && (
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Row>
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Col>
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <ExperimentCollaboration collaboration={collaboration} />
                </Col>
              </Row>
            )}
            {description && (
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Row className="mt3">
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Col>
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <Latex>{description}</Latex>
                </Col>
              </Row>
            )}
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Row className="mt3">
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Col>
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <ExperimentAssociatedArticlesLink
                  recordId={recordId}
                  legacyName={legacyName}
                />
              </Col>
            </Row>
            {collaboration && (
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Row>
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Col>
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <ExperimentCollaborationArticlesLink
                    collaboration={collaboration}
                  />
                </Col>
              </Row>
            )}
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Row>
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Col>
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <ExperimentCollaborationMembersLink recordId={recordId} />
              </Col>
            </Row>
            {publicNotes && (
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Row className="mt2">
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Col>
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <PublicNotesList publicNotes={publicNotes} />
                </Col>
              </Row>
            )}
          </ContentBox>
        </Col>
      </Row>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Row justify="center">
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Col xs={24} md={22} lg={21} xxl={18}>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <ContentBox>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <ExperimentPapers recordId={recordId} />
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
  record: state.experiments.get('data')
});
const DetailPageContainer = connect(mapStateToProps)(DetailPage);

export default withRouteActionsDispatcher(DetailPageContainer, {
  routeParamSelector: ({
    id
  }: any) => id,
  routeActions: (id: any) => [fetchExperiment(id), newSearch(EXPERIMENT_PAPERS_NS)],
  loadingStateSelector: (state: any) => !state.experiments.hasIn(['data', 'metadata']),
});
