// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { connect } from 'react-redux';

// @ts-expect-error ts-migrate(6142) FIXME: Module './Footer' was resolved to '/Users/karolina... Remove this comment to see the full error message
import Footer from './Footer';
import { isCataloger } from '../../authorization';

const stateToProps = (state: any) => ({
  isCatalogerLoggedIn: isCataloger(state.user.getIn(['data', 'roles']))
});

export default connect(stateToProps)(Footer);
