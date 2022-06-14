// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { connect } from 'react-redux';

import { fetchLiteratureReferences } from '../../actions/literature';
import ReferenceList from '../../literature/components/ReferenceList';
import { LITERATURE_REFERENCES_NS } from '../../search/constants';
import { convertSomeImmutablePropsToJS } from '../immutableToJS';
import { castPropToNumber } from '../utils';

const stateToProps = (state: any) => ({
  loading: state.literature.get('loadingReferences'),
  references: state.literature.get('references'),
  error: state.literature.get('errorReferences'),
  total: state.literature.get('totalReferences'),

  query: {
    size: castPropToNumber(
      state.search.getIn([
        'namespaces',
        LITERATURE_REFERENCES_NS,
        'query',
        'size',
      ])
    ),
    page: castPropToNumber(state.literature.get('pageReferences')),
  },

  baseQuery: state.search.getIn([
    'namespaces',
    LITERATURE_REFERENCES_NS,
    'baseQuery',
  ])
});

// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'dispatch' implicitly has an 'any' type.
const dispatchToProps = (dispatch, ownProps) => ({
  onQueryChange(query: any) {
    const { recordId } = ownProps;
    dispatch(fetchLiteratureReferences(recordId, query));
  }
});

export default connect(
  stateToProps,
  dispatchToProps
)(convertSomeImmutablePropsToJS(ReferenceList, ['query']));
