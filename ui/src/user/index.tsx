import React, { Component } from 'react';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Redirect } from 'react-router-dom';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../common/components/RouteOrRedirect' was ... Remove this comment to see the full error message
import RouteOrRedirect from '../common/components/RouteOrRedirect';
// @ts-expect-error ts-migrate(6142) FIXME: Module './containers/LoginPageContainer' was resol... Remove this comment to see the full error message
import LoginPageContainer from './containers/LoginPageContainer';
// @ts-expect-error ts-migrate(6142) FIXME: Module './components/ProfilePage' was resolved to ... Remove this comment to see the full error message
import ProfilePage from './components/ProfilePage';
// @ts-expect-error ts-migrate(6142) FIXME: Module './containers/SignUpPageContainer' was reso... Remove this comment to see the full error message
import SignUpPageContainer from './containers/SignUpPageContainer';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../common/PrivateRoute' was resolved to '/... Remove this comment to see the full error message
import PrivateRoute from '../common/PrivateRoute';
// @ts-expect-error ts-migrate(6142) FIXME: Module './containers/LocalLoginPageContainer' was ... Remove this comment to see the full error message
import LocalLoginPageContainer from './containers/LocalLoginPageContainer';
import {
  USER_LOGIN,
  USER_SIGNUP,
  USER_LOCAL_LOGIN,
  USER_PROFILE,
  USER,
  HOME,
} from '../common/routes';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../common/components/SafeSwitch' was resol... Remove this comment to see the full error message
import SafeSwitch from '../common/components/SafeSwitch';

class User extends Component {
  render() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'loggedIn' does not exist on type 'Readon... Remove this comment to see the full error message
    const { loggedIn, previousUrl } = this.props;
    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div className="w-100">
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <SafeSwitch>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Redirect exact from={USER} to={USER_PROFILE} />
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <RouteOrRedirect
            exact
            path={USER_LOGIN}
            condition={!loggedIn}
            component={LoginPageContainer}
            redirectTo={previousUrl}
          />
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <RouteOrRedirect
            exact
            path={USER_SIGNUP}
            condition={!loggedIn}
            component={SignUpPageContainer}
            redirectTo={HOME}
          />
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <RouteOrRedirect
            exact
            path={USER_LOCAL_LOGIN}
            condition={!loggedIn}
            component={LocalLoginPageContainer}
            redirectTo={previousUrl}
          />
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <PrivateRoute exact path={USER_PROFILE} component={ProfilePage} />
        </SafeSwitch>
      </div>
    );
  }
}

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
User.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  previousUrl: PropTypes.string.isRequired,
};

const stateToProps = (state: any) => ({
  loggedIn: state.user.get('loggedIn'),
  previousUrl: state.router.location.previousUrl
});

export default connect(stateToProps)(User);
