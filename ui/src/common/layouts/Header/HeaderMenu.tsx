import React, { Component } from 'react';
import PropTypes from 'prop-types';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Link } from 'react-router-dom';
import { Menu, Tooltip, Button } from 'antd';

import {
  SUBMISSIONS_AUTHOR,
  USER_LOGIN,
  SUBMISSIONS_JOB,
  SUBMISSIONS_LITERATURE,
  SUBMISSIONS_CONFERENCE,
  SUBMISSIONS_SEMINAR,
  SUBMISSIONS_INSTITUTION,
  SUBMISSIONS_EXPERIMENT,
} from '../../routes';
// @ts-expect-error ts-migrate(2691) FIXME: An import path cannot end with a '.tsx' extension.... Remove this comment to see the full error message
import ExternalLink from '../../components/ExternalLink.tsx';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../components/LinkLikeButton' was resol... Remove this comment to see the full error message
import LinkLikeButton from '../../components/LinkLikeButton';

import './HeaderMenu.scss';
import { PAPER_SEARCH_URL, HELP_BLOG_URL } from '../../constants';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../containers/DisplayGuideButtonContain... Remove this comment to see the full error message
import DisplayGuideButtonContainer from '../../containers/DisplayGuideButtonContainer';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../../authors/components/AssignNoProfil... Remove this comment to see the full error message
import { CLAIMING_DISABLED_INFO } from '../../../authors/components/AssignNoProfileAction';

class HeaderMenu extends Component {
  render() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'loggedIn' does not exist on type 'Readon... Remove this comment to see the full error message
    const { loggedIn, onLogoutClick, isCatalogerLoggedIn, profileControlNumber } = this.props;
    const USER_PROFILE_URL = `/authors/${profileControlNumber}`;

    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Menu
        className="__HeaderMenu__"
        theme="dark"
        mode="horizontal"
        selectable={false}
      >
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Menu.SubMenu
          key="help"
          title="Help"
          popupClassName="header-submenu ant-menu-dark"
        >
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Menu.Item key="help.search-tips">
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <ExternalLink href={PAPER_SEARCH_URL}>Search Tips</ExternalLink>
          </Menu.Item>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Menu.Item key="help.tour">
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <DisplayGuideButtonContainer>
              Take the tour
            </DisplayGuideButtonContainer>
          </Menu.Item>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Menu.Item key="help.help-center">
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <ExternalLink href={HELP_BLOG_URL}>Help Center</ExternalLink>
          </Menu.Item>
        </Menu.SubMenu>

        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Menu.SubMenu
          key="submit"
          title="Submit"
          popupClassName="header-submenu ant-menu-dark"
        >
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Menu.Item key="submit.literature">
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Link to={SUBMISSIONS_LITERATURE}>Literature</Link>
          </Menu.Item>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Menu.Item key="submit.author">
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Link to={SUBMISSIONS_AUTHOR}>Author</Link>
          </Menu.Item>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Menu.Item key="submit.job">
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Link to={SUBMISSIONS_JOB}>Job</Link>
          </Menu.Item>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Menu.Item key="submit.seminar">
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Link to={SUBMISSIONS_SEMINAR}>Seminar</Link>
          </Menu.Item>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Menu.Item key="submit.conference">
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Link to={SUBMISSIONS_CONFERENCE}>Conference</Link>
          </Menu.Item>
          {isCatalogerLoggedIn && (
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Menu.Item key="submit.institution">
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Link to={SUBMISSIONS_INSTITUTION}>Institution</Link>
            </Menu.Item>
          )}
          {isCatalogerLoggedIn && (
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Menu.Item key="submit.experiment">
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Link to={SUBMISSIONS_EXPERIMENT}>Experiment</Link>
            </Menu.Item>
          )}
        </Menu.SubMenu>
        {loggedIn ? (
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Menu.SubMenu
            key="account"
            title="Account"
            popupClassName="header-submenu ant-menu-dark"
            data-test-id="account"
          >
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Menu.Item key="my-profile">
              {profileControlNumber ? (
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Link to={USER_PROFILE_URL}>My profile</Link>
              ) : (
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Tooltip title={CLAIMING_DISABLED_INFO}>
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <Button ghost disabled>My profile</Button>
                </Tooltip>
              )}
            </Menu.Item>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Menu.Item key="logout">
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <LinkLikeButton onClick={onLogoutClick} dataTestId="logout">
                Logout
              </LinkLikeButton>
            </Menu.Item>
          </Menu.SubMenu>
        ) : (
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Menu.Item key="login">
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Link to={USER_LOGIN}>Login</Link>
          </Menu.Item>
        )}
      </Menu>
    );
  }
}

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
HeaderMenu.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  onLogoutClick: PropTypes.func.isRequired,
  isCatalogerLoggedIn: PropTypes.bool.isRequired,
  profileControlNumber: PropTypes.string,
};

export default HeaderMenu;
