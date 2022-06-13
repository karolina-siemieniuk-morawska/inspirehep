import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './IconText.scss';

class IconText extends Component {
  render() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'icon' does not exist on type 'Readonly<{... Remove this comment to see the full error message
    const { icon, text } = this.props;
    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <span className="__IconText__">
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <span className="icon">{icon}</span>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <span className="v-top">{text}</span>
      </span>
    );
  }
}

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
IconText.propTypes = {
  icon: PropTypes.node.isRequired,
  text: PropTypes.node.isRequired,
};

export default IconText;
