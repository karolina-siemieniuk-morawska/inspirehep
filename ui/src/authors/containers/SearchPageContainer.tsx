import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { connect } from 'react-redux';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/AuthorResultItem' was resolv... Remove this comment to see the full error message
import AuthorResultItem from '../components/AuthorResultItem';
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
import { AUTHORS_NS } from '../../search/constants';
import { SEARCH_PAGE_GUTTER } from '../../common/constants';

const META_DESCRIPTION = 'Find authors in High Energy Physics';
const TITLE = 'Authors Search';

class SearchPage extends Component {
  static renderAuthorItem(result: any, isCatalogerLoggedIn: any) {
    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <AuthorResultItem
        // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
        metadata={result.get('metadata')}
        isCatalogerLoggedIn={isCatalogerLoggedIn}
      />
    );
  }

  render() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'loading' does not exist on type 'Readonl... Remove this comment to see the full error message
    const { loading } = this.props;
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
                  <NumberOfResultsContainer namespace={AUTHORS_NS} />
                </Col>
              </Row>
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Row>
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Col span={24}>
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <ResultsContainer
                    namespace={AUTHORS_NS}
                    renderItem={SearchPage.renderAuthorItem}
                  />
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <PaginationContainer namespace={AUTHORS_NS} />
                </Col>
              </Row>
            </LoadingOrChildren>
          </Col>
        </Row>
      </>
    );
  }
}

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
SearchPage.propTypes = {
  loading: PropTypes.bool.isRequired,
};

const stateToProps = (state: any) => ({
  loading: state.search.getIn(['namespaces', AUTHORS_NS, 'loading'])
});

export default connect(stateToProps)(SearchPage);
