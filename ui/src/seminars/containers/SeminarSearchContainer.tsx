import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Alert } from 'antd';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { connect } from 'react-redux';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/containers/AggregationFilters... Remove this comment to see the full error message
import AggregationFiltersContainer from '../../common/containers/AggregationFiltersContainer';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/containers/PaginationContaine... Remove this comment to see the full error message
import PaginationContainer from '../../common/containers/PaginationContainer';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/containers/SortByContainer' w... Remove this comment to see the full error message
import SortByContainer from '../../common/containers/SortByContainer';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/containers/ResultsContainer' ... Remove this comment to see the full error message
import ResultsContainer from '../../common/containers/ResultsContainer';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/containers/NumberOfResultsCon... Remove this comment to see the full error message
import NumberOfResultsContainer from '../../common/containers/NumberOfResultsContainer';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/LoadingOrChildren'... Remove this comment to see the full error message
import LoadingOrChildren from '../../common/components/LoadingOrChildren';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/ResponsiveView' wa... Remove this comment to see the full error message
import ResponsiveView from '../../common/components/ResponsiveView';
// @ts-expect-error ts-migrate(2691) FIXME: An import path cannot end with a '.tsx' extension.... Remove this comment to see the full error message
import DrawerHandle from '../../common/components/DrawerHandle.tsx';
import { SEMINARS_NS, AUTHOR_SEMINARS_NS } from '../../search/constants';
import { SEARCH_PAGE_GUTTER, LOCAL_TIMEZONE } from '../../common/constants';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/SeminarItem' was resolved to... Remove this comment to see the full error message
import SeminarItem from '../components/SeminarItem';
// @ts-expect-error ts-migrate(6142) FIXME: Module './SeminarStartDateFilterContainer' was res... Remove this comment to see the full error message
import SeminarStartDateFilterContainer from './SeminarStartDateFilterContainer';
import VerticalDivider from '../../common/VerticalDivider';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/SeminarTimezone' was resolve... Remove this comment to see the full error message
import SeminarTimezone from '../components/SeminarTimezone';
import { doTimezonesHaveDifferentTimes } from '../../common/utils';

function SeminarSearch({
  loading,
  loadingAggregations,
  selectedTimezone,
  namespace,
  enableDateFilter,
  embedded
}: any) {
  const renderAggregations = useCallback(
    () => (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <>
        {enableDateFilter && (
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <SeminarStartDateFilterContainer
            namespace={namespace}
            switchTitle="Upcoming seminars"
          />
        )}
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <LoadingOrChildren loading={loadingAggregations}>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <AggregationFiltersContainer
            namespace={namespace}
            embedded={embedded}
          />
        </LoadingOrChildren>
      </>
    ),
    [loadingAggregations, enableDateFilter, namespace, embedded]
  );

  const renderSeminarItem = useCallback(
    result => (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <SeminarItem
        metadata={result.get('metadata')}
        selectedTimezone={selectedTimezone}
      />
    ),
    [selectedTimezone]
  );

  const timezoneDifferentThanLocal =
    selectedTimezone &&
    doTimezonesHaveDifferentTimes(selectedTimezone, LOCAL_TIMEZONE);
  const timezone = selectedTimezone || LOCAL_TIMEZONE;

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Row
      className="mt3"
      gutter={SEARCH_PAGE_GUTTER}
      // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
      type="flex"
      justify="start"
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
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <NumberOfResultsContainer namespace={namespace} />
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <VerticalDivider />
              {timezoneDifferentThanLocal ? (
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Alert
                  type="error"
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  message={<SeminarTimezone timezone={timezone} />}
                  className="di"
                />
              ) : (
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <SeminarTimezone timezone={timezone} />
              )}
            </Col>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Col xs={12} lg={0}>
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <ResponsiveView
                max="md"
                render={() => (
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <DrawerHandle
                    className="mt2"
                    handleText="Filter"
                    drawerTitle="Filter"
                  >
                    {renderAggregations()}
                  </DrawerHandle>
                )}
              />
            </Col>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Col className="tr" span={12}>
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <SortByContainer namespace={namespace} />
            </Col>
          </Row>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Row>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Col span={24}>
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <ResultsContainer
                namespace={namespace}
                renderItem={renderSeminarItem}
              />
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <PaginationContainer namespace={namespace} />
            </Col>
          </Row>
        </LoadingOrChildren>
      </Col>
    </Row>
  );
}

SeminarSearch.propTypes = {
  namespace: PropTypes.oneOf([SEMINARS_NS, AUTHOR_SEMINARS_NS]),
  baseQuery: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  loadingAggregations: PropTypes.bool.isRequired,
  selectedTimezone: PropTypes.string,
  enableDateFilter: PropTypes.bool,
  embedded: PropTypes.bool,
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

  selectedTimezone: state.search.getIn([
    'namespaces',
    namespace,
    'query',
    'timezone',
  ])
});

export default connect(stateToProps)(SeminarSearch);
