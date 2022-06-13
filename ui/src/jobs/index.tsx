import React, { Component } from 'react';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Route } from 'react-router-dom';

import { JOBS } from '../common/routes';
import './index.scss';
// @ts-expect-error ts-migrate(6142) FIXME: Module './containers/SearchPageContainer' was reso... Remove this comment to see the full error message
import SearchPageContainer from './containers/SearchPageContainer';
// @ts-expect-error ts-migrate(6142) FIXME: Module './containers/DetailPageContainer' was reso... Remove this comment to see the full error message
import DetailPageContainer from './containers/DetailPageContainer';

class Jobs extends Component {
  render() {
    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div className="__Jobs__">
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Route exact path={JOBS} component={SearchPageContainer} />
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Route exact path={`${JOBS}/:id`} component={DetailPageContainer} />
      </div>
    );
  }
}

export default Jobs;
