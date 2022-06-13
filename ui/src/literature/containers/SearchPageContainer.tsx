import React from 'react';
import { Row, Col } from 'antd';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// @ts-expect-error ts-migrate(6142) FIXME: Module './LiteratureSearchContainer' was resolved ... Remove this comment to see the full error message
import LiteratureSearchContainer from './LiteratureSearchContainer';
import { LITERATURE_NS } from '../../search/constants';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/DocumentHead' was ... Remove this comment to see the full error message
import DocumentHead from '../../common/components/DocumentHead';
// @ts-expect-error ts-migrate(2691) FIXME: An import path cannot end with a '.tsx' extension.... Remove this comment to see the full error message
import ExternalLink from '../../common/components/ExternalLink.tsx';
import { PAPER_SEARCH_URL } from '../../common/constants';
import AssignViewContext from '../AssignViewContext';
// @ts-expect-error ts-migrate(6142) FIXME: Module './AssignConferencesDrawerContainer' was re... Remove this comment to see the full error message
import AssignConferencesDrawerContainer from './AssignConferencesDrawerContainer';
import { isCataloger, isSuperUser } from '../../common/authorization';

const META_DESCRIPTION =
  'Find articles, conference papers, proceedings, books, theses, reviews, lectures and reports in High Energy Physics';
const TITLE = 'Literature Search';

export function SearchPage({
  assignView,
  numberOfSelected
}: any) {
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
          <AssignViewContext.Provider value={assignView}>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <LiteratureSearchContainer
              namespace={LITERATURE_NS}
              noResultsTitle="0 Results"
              noResultsDescription={
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <em>
                  Oops! You might want to check out our{' '}
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <ExternalLink href={PAPER_SEARCH_URL}>
                    search tips
                  </ExternalLink>
                  .
                </em>
              }
              numberOfSelected={numberOfSelected}
            />
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            {assignView && <AssignConferencesDrawerContainer />}
          </AssignViewContext.Provider>
        </Col>
      </Row>
    </>
  );
}

SearchPage.propTypes = {
  assignView: PropTypes.bool.isRequired,
  numberOfSelected: PropTypes.number.isRequired,
};

const stateToProps = (state: any) => ({
  assignView:
    isSuperUser(state.user.getIn(['data', 'roles'])) ||
    isCataloger(state.user.getIn(['data', 'roles'])),

  numberOfSelected: state.literature.get('literatureSelection').size
});

const SearchPageContainer = connect(stateToProps)(SearchPage);
export default SearchPageContainer;
