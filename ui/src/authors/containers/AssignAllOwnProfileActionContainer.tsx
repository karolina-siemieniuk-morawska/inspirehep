// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { connect } from 'react-redux';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/AssignOwnProfileAction' was ... Remove this comment to see the full error message
import AssignOwnProfileAction from '../components/AssignOwnProfileAction';
import { assignOwnPapers } from '../../actions/authors';

const stateToProps = (state: any) => ({
  disabled: state.authors.get('publicationSelection').size === 0,

  disabledAssignAction:
    state.authors.get('publicationSelectionClaimed').size > 0 &&
    state.authors.get('publicationSelectionUnclaimed').size === 0,

  numberOfSelected: state.authors.get('publicationSelection').size,
  claimingTooltip: 'All selected papers are already claimed'
});

const dispatchToProps = (dispatch: any) => ({
  onAssign({
    from,
    to,
    isUnassignAction
  }: any) {
    dispatch(assignOwnPapers({ from, to, isUnassignAction }));
  }
});

export default connect(stateToProps, dispatchToProps)(AssignOwnProfileAction);
