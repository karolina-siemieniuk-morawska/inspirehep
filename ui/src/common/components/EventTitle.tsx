import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';

// @ts-expect-error ts-migrate(6142) FIXME: Module './Latex' was resolved to '/Users/karolinas... Remove this comment to see the full error message
import Latex from './Latex';

function EventTitle({
  title,
  acronym
}: any) {
  const mainTitle = title.get('title');
  const subTitle = title.get('subtitle');
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <span>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Latex>{mainTitle}</Latex>
      {subTitle && (
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <span>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <span> : </span>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Latex>{subTitle}</Latex>
        </span>
      )}
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      {acronym && <span> ({acronym})</span>}
    </span>
  );
}

EventTitle.propTypes = {
  acronym: PropTypes.string,
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'typeof Map' is not assignable to... Remove this comment to see the full error message
  title: PropTypes.instanceOf(Map).isRequired,
};

export default EventTitle;
