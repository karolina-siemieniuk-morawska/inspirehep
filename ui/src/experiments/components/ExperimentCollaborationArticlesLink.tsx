import React from 'react';
import PropTypes from 'prop-types';

// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Link } from 'react-router-dom';
import { LITERATURE } from '../../common/routes';

function ExperimentCollaborationArticlesLink({
  collaboration
}: any) {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Link to={`${LITERATURE}?q=collaboration:${collaboration.get('value')}`}>
      Collaboration articles
    </Link>
  );
}

ExperimentCollaborationArticlesLink.propTypes = {
  collaboration: PropTypes.instanceOf(Map).isRequired,
};

export default ExperimentCollaborationArticlesLink;
