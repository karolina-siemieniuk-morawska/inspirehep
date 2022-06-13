import React, { useMemo } from 'react';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Link } from 'react-router-dom';
import { Row, Col, Menu, Button } from 'antd';
import PropTypes from 'prop-types';

import './CollectionsMenu.scss';
import {
  LITERATURE,
  AUTHORS,
  JOBS,
  CONFERENCES,
  INSTITUTIONS,
  SEMINARS,
  EXPERIMENTS,
} from '../../routes';
import { getRootOfLocationPathname } from '../../utils';
import {
  LITERATURE_PID_TYPE,
  AUTHORS_PID_TYPE,
  JOBS_PID_TYPE,
  CONFERENCES_PID_TYPE,
  SEMINARS_PID_TYPE,
} from '../../constants';
// @ts-expect-error ts-migrate(6142) FIXME: Module './CollectionLink' was resolved to '/Users/... Remove this comment to see the full error message
import CollectionLink from './CollectionLink';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../components/DropdownMenu' was resolve... Remove this comment to see the full error message
import DropdownMenu from '../../components/DropdownMenu';

function CollectionsMenu({
  currentPathname
}: any) {
  const activeCollection = useMemo(
    () => getRootOfLocationPathname(currentPathname),
    [currentPathname]
  );
  const dropdownTitle = 'More...';

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Row className="__CollectionsMenu__" justify="center">
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Col>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CollectionLink
          active={activeCollection === LITERATURE_PID_TYPE}
          to={`${LITERATURE}`}
        >
          Literature
        </CollectionLink>
      </Col>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Col>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CollectionLink
          active={activeCollection === AUTHORS_PID_TYPE}
          to={AUTHORS}
        >
          Authors
        </CollectionLink>
      </Col>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Col>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CollectionLink active={activeCollection === JOBS_PID_TYPE} to={JOBS}>
          Jobs
        </CollectionLink>
      </Col>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Col>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CollectionLink
          active={activeCollection === SEMINARS_PID_TYPE}
          to={SEMINARS}
        >
          Seminars
        </CollectionLink>
      </Col>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Col>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CollectionLink
          active={activeCollection === CONFERENCES_PID_TYPE}
          to={CONFERENCES}
        >
          Conferences
        </CollectionLink>
      </Col>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Col>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <DropdownMenu
          // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
          overlayClassName="more-collections-menu"
          className="dropdown mh4 m-mh2"
          title={
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Button
              className="button-no-background ml4"
              onClick={e => e.preventDefault()}
            >
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <span className="button-title f5 white"> {dropdownTitle} </span>
            </Button>
          }
        >
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Menu.Item className="dropdown-menu-item" key="more.institutions">
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Link className="dropdown-link" to={INSTITUTIONS}>
              Institutions
            </Link>
          </Menu.Item>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Menu.Item className="dropdown-menu-item" key="more.experiments">
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Link className="dropdown-link" to={EXPERIMENTS}>
              Experiments
            </Link>
          </Menu.Item>
        </DropdownMenu>
      </Col>
    </Row>
  );
}

CollectionsMenu.propTypes = {
  currentPathname: PropTypes.string.isRequired,
};

export default CollectionsMenu;
