// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { connect } from 'react-redux';

import {
  setPublicationSelection,
  clearPublicationSelection,
  setAssignDrawerVisibility,
  assignPapers,
} from '../../actions/authors';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/AssignAction' was resolved t... Remove this comment to see the full error message
import AssignAction from '../components/AssignAction';

export const dispatchToProps = (
  // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'dispatch' implicitly has an 'any' type.
  dispatch,
  {
    recordId
  }: any
) => ({
  onAssignToAnotherAuthor() {
    dispatch(clearPublicationSelection());
    dispatch(setPublicationSelection([recordId], true));
    dispatch(setAssignDrawerVisibility(true));
  },

  onAssign({
    from,
    to
  }: any) {
    dispatch(clearPublicationSelection());
    dispatch(setPublicationSelection([recordId], true));
    dispatch(assignPapers({ from, to }));
  }
});

export default connect(null, dispatchToProps)(AssignAction);
