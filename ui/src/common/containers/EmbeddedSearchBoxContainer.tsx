// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { connect } from 'react-redux';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/EmbeddedSearchBox' was resol... Remove this comment to see the full error message
import EmbeddedSearchBox from '../components/EmbeddedSearchBox';
import { searchQueryUpdate } from '../../actions/search';

const dispatchToProps = (
  // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'dispatch' implicitly has an 'any' type.
  dispatch,
  {
    namespace
  }: any
) => ({
  onSearch(value: any) {
    dispatch(searchQueryUpdate(namespace, { q: value }));
  }
});

export default connect(null, dispatchToProps)(EmbeddedSearchBox);
