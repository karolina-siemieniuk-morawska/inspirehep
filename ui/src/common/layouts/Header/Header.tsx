import React from 'react';
import { Layout, Row, Col } from 'antd';
import PropTypes from 'prop-types';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'use-... Remove this comment to see the full error message
import useResizeObserver from 'use-resize-observer';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../../containers/SearchBoxContainer' was r... Remove this comment to see the full error message
import SearchBoxContainer from '../../containers/SearchBoxContainer';
import './Header.scss';
import Logo from '../../components/Logo';
// @ts-expect-error ts-migrate(6142) FIXME: Module './HeaderMenuContainer' was resolved to '/U... Remove this comment to see the full error message
import HeaderMenuContainer from './HeaderMenuContainer';
import BetaRibbon from './BetaRibbon';
import CollectionsMenu from '../CollectionsMenu';
// @ts-expect-error ts-migrate(6142) FIXME: Module './Banners' was resolved to '/Users/karolin... Remove this comment to see the full error message
import Banners from './Banners';

function Header({
  isHomePage,
  isSubmissionsPage,
  isBetaPage
}: any) {
  const [stickyContainerRef, , stickyContainerHeight] = useResizeObserver();

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className="__Header__">
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div ref={stickyContainerRef} className="sticky" data-test-id="sticky">
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Banners />
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        {isBetaPage && <BetaRibbon />}
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Layout.Header className="header">
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Row type="flex" align="middle" gutter={{ xs: 8, sm: 16 }}>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Col xs={{ span: 13, order: 1 }} sm={{ span: 6, order: 1 }} lg={5}>
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Logo />
            </Col>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Col
              xs={{ span: 24, order: 3 }}
              sm={{ span: 14, order: 2 }}
              lg={12}
              xl={13}
              xxl={14}
            >
              {!isHomePage &&
                !isSubmissionsPage && (
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <SearchBoxContainer className="search-box" />
                )}
            </Col>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Col
              xs={{ span: 11, order: 2 }}
              sm={{ span: 4, order: 3 }}
              lg={7}
              xl={6}
              xxl={5}
            >
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <HeaderMenuContainer />
            </Col>
          </Row>
        </Layout.Header>
      </div>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div className="non-sticky" style={{ marginTop: stickyContainerHeight }}>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CollectionsMenu />
      </div>
    </div>
  );
}

Header.propTypes = {
  isHomePage: PropTypes.bool.isRequired,
  isSubmissionsPage: PropTypes.bool.isRequired,
  isBetaPage: PropTypes.bool.isRequired,
};

export default Header;
