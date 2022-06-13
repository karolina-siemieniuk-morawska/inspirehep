import React, { Component } from 'react';

import './BetaRibbon.scss';

class BetaRibbon extends Component {
  render() {
    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div className="__BetaRibbon__">
        Beta
      </div>
    );
  }
}

export default BetaRibbon;
