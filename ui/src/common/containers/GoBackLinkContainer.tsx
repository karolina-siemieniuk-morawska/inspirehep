// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { connect } from 'react-redux';
import { goBack } from 'connected-react-router';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/GoBackLink' was resolved to ... Remove this comment to see the full error message
import GoBackLink from '../components/GoBackLink';

export const dispatchToProps = (dispatch: any) => ({
  onClick() {
    dispatch(goBack());
  }
});

export default connect(null, dispatchToProps)(GoBackLink);
