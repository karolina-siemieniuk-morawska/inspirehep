import React, { Component } from 'react';
import PropTypes from 'prop-types';
// @ts-expect-error ts-migrate(6142) FIXME: Module './HelpIconTooltip' was resolved to '/Users... Remove this comment to see the full error message
import HelpIconTooltip from './HelpIconTooltip';

class LabelWithHelp extends Component {
  render() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'help' does not exist on type 'Readonly<{... Remove this comment to see the full error message
    const { help, label } = this.props;
    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <span>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        {label} {<HelpIconTooltip help={help} />}
      </span>
    );
  }
}

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
LabelWithHelp.propTypes = {
  label: PropTypes.node.isRequired,
  help: PropTypes.node.isRequired,
};

export default LabelWithHelp;
