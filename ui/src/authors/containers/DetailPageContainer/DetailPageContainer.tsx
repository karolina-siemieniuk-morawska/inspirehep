import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { connect } from 'react-redux';
import { Row, Col, Tabs, Tooltip } from 'antd';
import { Map, List } from 'immutable';

import './DetailPage.scss';
import ContentBox from '../../../common/components/ContentBox';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../components/AuthorName' was resolved ... Remove this comment to see the full error message
import AuthorName from '../../components/AuthorName';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../../common/components/ExperimentList'... Remove this comment to see the full error message
import ExperimentList from '../../../common/components/ExperimentList';
import fetchAuthor from '../../../actions/authors';
import { fetchCitationsByYear } from '../../../actions/citations';
import {
  getCurrentAffiliationsFromPositions,
  getAuthorDisplayName,
  getAuthorMetaDescription,
} from '../../utils';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../components/PositionsTimeline' was re... Remove this comment to see the full error message
import PositionsTimeline from '../../components/PositionsTimeline';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../../common/components/ArxivCategoryLi... Remove this comment to see the full error message
import ArxivCategoryList from '../../../common/components/ArxivCategoryList';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../components/AuthorTwitterAction' was ... Remove this comment to see the full error message
import AuthorTwitterAction from '../../components/AuthorTwitterAction';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../components/AuthorLinkedinAction' was... Remove this comment to see the full error message
import AuthorLinkedinAction from '../../components/AuthorLinkedinAction';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../components/AuthorWebsitesAction' was... Remove this comment to see the full error message
import AuthorWebsitesAction from '../../components/AuthorWebsitesAction';
import AuthorOrcid from '../../components/AuthorOrcid';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../../common/components/DocumentHead' w... Remove this comment to see the full error message
import DocumentHead from '../../../common/components/DocumentHead';
import TabNameWithCount from '../../../common/components/TabNameWithCount';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../AuthorCitationsContainer' was resolved ... Remove this comment to see the full error message
import AuthorCitationsContainer from '../AuthorCitationsContainer';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../components/AuthorEmailsAction' was r... Remove this comment to see the full error message
import AuthorEmailsAction from '../../components/AuthorEmailsAction';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../AuthorPublicationsContainer' was resolv... Remove this comment to see the full error message
import AuthorPublicationsContainer from '../AuthorPublicationsContainer';
import {
  AUTHOR_PUBLICATIONS_NS,
  AUTHOR_CITATIONS_NS,
  AUTHOR_SEMINARS_NS,
} from '../../../search/constants';
import { newSearch, searchBaseQueriesUpdate } from '../../../actions/search';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../../common/components/DeletedAlert' w... Remove this comment to see the full error message
import DeletedAlert from '../../../common/components/DeletedAlert';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../components/UserSettingsAction' was r... Remove this comment to see the full error message
import UserSettingsAction from '../../components/UserSettingsAction';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../../common/withRouteActionsDispatcher... Remove this comment to see the full error message
import withRouteActionsDispatcher from '../../../common/withRouteActionsDispatcher';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../components/AuthorBAI' was resolved t... Remove this comment to see the full error message
import AuthorBAI from '../../components/AuthorBAI';
import Advisors from '../../components/Advisors';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../../common/components/AffiliationList... Remove this comment to see the full error message
import AffiliationList from '../../../common/components/AffiliationList';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../../common/components/RecordUpdateInf... Remove this comment to see the full error message
import RecordUpdateInfo from '../../../common/components/RecordUpdateInfo';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../components/AuthorSeminars' was resol... Remove this comment to see the full error message
import AuthorSeminars from '../../components/AuthorSeminars';
// @ts-expect-error ts-migrate(2691) FIXME: An import path cannot end with a '.tsx' extension.... Remove this comment to see the full error message
import EditAuthorRecordAction from '../../components/EditAuthorRecordAction.tsx';
import { isCataloger } from '../../../common/authorization';

function DetailPage({
  record,
  publicationsQuery,
  userOrcid,
  dispatch,
  publicationsCount,
  citingPapersCount,
  loadingPublications,
  seminarsCount,
  isCatalogerLoggedIn
}: any) {
  const authorFacetName = publicationsQuery.getIn(['author', 0]);
  const metadata = record.get('metadata');
  const updateTime = record.get('updated');
  useEffect(
    () => {
      // check if author is fetched and author facet name is added to query of AUTHOR_PUBLICATIONS_NS
      // by AuthorPublicationsContainer.
      if (authorFacetName) {
        const query = publicationsQuery.toJS();
        // FIXME: localize dispatch(action) to relevant components, instead of dispatching in parent detail page
        dispatch(fetchCitationsByYear(query));
      }
    },
    [dispatch, authorFacetName] // eslint-disable-line react-hooks/exhaustive-deps
  );

  const name = metadata.get('name');
  const recordId = metadata.get('control_number');

  const positions = metadata.get('positions', List());
  const currentPositions = useMemo(
    () => getCurrentAffiliationsFromPositions(positions),
    [positions]
  );
  const shouldDisplayPositions = metadata.get('should_display_positions');

  const arxivCategories = metadata.get('arxiv_categories');
  const experiments = metadata.get('project_membership');

  const twitter = metadata.get('twitter');
  const linkedin = metadata.get('linkedin');
  const urls = metadata.get('urls');
  const orcid = metadata.get('orcid');
  const emails = metadata.get('email_addresses');
  const deleted = metadata.get('deleted', false);
  const bai = metadata.get('bai');
  const advisors = metadata.get('advisors');
  const canEdit = metadata.get('can_edit', false);

  const metaDescription = useMemo(() => getAuthorMetaDescription(metadata), [
    metadata,
  ]);
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <DocumentHead
        // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
        title={getAuthorDisplayName(name)}
        description={metaDescription}
      />
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Row className="__DetailPage__" type="flex" justify="center">
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Col xs={24} md={22} lg={21} xxl={18}>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Row
            className="mv3"
            // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
            type="flex"
            gutter={{ xs: 0, md: 16, xl: 32 }}
            justify="space-between"
          >
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Col span={24}>
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <ContentBox
                // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
                className="sm-pb3"
                leftActions={
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <>
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    {emails && <AuthorEmailsAction emails={emails} />}
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    {twitter && <AuthorTwitterAction twitter={twitter} />}
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    {linkedin && <AuthorLinkedinAction linkedin={linkedin} />}
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    {urls && <AuthorWebsitesAction websites={urls} />}
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    {orcid && orcid === userOrcid && <UserSettingsAction />}
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <EditAuthorRecordAction
                      canEdit={canEdit}
                      pidValue={recordId}
                      isCatalogerLoggedIn={isCatalogerLoggedIn}
                    />
                  </>
                }
                rightActions={
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <>
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <RecordUpdateInfo updateDate={updateTime} />
                  </>
                }
              >
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Row>
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <Col span={24}>{deleted && <DeletedAlert />}</Col>
                </Row>
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <h2>
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <AuthorName name={name} />
                  {currentPositions.size > 0 && (
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <span className="pl1 f6">
                      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      (<AffiliationList affiliations={currentPositions} />)
                    </span>
                  )}
                  {orcid && (
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <span className="pl1">
                      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <AuthorOrcid orcid={orcid} />
                    </span>
                  )}
                </h2>
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Row type="flex" justify="space-between">
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <Col xs={24} lg={12} className="mb3">
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <ArxivCategoryList arxivCategories={arxivCategories} />
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <ExperimentList experiments={experiments} />
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    {bai && <AuthorBAI bai={bai} />}
                    {advisors && (
                      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <div className="mt2">
                        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Advisors advisors={advisors} />
                      </div>
                    )}
                  </Col>
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <Col xs={24} lg={12}>
                    {shouldDisplayPositions && (
                      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <PositionsTimeline positions={positions} />
                    )}
                  </Col>
                </Row>
              </ContentBox>
            </Col>
          </Row>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Row>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Col span={24}>
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Tabs type="card" tabBarStyle={{ marginBottom: 0 }}>
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Tabs.TabPane
                  tab={
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Tooltip title="Research from the author">
                      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <span>
                        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <TabNameWithCount
                          // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
                          loading={
                            publicationsCount === null && loadingPublications
                          }
                          name="Research works"
                          count={publicationsCount}
                        />
                      </span>
                    </Tooltip>
                  }
                  key="1"
                >
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <ContentBox className="remove-top-border-of-card">
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <AuthorPublicationsContainer />
                  </ContentBox>
                </Tabs.TabPane>
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Tabs.TabPane
                  tab={
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Tooltip title="Research citing the author">
                      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <span>
                        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        Cited By {citingPapersCount === 0 && <span> (0)</span>}
                      </span>
                    </Tooltip>
                  }
                  key="2"
                  forceRender
                >
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <ContentBox className="remove-top-border-of-card">
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <AuthorCitationsContainer />
                  </ContentBox>
                </Tabs.TabPane>
                {seminarsCount > 0 && (
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <Tabs.TabPane
                    tab={
                      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <Tooltip title="Seminars from the author">
                        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <span>Seminars</span>
                      </Tooltip>
                    }
                    key="3"
                  >
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <ContentBox className="remove-top-border-of-card">
                      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <AuthorSeminars />
                    </ContentBox>
                  </Tabs.TabPane>
                )}
              </Tabs>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

DetailPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'typeof Map' is not assignable to... Remove this comment to see the full error message
  record: PropTypes.instanceOf(Map).isRequired,
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'typeof Map' is not assignable to... Remove this comment to see the full error message
  publicationsQuery: PropTypes.instanceOf(Map).isRequired,
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'typeof List' is not assignable t... Remove this comment to see the full error message
  publications: PropTypes.instanceOf(List),
  userOrcid: PropTypes.string,
  publicationsCount: PropTypes.number,
  citingPapersCount: PropTypes.number,
  isCatalogerLoggedIn: PropTypes.bool,
};

const mapStateToProps = (state: any) => ({
  record: state.authors.get('data'),

  publicationsQuery: state.search.getIn([
    'namespaces',
    AUTHOR_PUBLICATIONS_NS,
    'query',
  ]),

  publications: state.search.getIn([
    'namespaces',
    AUTHOR_PUBLICATIONS_NS,
    'results',
  ]),

  userOrcid: state.user.getIn(['data', 'orcid']),

  loadingPublications: state.search.getIn([
    'namespaces',
    AUTHOR_PUBLICATIONS_NS,
    'loading',
  ]),

  publicationsCount: state.search.getIn([
    'namespaces',
    AUTHOR_PUBLICATIONS_NS,
    'initialTotal',
  ]),

  citingPapersCount: state.search.getIn([
    'namespaces',
    AUTHOR_CITATIONS_NS,
    'initialTotal',
  ]),

  seminarsCount: state.search.getIn([
    'namespaces',
    AUTHOR_SEMINARS_NS,
    'initialTotal',
  ]),

  isCatalogerLoggedIn: isCataloger(state.user.getIn(['data', 'roles']))
});
const dispatchToProps = (dispatch: any) => ({
  dispatch
});
const DetailPageContainer = connect(
  mapStateToProps,
  dispatchToProps
)(DetailPage);

export default withRouteActionsDispatcher(DetailPageContainer, {
  routeParamSelector: ({
    id
  }: any) => id,
  routeActions: (id: any) => [
    fetchAuthor(id),
    newSearch(AUTHOR_PUBLICATIONS_NS),
    newSearch(AUTHOR_CITATIONS_NS),
    newSearch(AUTHOR_SEMINARS_NS),
    searchBaseQueriesUpdate(AUTHOR_SEMINARS_NS, {
      baseQuery: { q: `speakers.record.$ref:${id}` },
    }),
  ],
  loadingStateSelector: (state: any) => !state.authors.hasIn(['data', 'metadata']),
});
