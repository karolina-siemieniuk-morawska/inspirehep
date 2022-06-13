// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { connect } from 'react-redux';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/ToolAction' was resolved to ... Remove this comment to see the full error message
import ToolAction from '../components/ToolAction';
import {
  setAssignDrawerVisibility,
  exportToCds,
} from '../../actions/literature';

import { MAX_BULK_ASSIGN } from '../constants';

const stateToProps = (state: any) => {
  const literatureSelectionSize = state.literature.get('literatureSelection')
    .size;
  return {
    selectionSize: literatureSelectionSize,
    disabledBulkAssign:
      literatureSelectionSize === 0 ||
      literatureSelectionSize > MAX_BULK_ASSIGN,
  };
};

const dispatchToProps = (dispatch: any) => ({
  onAssignToConference() {
    dispatch(setAssignDrawerVisibility(true));
  },

  onExportToCds() {
    dispatch(exportToCds());
  }
});

export default connect(stateToProps, dispatchToProps)(ToolAction);
