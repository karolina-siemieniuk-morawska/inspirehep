import React, { Component } from 'react';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import PropTypes from 'prop-types';

class HelpIconTooltip extends Component {
  render() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'help' does not exist on type 'Readonly<{... Remove this comment to see the full error message
    const { help } = this.props;
    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Tooltip title={help}>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <QuestionCircleOutlined />
      </Tooltip>
    );
  }
}

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
HelpIconTooltip.propTypes = {
  help: PropTypes.node,
};

// @ts-expect-error ts-migrate(2339) FIXME: Property 'defaultProps' does not exist on type 'ty... Remove this comment to see the full error message
HelpIconTooltip.defaultProps = {
  help: null,
};

export default HelpIconTooltip;
