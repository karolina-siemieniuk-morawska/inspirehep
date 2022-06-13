// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { connect } from 'react-redux';

import { setLiteratureSelection } from '../../actions/literature';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/LiteratureSelectAll' was res... Remove this comment to see the full error message
import LiteratureSelectAll from '../components/LiteratureSelectAll';
import { LITERATURE_NS } from '../../search/constants';

const stateToProps = (state: any) => ({
  publications: state.search.getIn(['namespaces', LITERATURE_NS, 'results']),
  selection: state.literature.get('literatureSelection')
});

const dispatchToProps = (dispatch: any) => ({
  onChange(literatureIds: any, selected: any) {
    dispatch(setLiteratureSelection(literatureIds, selected));
  }
});

export default connect(stateToProps, dispatchToProps)(LiteratureSelectAll);
