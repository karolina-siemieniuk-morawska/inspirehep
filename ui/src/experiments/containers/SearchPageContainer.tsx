import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { connect } from 'react-redux';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/containers/PaginationContaine... Remove this comment to see the full error message
import PaginationContainer from '../../common/containers/PaginationContainer';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/containers/ResultsContainer' ... Remove this comment to see the full error message
import ResultsContainer from '../../common/containers/ResultsContainer';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/containers/NumberOfResultsCon... Remove this comment to see the full error message
import NumberOfResultsContainer from '../../common/containers/NumberOfResultsContainer';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/LoadingOrChildren'... Remove this comment to see the full error message
import LoadingOrChildren from '../../common/components/LoadingOrChildren';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/DocumentHead' was ... Remove this comment to see the full error message
import DocumentHead from '../../common/components/DocumentHead';
import { SEARCH_PAGE_GUTTER } from '../../common/constants';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/ExperimentItem' was resolved... Remove this comment to see the full error message
import ExperimentItem from '../components/ExperimentItem';
import { EXPERIMENTS_NS } from '../../search/constants';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/containers/AggregationFilters... Remove this comment to see the full error message
import AggregationFiltersContainer from '../../common/containers/AggregationFiltersContainer';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/ResponsiveView' wa... Remove this comment to see the full error message
import ResponsiveView from '../../common/components/ResponsiveView';
// @ts-expect-error ts-migrate(2691) FIXME: An import path cannot end with a '.tsx' extension.... Remove this comment to see the full error message
import DrawerHandle from '../../common/components/DrawerHandle.tsx';

const META_DESCRIPTION = 'Find experiments in High Energy Physics';
const TITLE = 'Experiments Search';

function renderExperimentItem(result: any) {
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return <ExperimentItem metadata={result.get('metadata')} />;
}

function ExperimentSearchPage({
  loading,
  loadingAggregations
}: any) {
  const renderAggregations = useCallback(
    () => (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <LoadingOrChildren loading={loadingAggregations}>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <AggregationFiltersContainer namespace={EXPERIMENTS_NS} />
      </LoadingOrChildren>
    ),
    [loadingAggregations]
  );

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <DocumentHead title={TITLE} description={META_DESCRIPTION} />
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Row>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Col xs={24} lg={22} xl={20} xxl={18}>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Row className="mt3" gutter={SEARCH_PAGE_GUTTER} justify="start">
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
                <Row>
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <Col xs={24} lg={12}>
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <NumberOfResultsContainer namespace={EXPERIMENTS_NS} />
                  </Col>
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <Col xs={12} lg={0}>
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
                </Row>
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Row>
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <Col span={24}>
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <ResultsContainer
                      namespace={EXPERIMENTS_NS}
                      renderItem={renderExperimentItem}
                    />
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <PaginationContainer namespace={EXPERIMENTS_NS} />
                  </Col>
                </Row>
              </LoadingOrChildren>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

ExperimentSearchPage.propTypes = {
  loading: PropTypes.bool.isRequired,
  loadingAggregations: PropTypes.bool.isRequired,
};

const stateToProps = (state: any) => ({
  loading: state.search.getIn(['namespaces', EXPERIMENTS_NS, 'loading']),

  loadingAggregations: state.search.getIn([
    'namespaces',
    EXPERIMENTS_NS,
    'loadingAggregations',
  ])
});

export default connect(stateToProps)(ExperimentSearchPage);
