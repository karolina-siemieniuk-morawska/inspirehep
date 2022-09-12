import { connect } from 'react-redux';

import AssignOwnProfileAction from '../components/AssignOwnProfileAction';
import { assignOwnPapers, unassignOwnPapers } from '../../actions/authors';

const stateToProps = (state) => ({
  disabled: state.authors.get('publicationSelection').size === 0,
  disabledAssignAction:
    state.authors.get('publicationSelectionClaimed').size > 0 &&
    state.authors.get('publicationSelectionUnclaimed').size === 0,
  numberOfSelected: state.authors.get('publicationSelection').size,
  claimingTooltip: 'All selected papers are already claimed',
});

const dispatchToProps = (dispatch) => ({
  onAssign({ from, to }) {
    dispatch(assignOwnPapers({ from, to }));
  },
  onUnassign({ from }) {
    dispatch(unassignOwnPapers({ from }));
  },
});

export default connect(stateToProps, dispatchToProps)(AssignOwnProfileAction);
