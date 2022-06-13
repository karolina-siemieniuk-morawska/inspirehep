import React, { Component } from 'react';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Route } from 'react-router-dom';

import { CONFERENCES } from '../common/routes';

// @ts-expect-error ts-migrate(6142) FIXME: Module './containers/SearchPageContainer' was reso... Remove this comment to see the full error message
import SearchPageContainer from './containers/SearchPageContainer';
// @ts-expect-error ts-migrate(6142) FIXME: Module './containers/DetailPageContainer' was reso... Remove this comment to see the full error message
import DetailPageContainer from './containers/DetailPageContainer';

class Conferences extends Component {
  render() {
    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div className="w-100">
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Route exact path={CONFERENCES} component={SearchPageContainer} />
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Route
          exact
          path={`${CONFERENCES}/:id`}
          component={DetailPageContainer}
        />
      </div>
    );
  }
}

export default Conferences;
