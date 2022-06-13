// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { connect } from 'react-redux';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/SearchScopeSelect' was resol... Remove this comment to see the full error message
import SearchScopeSelect from '../components/SearchScopeSelect';
import { changeSearchBoxNamespace } from '../../actions/search';

const stateToProps = (state: any) => ({
  searchScopeName: state.search.get('searchBoxNamespace')
});

export const dispatchToProps = (dispatch: any) => ({
  onSearchScopeChange(scope: any) {
    dispatch(changeSearchBoxNamespace(scope));
  }
});

// TODO: rename it SearchBoxNamespaceSelect (and the props)
export default connect(stateToProps, dispatchToProps)(SearchScopeSelect);
