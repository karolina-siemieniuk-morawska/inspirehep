import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ReactLatex from 'react-latex-next';
import 'katex/dist/katex.min.css';

class Latex extends Component {
  render() {
    const { children } = this.props;
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return children && <ReactLatex>{children}</ReactLatex>;
  }
}

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
Latex.propTypes = {
  children: PropTypes.node, // Only `string` node
};

// @ts-expect-error ts-migrate(2339) FIXME: Property 'defaultProps' does not exist on type 'ty... Remove this comment to see the full error message
Latex.defaultProps = {
  children: null,
};

export default Latex;
