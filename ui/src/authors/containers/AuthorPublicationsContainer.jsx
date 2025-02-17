import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import LiteratureSearchContainer from '../../literature/containers/LiteratureSearchContainer';
import { AUTHOR_PUBLICATIONS_NS } from '../../search/constants';
import { isCataloger, isSuperUser } from '../../common/authorization';
import AssignViewContext from '../AssignViewContext';
import AssignViewOwnProfileContext from '../assignViewOwnProfileContext';
import AssignViewDifferentProfileContext from '../assignViewDifferentProfileContext';
import AssignViewNoProfileContext from '../assignViewNoProfileContext';

import AssignDrawerContainer from './AssignDrawerContainer';
import { getConfigFor } from '../../common/config';

export function AuthorPublications({
  authorFacetName,
  assignView,
  assignViewOwnProfile,
  assignViewDifferentProfile,
  assignViewNoProfile,
}) {
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
    <AssignViewNoProfileContext.Provider value={assignViewNoProfile}>
      <AssignViewDifferentProfileContext.Provider
        value={assignViewDifferentProfile}
      >
        <AssignViewOwnProfileContext.Provider value={assignViewOwnProfile}>
          <AssignViewContext.Provider value={assignView}>
            <LiteratureSearchContainer
              namespace={AUTHOR_PUBLICATIONS_NS}
              baseQuery={baseQuery}
              baseAggregationsQuery={baseAggregationsQuery}
              noResultsTitle="0 Research works"
              embedded
            />
            {assignView && <AssignDrawerContainer />}
          </AssignViewContext.Provider>
        </AssignViewOwnProfileContext.Provider>
      </AssignViewDifferentProfileContext.Provider>
    </AssignViewNoProfileContext.Provider>
  );
}

function enableDifferentProfileView(state) {
  if (state.user.getIn(['data', 'recid'])) {
    return true;
  }
  return false;
}

AuthorPublications.propTypes = {
  authorFacetName: PropTypes.string.isRequired,
  assignView: PropTypes.bool,
  assignViewOwnProfile: PropTypes.bool,
};

const stateToProps = (state) => ({
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
});

export default connect(stateToProps)(AuthorPublications);
