import React from 'react';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Switch, Redirect } from 'react-router-dom';
import { ERRORS } from '../routes';

function SafeSwitch({
  children,
  ...switchProps
}: any) {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Switch {...switchProps}>
      {children}
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Redirect to={ERRORS} />
    </Switch>
  );
}

SafeSwitch.propTypes = {
  ...Switch.propTypes,
};

export default SafeSwitch;
