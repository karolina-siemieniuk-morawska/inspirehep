// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { connect } from 'react-redux';

import { fetchCitationSummary } from '../../actions/citations';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/ExcludeSelfCitations' was re... Remove this comment to see the full error message
import ExcludeSelfCitations from '../components/ExcludeSelfCitations';
import { EXCLUDE_SELF_CITATIONS_PREFERENCE } from '../../reducers/user';
import { appendQueryToLocationSearch } from '../../actions/router';
import { setPreference } from '../../actions/user';
import {
  CITATION_COUNT_PARAM,
  CITATION_COUNT_WITHOUT_SELF_CITATIONS_PARAM,
} from '../../common/constants';
import { searchQueryUpdate } from '../../actions/search';

export const UI_EXCLUDE_SELF_CITATIONS_PARAM = 'ui-exclude-self-citations';

function selfCitationsExcludedOnLocation(state: any) {
  return state.router.location.query[UI_EXCLUDE_SELF_CITATIONS_PARAM] != null;
}

function selfCitationsExcludedOnUserPreferences(state: any) {
  return state.user.getIn(
    ['preferences', EXCLUDE_SELF_CITATIONS_PREFERENCE],
    false
  );
}

export function shouldExcludeSelfCitations(state: any) {
  return (
    selfCitationsExcludedOnLocation(state) ||
    selfCitationsExcludedOnUserPreferences(state)
  );
}

const stateToProps = (state: any) => ({
  excluded: selfCitationsExcludedOnLocation(state),
  preference: selfCitationsExcludedOnUserPreferences(state)
});

const dispatchToProps = (
  // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'dispatch' implicitly has an 'any' type.
  dispatch,
  {
    namespace
  }: any
) => ({
  onChange(excluded: any) {
    dispatch(setPreference(EXCLUDE_SELF_CITATIONS_PREFERENCE, excluded));
    dispatch(
      searchQueryUpdate(namespace, {
        [CITATION_COUNT_PARAM]: undefined,
        [CITATION_COUNT_WITHOUT_SELF_CITATIONS_PARAM]: undefined,
      })
    );
    if (!excluded) {
      dispatch(
        appendQueryToLocationSearch({
          [UI_EXCLUDE_SELF_CITATIONS_PARAM]: undefined,
        })
      );
    }
    dispatch(fetchCitationSummary(namespace));
  },

  onPreferenceChange(preference: any) {
    if (preference) {
      dispatch(
        appendQueryToLocationSearch({ [UI_EXCLUDE_SELF_CITATIONS_PARAM]: true })
      );
    }
  }
});

export default connect(stateToProps, dispatchToProps)(ExcludeSelfCitations);
