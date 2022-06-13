import React from 'react';
import PropTypes from 'prop-types';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Link } from 'react-router-dom';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'clas... Remove this comment to see the full error message
import classNames from 'classnames';

import './CollectionLink.scss';
import NewFeatureTag from '../../components/NewFeatureTag';

function CollectionLink({
  to,
  active,
  children,
  newCollection
}: any) {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <span className="__CollectionLink__ mh4 m-mh2">
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Link className={classNames('link f5 white', { active })} to={to}>
        {children}
      </Link>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      {newCollection && <NewFeatureTag />}
    </span>
  );
}

CollectionLink.propTypes = {
  to: PropTypes.string.isRequired,
  active: PropTypes.bool,
  newCollection: PropTypes.bool,
  children: PropTypes.node,
};

export default CollectionLink;
