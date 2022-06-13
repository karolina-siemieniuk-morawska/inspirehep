import React, { Component } from 'react';
import { Row } from 'antd';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Route, Redirect, Switch } from 'react-router-dom';

import {
  ERROR_404,
  ERROR_401,
  ERROR_500,
  ERROR_NETWORK,
} from '../common/routes';
// @ts-expect-error ts-migrate(6142) FIXME: Module './components/Error404' was resolved to '/U... Remove this comment to see the full error message
import Error404 from './components/Error404';
// @ts-expect-error ts-migrate(6142) FIXME: Module './components/Error401' was resolved to '/U... Remove this comment to see the full error message
import Error401 from './components/Error401';
// @ts-expect-error ts-migrate(6142) FIXME: Module './components/Error500' was resolved to '/U... Remove this comment to see the full error message
import Error500 from './components/Error500';
// @ts-expect-error ts-migrate(6142) FIXME: Module './components/ErrorNetwork' was resolved to... Remove this comment to see the full error message
import ErrorNetwork from './components/ErrorNetwork';

class Errors extends Component {
  render() {
    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Row className="w-100 h-100" type="flex" justify="center" align="middle">
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Switch>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Route exact path={ERROR_404} component={Error404} />
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Route exact path={ERROR_401} component={Error401} />
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Route exact path={ERROR_500} component={Error500} />
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Route exact path={ERROR_NETWORK} component={ErrorNetwork} />
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Redirect to={ERROR_404} />
        </Switch>
      </Row>
    );
  }
}

export default Errors;
