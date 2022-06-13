import React from 'react';
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
import { INSTITUTIONS_NS } from '../../search/constants';
import { SEARCH_PAGE_GUTTER } from '../../common/constants';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/InstitutionItem' was resolve... Remove this comment to see the full error message
import InstitutionItem from '../components/InstitutionItem';

const META_DESCRIPTION = 'Find institutions in High Energy Physics';
const TITLE = 'Institutions Search';

function renderInstitutionItem(result: any) {
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return <InstitutionItem metadata={result.get('metadata')} />;
}

function InstitutionSearchPage({
  loading
}: any) {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <DocumentHead title={TITLE} description={META_DESCRIPTION} />
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Row
        className="mt3"
        gutter={SEARCH_PAGE_GUTTER}
        // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
        type="flex"
        justify="center"
      >
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Col xs={24} lg={16} xl={16} xxl={14}>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <LoadingOrChildren loading={loading}>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Row>
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Col>
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <NumberOfResultsContainer namespace={INSTITUTIONS_NS} />
              </Col>
            </Row>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Row>
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Col span={24}>
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <ResultsContainer
                  namespace={INSTITUTIONS_NS}
                  renderItem={renderInstitutionItem}
                />
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <PaginationContainer namespace={INSTITUTIONS_NS} />
              </Col>
            </Row>
          </LoadingOrChildren>
        </Col>
      </Row>
    </>
  );
}

InstitutionSearchPage.propTypes = {
  loading: PropTypes.bool.isRequired,
};

const stateToProps = (state: any) => ({
  loading: state.search.getIn(['namespaces', INSTITUTIONS_NS, 'loading'])
});

export default connect(stateToProps)(InstitutionSearchPage);
