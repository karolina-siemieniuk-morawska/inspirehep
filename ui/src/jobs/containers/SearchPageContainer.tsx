import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
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
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/JobItem' was resolved to '/U... Remove this comment to see the full error message
import JobItem from '../components/JobItem';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/SubscribeJobsModalButton' wa... Remove this comment to see the full error message
import SubscribeJobsModalButton from '../components/SubscribeJobsModalButton';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/DocumentHead' was ... Remove this comment to see the full error message
import DocumentHead from '../../common/components/DocumentHead';
import { JOBS_NS } from '../../search/constants';

const META_DESCRIPTION =
  'Jobs in High-Energy Physics. A listing of academic and research jobs of interest to the community in high energy physics, nuclear physics, accelerator physics and astrophysics.';
const TITLE = 'Jobs Search';

class SearchPage extends Component {
  static renderJobResultItem(result: any) {
    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <JobItem
        // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
        metadata={result.get('metadata')}
        created={result.get('created')}
      />
    );
  }

  static renderSubscribeJobsModalButton() {
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return <SubscribeJobsModalButton />;
  }

  constructor(props: any) {
    super(props);
    this.renderAggregationsDrawer = this.renderAggregationsDrawer.bind(this);
    this.renderAggregations = this.renderAggregations.bind(this);
  }

  renderAggregations() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'loadingAggregations' does not exist on t... Remove this comment to see the full error message
    const { loadingAggregations } = this.props;
    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div className="mt3">
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <LoadingOrChildren loading={loadingAggregations}>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Row type="flex" justify="space-between">
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Col className="f5">Select Job Filters:</Col>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Col>{SearchPage.renderSubscribeJobsModalButton()}</Col>
          </Row>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <AggregationFiltersContainer
            inline
            displayWhenNoResults
            namespace={JOBS_NS}
          />
        </LoadingOrChildren>
      </div>
    );
  }

  renderAggregationsDrawer() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'loadingAggregations' does not exist on t... Remove this comment to see the full error message
    const { loadingAggregations } = this.props;
    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <DrawerHandle className="mt2" handleText="Filter" drawerTitle="Filter">
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <LoadingOrChildren loading={loadingAggregations}>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <AggregationFiltersContainer
            inline
            displayWhenNoResults
            namespace={JOBS_NS}
          />
        </LoadingOrChildren>
      </DrawerHandle>
    );
  }

  // TODO: investigate if it is better to use `Context` to pass namespace rather than props
  render() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'loading' does not exist on type 'Readonl... Remove this comment to see the full error message
    const { loading } = this.props;
    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <DocumentHead title={TITLE} description={META_DESCRIPTION} />
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Row className="bg-white mb3" type="flex" justify="center">
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Col xs={0} lg={16} xl={16} xxl={14}>
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <ResponsiveView min="lg" render={this.renderAggregations} />
            </Col>
          </Row>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Row type="flex" justify="center">
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Col xs={24} lg={16} xl={16} xxl={14}>
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <LoadingOrChildren loading={loading}>
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Row type="flex" align="middle" justify="end">
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <Col xs={12} lg={12}>
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <NumberOfResultsContainer namespace={JOBS_NS} />
                  </Col>
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <Col className="tr" xs={12} lg={0}>
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <ResponsiveView
                      max="md"
                      render={SearchPage.renderSubscribeJobsModalButton}
                    />
                  </Col>
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <Col xs={12} lg={0}>
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <ResponsiveView
                      max="md"
                      render={this.renderAggregationsDrawer}
                    />
                  </Col>
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <Col className="tr" span={12}>
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <SortByContainer namespace={JOBS_NS} />
                  </Col>
                </Row>
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Row>
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <Col span={24}>
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <ResultsContainer
                      namespace={JOBS_NS}
                      renderItem={SearchPage.renderJobResultItem}
                    />
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <PaginationContainer namespace={JOBS_NS} />
                  </Col>
                </Row>
              </LoadingOrChildren>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
SearchPage.propTypes = {
  loading: PropTypes.bool.isRequired,
  loadingAggregations: PropTypes.bool.isRequired,
};

const stateToProps = (state: any) => ({
  loading: state.search.getIn(['namespaces', JOBS_NS, 'loading']),

  loadingAggregations: state.search.getIn([
    'namespaces',
    JOBS_NS,
    'loadingAggregations',
  ])
});

export default connect(stateToProps)(SearchPage);
