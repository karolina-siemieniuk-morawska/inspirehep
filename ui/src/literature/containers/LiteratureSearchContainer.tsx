import React, { useCallback, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { connect } from 'react-redux';
import { List } from 'immutable';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/containers/AggregationFilters... Remove this comment to see the full error message
import AggregationFiltersContainer from '../../common/containers/AggregationFiltersContainer';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/containers/PaginationContaine... Remove this comment to see the full error message
import PaginationContainer from '../../common/containers/PaginationContainer';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/containers/SortByContainer' w... Remove this comment to see the full error message
import SortByContainer from '../../common/containers/SortByContainer';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/containers/ResultsContainer' ... Remove this comment to see the full error message
import ResultsContainer from '../../common/containers/ResultsContainer';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/NumberOfResultsWithSelectedI... Remove this comment to see the full error message
import NumberOfResultsWithSelectedItemsNumber from '../components/NumberOfResultsWithSelectedItemsNumber';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/LoadingOrChildren'... Remove this comment to see the full error message
import LoadingOrChildren from '../../common/components/LoadingOrChildren';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/ResponsiveView' wa... Remove this comment to see the full error message
import ResponsiveView from '../../common/components/ResponsiveView';
// @ts-expect-error ts-migrate(2691) FIXME: An import path cannot end with a '.tsx' extension.... Remove this comment to see the full error message
import DrawerHandle from '../../common/components/DrawerHandle.tsx';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/LiteratureItem' was resolved... Remove this comment to see the full error message
import LiteratureItem from '../components/LiteratureItem';
// @ts-expect-error ts-migrate(6142) FIXME: Module './CiteAllActionContainer' was resolved to ... Remove this comment to see the full error message
import CiteAllActionContainer from './CiteAllActionContainer';
import VerticalDivider from '../../common/VerticalDivider';
import { searchBaseQueriesUpdate } from '../../actions/search';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/EmptyOrChildren' w... Remove this comment to see the full error message
import EmptyOrChildren from '../../common/components/EmptyOrChildren';
import CitationSummarySwitchContainer, {
  isCitationSummaryEnabled,
// @ts-expect-error ts-migrate(6142) FIXME: Module './CitationSummarySwitchContainer' was reso... Remove this comment to see the full error message
} from './CitationSummarySwitchContainer';
import { SEARCH_PAGE_GUTTER } from '../../common/constants';
import { isCataloger } from '../../common/authorization';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/CitationSummaryBox' was reso... Remove this comment to see the full error message
import CitationSummaryBox from '../components/CitationSummaryBox';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../authors/containers/PublicationSelect... Remove this comment to see the full error message
import PublicationSelectContainer from '../../authors/containers/PublicationSelectContainer';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../authors/containers/PublicationsSelec... Remove this comment to see the full error message
import PublicationsSelectAllContainer from '../../authors/containers/PublicationsSelectAllContainer';
import AssignAuthorViewContext from '../../authors/AssignViewContext';
import AssignConferenceViewContext from '../AssignViewContext';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../authors/containers/AssignAllActionCo... Remove this comment to see the full error message
import AssignAllActionContainer from '../../authors/containers/AssignAllActionContainer';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../authors/containers/AssignAllOwnProfi... Remove this comment to see the full error message
import AssignAllOwnProfileActionContainer from '../../authors/containers/AssignAllOwnProfileActionContainer';
import AssignViewOwnProfileContext from '../../authors/assignViewOwnProfileContext';
import AssignViewDifferentProfileContext from '../../authors/assignViewDifferentProfileContext';
import AssignViewNoProfileContext from '../../authors/assignViewNoProfileContext';
import AssignViewNotLoggedInContext from '../../authors/assignViewNotLoggedInContext';
// @ts-expect-error ts-migrate(6142) FIXME: Module './ToolActionContainer' was resolved to '/U... Remove this comment to see the full error message
import ToolActionContainer from './ToolActionContainer';
// @ts-expect-error ts-migrate(6142) FIXME: Module './LiteratureSelectAllContainer' was resolv... Remove this comment to see the full error message
import LiteratureSelectAllContainer from './LiteratureSelectAllContainer';
// @ts-expect-error ts-migrate(6142) FIXME: Module './LiteratureSelectContainer' was resolved ... Remove this comment to see the full error message
import LiteratureSelectContainer from './LiteratureSelectContainer';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../authors/containers/AssignAllDifferen... Remove this comment to see the full error message
import AssignAllDifferentProfileActionContainer from '../../authors/containers/AssignAllDifferentProfileActionContainer';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../authors/components/AssignNoProfileAc... Remove this comment to see the full error message
import AssignNoProfileAction from '../../authors/components/AssignNoProfileAction';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../authors/components/ClaimingDisabledB... Remove this comment to see the full error message
import ClaimingDisabledButton from '../../authors/components/ClaimingDisabledButton';

function LiteratureSearch({
  loading,
  loadingAggregations,
  namespace,
  baseQuery,
  baseAggregationsQuery,
  onBaseQueriesChange,
  results,
  noResultsTitle,
  noResultsDescription,
  isCitationSummaryVisible,
  embedded,
  enableCitationSummary,
  numberOfSelected
}: any) {
  const renderAggregations = useCallback(
    () => (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <LoadingOrChildren loading={loadingAggregations}>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <AggregationFiltersContainer
          namespace={namespace}
          embedded={embedded}
        />
      </LoadingOrChildren>
    ),
    [loadingAggregations, namespace, embedded]
  );

  useEffect(() => {
    // FIXME: this should be the responsibility of the parent component
    if (baseQuery || baseAggregationsQuery) {
      onBaseQueriesChange(namespace, {
        baseQuery,
        baseAggregationsQuery,
      });
    }
  }, [namespace, baseQuery, baseAggregationsQuery, onBaseQueriesChange]);

  const assignAuthorView = useContext(AssignAuthorViewContext);
  const assignAuthorOwnProfileView = useContext(AssignViewOwnProfileContext);
  const assignAuthorDifferentProfileView = useContext(
    AssignViewDifferentProfileContext
  );
  const assignAuthorNoProfileView = useContext(AssignViewNoProfileContext);
  const assignNotLoggedInView = useContext(AssignViewNotLoggedInContext);

  const assignConferenceView = useContext(AssignConferenceViewContext);
  const assignNoProfileViewCondition =
    assignAuthorNoProfileView &&
    !assignAuthorOwnProfileView &&
    !assignAuthorView &&
    !assignAuthorDifferentProfileView;

  const assignNotLoggedInViewCondition = assignNotLoggedInView && !assignNoProfileViewCondition;

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Row
      className="mt3"
      gutter={SEARCH_PAGE_GUTTER}
      // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
      type="flex"
      justify="center"
    >
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <EmptyOrChildren
        // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
        data={results}
        title={noResultsTitle}
        description={noResultsDescription}
      >
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Col xs={0} lg={7}>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <ResponsiveView min="lg" render={renderAggregations} />
        </Col>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Col xs={24} lg={17}>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <LoadingOrChildren loading={loading}>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Row type="flex" align="middle" justify="end">
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Col xs={24} lg={12}>
                {(assignAuthorView ||
                  assignAuthorOwnProfileView ||
                  assignAuthorDifferentProfileView) && (
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <span className="mr1">
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <PublicationsSelectAllContainer />
                  </span>
                )}
                {assignNoProfileViewCondition && (
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <span className="mr1">
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <PublicationsSelectAllContainer disabled />
                  </span>
                )}
                {assignConferenceView && (
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <span className="mr1">
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <LiteratureSelectAllContainer />
                  </span>
                )}
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <NumberOfResultsWithSelectedItemsNumber
                  numberOfSelected={numberOfSelected}
                  namespace={namespace}
                />
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <VerticalDivider />
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <CiteAllActionContainer namespace={namespace} />
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                {assignAuthorView && <AssignAllActionContainer />}
                {assignAuthorOwnProfileView && !assignAuthorView && (
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <AssignAllOwnProfileActionContainer />
                )}
                {assignAuthorDifferentProfileView &&
                  !assignAuthorOwnProfileView && (
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <AssignAllDifferentProfileActionContainer />
                  )}
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                {assignNoProfileViewCondition && <AssignNoProfileAction />}
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                {assignNotLoggedInViewCondition && <ClaimingDisabledButton />}
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                {assignConferenceView && <ToolActionContainer />}
              </Col>
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Col xs={8} lg={0}>
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <ResponsiveView
                  max="md"
                  render={() => (
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <DrawerHandle handleText="Filter" drawerTitle="Filter">
                      {renderAggregations()}
                    </DrawerHandle>
                  )}
                />
              </Col>
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Col className="tr" xs={16} lg={12}>
                {enableCitationSummary && (
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <span className="mr2">
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <CitationSummarySwitchContainer namespace={namespace} />
                  </span>
                )}
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <SortByContainer namespace={namespace} />
              </Col>
            </Row>
            {enableCitationSummary && isCitationSummaryVisible && (
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Row className="mt2">
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Col span={24}>
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <CitationSummaryBox namespace={namespace} />
                </Col>
              </Row>
            )}
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Row>
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Col span={24}>
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <ResultsContainer
                  namespace={namespace}
                  renderItem={(result: any, isCatalogerLoggedIn: any, rank: any) => (
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Row>
                      {(assignAuthorView || assignAuthorOwnProfileView) && (
                        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Col className="mr1" flex="0 1 1px">
                          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                          <PublicationSelectContainer
                            recordId={result.getIn([
                              'metadata',
                              'control_number',
                            ])}
                            claimed={result.getIn(
                              ['metadata', 'curated_relation'],
                              false
                            )}
                          />
                        </Col>
                      )}
                      {assignAuthorDifferentProfileView &&
                        !assignAuthorOwnProfileView && (
                          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                          <Col className="mr1" flex="0 1 1px">
                            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <PublicationSelectContainer
                              recordId={result.getIn([
                                'metadata',
                                'control_number',
                              ])}
                              claimed={result.getIn(
                                ['metadata', 'curated_relation'],
                                false
                              )}
                              canClaim={result.getIn(
                                ['metadata', 'can_claim'],
                                false
                              )}
                            />
                          </Col>
                        )}
                      {assignNoProfileViewCondition && (
                        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Col className="mr1" flex="0 1 1px">
                          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                          <PublicationSelectContainer disabled />
                        </Col>
                      )}
                      {assignConferenceView && (
                        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Col className="mr1" flex="0 1 1px">
                          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                          <LiteratureSelectContainer
                            recordId={result.getIn([
                              'metadata',
                              'control_number',
                            ])}
                          />
                        </Col>
                      )}
                      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <Col flex="1 1 1px">
                        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <LiteratureItem
                          metadata={result.get('metadata')}
                          searchRank={rank}
                          isCatalogerLoggedIn={isCatalogerLoggedIn}
                        />
                      </Col>
                    </Row>
                  )}
                />
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <PaginationContainer namespace={namespace} />
              </Col>
            </Row>
          </LoadingOrChildren>
        </Col>
      </EmptyOrChildren>
    </Row>
  );
}

LiteratureSearch.propTypes = {
  loading: PropTypes.bool.isRequired,
  loadingAggregations: PropTypes.bool.isRequired,
  namespace: PropTypes.string.isRequired,
  numberOfSelected: PropTypes.number,
  onBaseQueriesChange: PropTypes.func,
  baseQuery: PropTypes.object,
  baseAggregationsQuery: PropTypes.object,
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'typeof List' is not assignable t... Remove this comment to see the full error message
  results: PropTypes.instanceOf(List),
  noResultsTitle: PropTypes.string,
  noResultsDescription: PropTypes.node,
  isCitationSummaryVisible: PropTypes.bool.isRequired,
  embedded: PropTypes.bool,
  enableCitationSummary: PropTypes.bool,
  isCatalogerLoggedIn: PropTypes.bool,
};

LiteratureSearch.defaultProps = {
  enableCitationSummary: true,
};

const stateToProps = (
  // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'state' implicitly has an 'any' type.
  state,
  {
    namespace
  }: any
) => ({
  loading: state.search.getIn(['namespaces', namespace, 'loading']),

  loadingAggregations: state.search.getIn([
    'namespaces',
    namespace,
    'loadingAggregations',
  ]),

  results: state.search.getIn(['namespaces', namespace, 'results']),
  isCitationSummaryVisible: isCitationSummaryEnabled(state),
  isCatalogerLoggedIn: isCataloger(state.user.getIn(['data', 'roles']))
});

const dispatchToProps = (dispatch: any) => ({
  onBaseQueriesChange(namespace: any, baseQueries: any) {
    dispatch(searchBaseQueriesUpdate(namespace, baseQueries));
  }
});

export default connect(stateToProps, dispatchToProps)(LiteratureSearch);
