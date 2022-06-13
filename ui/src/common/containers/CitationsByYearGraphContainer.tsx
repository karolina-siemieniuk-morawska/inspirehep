// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { connect } from 'react-redux';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../immutableToJS' was resolved to '/Users/... Remove this comment to see the full error message
import { convertAllImmutablePropsToJS } from '../immutableToJS';
import CitationsByYearGraph from '../components/CitationsByYearGraph';

const stateToProps = (state: any) => ({
  loading: state.citations.get('loadingCitationsByYear'),
  citationsByYear: state.citations.get('byYear'),
  error: state.citations.get('errorCitationsByYear')
});

export default connect(stateToProps)(
  convertAllImmutablePropsToJS(CitationsByYearGraph)
);
