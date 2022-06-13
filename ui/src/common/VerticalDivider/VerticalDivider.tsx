import React, { Component } from 'react';
import { Divider } from 'antd';

import './VerticalDivider.scss';

class VerticalDivider extends Component {
  render() {
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return <Divider type="vertical" className="__VerticalDivider__" />;
  }
}

export default VerticalDivider;
