import React, { useMemo } from 'react';
import RcFooter from 'rc-footer';
import 'rc-footer/assets/index.css';
import { Row, Col } from 'antd';
import PropTypes from 'prop-types';

import './Footer.scss';
import {
  FEEDBACK_EMAIL,
  INSPIRE_TWITTER_ACCOUNT,
  ABOUT_INSPIRE_URL,
  CONTENT_POLICY_URL,
  PRIVACY_NOTICE_URL,
  TERMS_OF_USE_URL,
  FAQ_URL,
  HELP_BLOG_URL,
  BLOG_URL,
  HOLDINGPEN_URL,
  AUTHORLIST_TOOL_URL,
  INVENIO_URL,
  REPORT_METADATA_URL,
} from '../../constants';
// @ts-expect-error ts-migrate(2691) FIXME: An import path cannot end with a '.tsx' extension.... Remove this comment to see the full error message
import ExternalLink from '../../components/ExternalLink.tsx';
import { BIBLIOGRAPHY_GENERATOR } from '../../routes';

const COLUMNS = [
  {
    title: 'INSPIRE',
    items: [
      {
        title: 'About INSPIRE',
        url: ABOUT_INSPIRE_URL,
        openExternal: true,
      },
      {
        title: 'Content Policy',
        url: CONTENT_POLICY_URL,
        openExternal: true,
      },
      {
        title: 'Privacy Notice',
        url: PRIVACY_NOTICE_URL,
        openExternal: true,
      },
      {
        title: 'Terms of Use',
        url: TERMS_OF_USE_URL,
        openExternal: true,
      },
    ],
  },
  {
    title: 'Help',
    items: [
      {
        title: 'FAQ',
        url: FAQ_URL,
        openExternal: true,
      },
      {
        title: 'INSPIRE Help',
        url: HELP_BLOG_URL,
        openExternal: true,
      },
      {
        title: 'Report metadata issues',
        url: REPORT_METADATA_URL,
        openExternal: false,
      },
    ],
  },
  {
    title: 'Tools',
    items: [
      {
        title: 'Holdingpen',
        onlyCatalogers: true,
        url: HOLDINGPEN_URL,
        openExternal: true,
      },
      {
        title: 'Author list',
        onlyCatalogers: true,
        url: AUTHORLIST_TOOL_URL,
        openExternal: true,
      },
      {
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        title: <span>Bibliography generator</span>,
        url: BIBLIOGRAPHY_GENERATOR,
        openExternal: false,
      },
    ],
  },
  {
    title: 'Community',
    items: [
      {
        title: 'Blog',
        url: BLOG_URL,
        openExternal: true,
      },
      {
        title: 'Twitter',
        url: INSPIRE_TWITTER_ACCOUNT,
        openExternal: true,
      },
      {
        title: 'Contact',
        url: `mailto:${FEEDBACK_EMAIL}`,
        openExternal: true,
      },
    ],
  },
];

const BOTTOM = (
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <Row>
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Col className="tl sm-tc" xs={24} md={12}>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <ExternalLink href={INVENIO_URL}>Powered by Invenio</ExternalLink>
    </Col>
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Col className="tr sm-tc" xs={24} md={12}>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      Made with <span className="red">❤</span> by the INSPIRE Team
    </Col>
  </Row>
);

function Footer({
  isCatalogerLoggedIn
}: any) {
  const columns = useMemo(
    () =>
      isCatalogerLoggedIn
        ? COLUMNS
        : COLUMNS.map((col) => ({
            ...col,
            // @ts-expect-error ts-migrate(2349) FIXME: This expression is not callable.
            items: col.items.filter((item: any) => !item.onlyCatalogers),
          })),
    [isCatalogerLoggedIn]
  );
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return <RcFooter className="__Footer__" bottom={BOTTOM} columns={columns} />;
}

Footer.propTypes = {
  isCatalogerLoggedIn: PropTypes.bool.isRequired,
};

export default Footer;
