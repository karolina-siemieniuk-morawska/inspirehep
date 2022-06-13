import React, { useMemo } from 'react';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../../literature/containers/LiteratureSear... Remove this comment to see the full error message
import LiteratureSearchContainer from '../../literature/containers/LiteratureSearchContainer';
import { AUTHOR_PUBLICATIONS_NS } from '../../search/constants';
import { isCataloger, isSuperUser } from '../../common/authorization';
import AssignViewContext from '../AssignViewContext';
import AssignViewOwnProfileContext from '../assignViewOwnProfileContext';
import AssignViewDifferentProfileContext from '../assignViewDifferentProfileContext';
import AssignViewNoProfileContext from '../assignViewNoProfileContext';
import AssignViewNotLoggedInContext from '../assignViewNotLoggedInContext';

// @ts-expect-error ts-migrate(6142) FIXME: Module './AssignDrawerContainer' was resolved to '... Remove this comment to see the full error message
import AssignDrawerContainer from './AssignDrawerContainer';
import { getConfigFor } from '../../common/config';

export function AuthorPublications({
  authorFacetName,
  assignView,
  assignViewOwnProfile,
  assignViewDifferentProfile,
  assignViewNoProfile,
  numberOfSelected,
  assignViewNotLoggedIn
}: any) {
  const baseQuery = useMemo(
    () => ({
      author: [authorFacetName],
    }),
    [authorFacetName]
  );
  const baseAggregationsQuery = useMemo(
    () => ({
      author_recid: authorFacetName,
    }),
    [authorFacetName]
  );

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <AssignViewNotLoggedInContext.Provider value={assignViewNotLoggedIn}>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <AssignViewNoProfileContext.Provider value={assignViewNoProfile}>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <AssignViewDifferentProfileContext.Provider
          value={assignViewDifferentProfile}
        >
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <AssignViewOwnProfileContext.Provider value={assignViewOwnProfile}>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <AssignViewContext.Provider value={assignView}>
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <LiteratureSearchContainer
                namespace={AUTHOR_PUBLICATIONS_NS}
                baseQuery={baseQuery}
                baseAggregationsQuery={baseAggregationsQuery}
                noResultsTitle="0 Research works"
                embedded
                numberOfSelected={numberOfSelected}
              />
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              {assignView && <AssignDrawerContainer />}
            </AssignViewContext.Provider>
          </AssignViewOwnProfileContext.Provider>
        </AssignViewDifferentProfileContext.Provider>
      </AssignViewNoProfileContext.Provider>
    </AssignViewNotLoggedInContext.Provider>
  );
}

function enableDifferentProfileView(state: any) {
  if (state.user.getIn(['data', 'recid'])) {
    return true;
  }
  return false;
}

AuthorPublications.propTypes = {
  authorFacetName: PropTypes.string.isRequired,
  assignView: PropTypes.bool,
  assignViewOwnProfile: PropTypes.bool,
  numberOfSelected: PropTypes.number.isRequired,
};

const stateToProps = (state: any) => ({
  authorFacetName: state.authors.getIn([
    'data',
    'metadata',
    'facet_author_name',
  ]),

  assignView:
    isSuperUser(state.user.getIn(['data', 'roles'])) ||
    isCataloger(state.user.getIn(['data', 'roles'])),

  assignViewOwnProfile:
    state.authors.getIn(['data', 'metadata', 'can_edit']) &&
    getConfigFor('ASSIGN_OWN_PROFILE_UI_FEATURE_FLAG'),

  assignViewDifferentProfile:
    enableDifferentProfileView(state) &&
    getConfigFor('ASSIGN_DIFFERENT_PROFILE_UI_FEATURE_FLAG'),

  assignViewNoProfile:
    state.user.get('loggedIn') &&
    getConfigFor('ASSIGN_NO_PROFILE_UI_FEATURE_FLAG'),

  assignViewNotLoggedIn:
    !state.user.get('loggedIn') &&
    getConfigFor('ASSIGN_NOT_LOGGED_IN_FEATURE_FLAG'),

  numberOfSelected: state.authors.get('publicationSelection').size
});

export default connect(stateToProps)(AuthorPublications);
