import React, { Component } from 'react';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Route, Redirect } from 'react-router-dom';

// @ts-expect-error ts-migrate(6142) FIXME: Module './containers/DashboardPageContainer' was r... Remove this comment to see the full error message
import DashboardPageContainer from './containers/DashboardPageContainer';
// @ts-expect-error ts-migrate(6142) FIXME: Module './containers/ExceptionsPageContainer' was ... Remove this comment to see the full error message
import ExceptionsPageContainer from './containers/ExceptionsPageContainer';
import InspectPageContainer from './containers/InspectPageContainer';
import {
  HOLDINGPEN_DASHBOARD,
  HOLDINGPEN_EXCEPTIONS,
  HOLDINGPEN_INSPECT,
  HOLDINGPEN,
} from '../common/routes';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../common/components/SafeSwitch' was resol... Remove this comment to see the full error message
import SafeSwitch from '../common/components/SafeSwitch';

class Holdingpen extends Component {
  render() {
    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div className="w-100">
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <SafeSwitch>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Redirect exact from={HOLDINGPEN} to={HOLDINGPEN_DASHBOARD} />
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Route
            exact
            path={HOLDINGPEN_DASHBOARD}
            component={DashboardPageContainer}
          />
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Route
            exact
            path={HOLDINGPEN_EXCEPTIONS}
            component={ExceptionsPageContainer}
          />
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Route
            exact
            path={`${HOLDINGPEN_INSPECT}/:id`}
            component={InspectPageContainer}
          />
        </SafeSwitch>
      </div>
    );
  }
}

export default Holdingpen;
