import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/CollaborationLink'... Remove this comment to see the full error message
import CollaborationLink from '../../common/components/CollaborationLink';

function ExperimentCollaboration({
  collaboration
}: any) {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <span>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <CollaborationLink>{collaboration.get('value')}</CollaborationLink>
      {' Collaboration'}
    </span>
  );
}

ExperimentCollaboration.propTypes = {
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'typeof Map' is not assignable to... Remove this comment to see the full error message
  collaboration: PropTypes.instanceOf(Map).isRequired,
};

export default ExperimentCollaboration;
