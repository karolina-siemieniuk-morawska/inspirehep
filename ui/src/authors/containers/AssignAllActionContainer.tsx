// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { connect } from 'react-redux';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/AssignAction' was resolved t... Remove this comment to see the full error message
import AssignAction from '../components/AssignAction';
import { setAssignDrawerVisibility, assignPapers } from '../../actions/authors';

const stateToProps = (state: any) => ({
  disabled: state.authors.get('publicationSelection').size === 0,
  numberOfSelected: state.authors.get('publicationSelection').size,
  claimingTooltip: 'All selected papers are already claimed'
});

const dispatchToProps = (dispatch: any) => ({
  onAssignToAnotherAuthor() {
    dispatch(setAssignDrawerVisibility(true));
  },

  onAssign({
    from,
    to
  }: any) {
    dispatch(assignPapers({ from, to }));
  }
});

export default connect(stateToProps, dispatchToProps)(AssignAction);
