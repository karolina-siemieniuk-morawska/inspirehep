import React, { useEffect } from 'react';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Route } from 'react-router-dom';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { connect } from 'react-redux';
import { Layout } from 'antd';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import Loadable from 'react-loadable';
import PropTypes from 'prop-types';
import { List } from 'immutable';

import './App.scss';
import Header from './common/layouts/Header';
import Footer from './common/layouts/Footer';
// @ts-expect-error ts-migrate(6142) FIXME: Module './common/components/Loading' was resolved ... Remove this comment to see the full error message
import Loading from './common/components/Loading';
// @ts-expect-error ts-migrate(6142) FIXME: Module './common/components/SafeSwitch' was resolv... Remove this comment to see the full error message
import SafeSwitch from './common/components/SafeSwitch';
// @ts-expect-error ts-migrate(6142) FIXME: Module './common/PrivateRoute' was resolved to '/U... Remove this comment to see the full error message
import PrivateRoute from './common/PrivateRoute';

import {
  HOME,
  USER,
  HOLDINGPEN,
  LITERATURE,
  AUTHORS,
  SUBMISSIONS,
  ERRORS,
  JOBS,
  CONFERENCES,
  INSTITUTIONS,
  SEMINARS,
  EXPERIMENTS,
  BIBLIOGRAPHY_GENERATOR,
} from './common/routes';
import UserFeedback from './common/components/UserFeedback';
import { setUserCategoryFromRoles, setClientId } from './tracker';
import { fetchLoggedInUser } from './actions/user';
// @ts-expect-error ts-migrate(6142) FIXME: Module './home' was resolved to '/Users/karolinasi... Remove this comment to see the full error message
import Home from './home';
// @ts-expect-error ts-migrate(6142) FIXME: Module './literature' was resolved to '/Users/karo... Remove this comment to see the full error message
import Literature from './literature';
// @ts-expect-error ts-migrate(6142) FIXME: Module './conferences' was resolved to '/Users/kar... Remove this comment to see the full error message
import Conferences from './conferences';
// @ts-expect-error ts-migrate(6142) FIXME: Module './authors' was resolved to '/Users/karolin... Remove this comment to see the full error message
import Authors from './authors';
// @ts-expect-error ts-migrate(6142) FIXME: Module './jobs' was resolved to '/Users/karolinasi... Remove this comment to see the full error message
import Jobs from './jobs';
// @ts-expect-error ts-migrate(6142) FIXME: Module './user' was resolved to '/Users/karolinasi... Remove this comment to see the full error message
import User from './user';
// @ts-expect-error ts-migrate(6142) FIXME: Module './errors' was resolved to '/Users/karolina... Remove this comment to see the full error message
import Errors from './errors';
// @ts-expect-error ts-migrate(6142) FIXME: Module './common/containers/GuideModalContainer' w... Remove this comment to see the full error message
import GuideModalContainer from './common/containers/GuideModalContainer';
import { changeGuideModalVisibility } from './actions/ui';
import { getConfigFor } from './common/config';
// @ts-expect-error ts-migrate(6142) FIXME: Module './institutions' was resolved to '/Users/ka... Remove this comment to see the full error message
import Institutions from './institutions';
// @ts-expect-error ts-migrate(6142) FIXME: Module './seminars' was resolved to '/Users/karoli... Remove this comment to see the full error message
import Seminars from './seminars';
// @ts-expect-error ts-migrate(6142) FIXME: Module './experiments' was resolved to '/Users/kar... Remove this comment to see the full error message
import Experiments from './experiments';
// @ts-expect-error ts-migrate(6142) FIXME: Module './bibliographyGenerator/BibliographyGenera... Remove this comment to see the full error message
import BibliographyGeneratorPageContainer from './bibliographyGenerator/BibliographyGeneratorPageContainer';

const Holdingpen$ = Loadable({
  // @ts-expect-error ts-migrate(6142) FIXME: Module './holdingpen' was resolved to '/Users/karo... Remove this comment to see the full error message
  loader: () => import('./holdingpen'),
  loading: Loading,
});
const Submissions$ = Loadable({
  // @ts-expect-error ts-migrate(6142) FIXME: Module './submissions' was resolved to '/Users/kar... Remove this comment to see the full error message
  loader: () => import('./submissions'),
  loading: Loading,
});

function App({
  userRoles,
  dispatch,
  guideModalVisibility
}: any) {
  useEffect(
    () => {
      dispatch(fetchLoggedInUser());
    },
    [dispatch]
  );

  useEffect(
    () => {
      const hasGuideModalBeenDisplayed = guideModalVisibility != null;
      const shouldDisplayGuideOnStart = getConfigFor('DISPLAY_GUIDE_ON_START');
      if (!hasGuideModalBeenDisplayed && shouldDisplayGuideOnStart) {
        setTimeout(() => {
          dispatch(changeGuideModalVisibility(true));
        }, 3000);
      }
    },
    [guideModalVisibility, dispatch]
  );

  useEffect(
    () => {
      setUserCategoryFromRoles(userRoles);
    },
    [userRoles]
  );

  useEffect(() => {
    setClientId();
  }, []);

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Layout className="__App__">
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Header />
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Layout.Content className="content">
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <SafeSwitch id="main">
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Route exact path={HOME} component={Home} />
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Route path={USER} component={User} />
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <PrivateRoute path={HOLDINGPEN} component={Holdingpen$} />
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Route path={LITERATURE} component={Literature} />
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Route path={AUTHORS} component={Authors} />
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Route path={JOBS} component={Jobs} />
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Route path={CONFERENCES} component={Conferences} />
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Route path={INSTITUTIONS} component={Institutions} />
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Route path={SEMINARS} component={Seminars} />
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Route path={EXPERIMENTS} component={Experiments} />
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <PrivateRoute path={SUBMISSIONS} component={Submissions$} />
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Route
            path={BIBLIOGRAPHY_GENERATOR}
            component={BibliographyGeneratorPageContainer}
          />
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Route path={ERRORS} component={Errors} />
        </SafeSwitch>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <UserFeedback />
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <GuideModalContainer />
      </Layout.Content>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Footer />
    </Layout>
  );
}

App.propTypes = {
  guideModalVisibility: PropTypes.bool,
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'typeof List' is not assignable t... Remove this comment to see the full error message
  userRoles: PropTypes.instanceOf(List).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const stateToProps = (state: any) => ({
  guideModalVisibility: state.ui.get('guideModalVisibility'),
  userRoles: state.user.getIn(['data', 'roles'])
});

const dispatchToProps = (dispatch: any) => ({
  dispatch
});

export default connect(stateToProps, dispatchToProps)(App);
