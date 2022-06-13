// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { connect } from 'react-redux';
import { userSignUp } from '../../actions/user';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/immutableToJS' was resolved t... Remove this comment to see the full error message
import { convertAllImmutablePropsToJS } from '../../common/immutableToJS';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/SignUpPage' was resolved to ... Remove this comment to see the full error message
import SignUpPage from '../components/SignUpPage';

const stateToProps = (state: any) => ({
  error: state.user.get('signUpError'),
  loading: state.user.get('isSigningUp')
});

export const dispatchToProps = (dispatch: any) => ({
  onSubmit(data: any) {
    dispatch(userSignUp(data));
  }
});

export default connect(stateToProps, dispatchToProps)(
  convertAllImmutablePropsToJS(SignUpPage)
);
