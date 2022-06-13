import React, { Component } from 'react';
import { Map } from 'immutable';
import PropTypes from 'prop-types';

// @ts-expect-error ts-migrate(6142) FIXME: Module './Latex' was resolved to '/Users/karolinas... Remove this comment to see the full error message
import Latex from './Latex';

class LiteratureTitle extends Component {
  render() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'title' does not exist on type 'Readonly<... Remove this comment to see the full error message
    const { title } = this.props;
    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <span>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Latex>{title.get('title')}</Latex>
        {title.has('subtitle') && (
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <span>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <span> : </span>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Latex>{title.get('subtitle')}</Latex>
          </span>
        )}
      </span>
    );
  }
}

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
LiteratureTitle.propTypes = {
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'typeof Map' is not assignable to... Remove this comment to see the full error message
  title: PropTypes.instanceOf(Map).isRequired,
};

export default LiteratureTitle;
