import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import { LinkOutlined } from '@ant-design/icons';
import { Menu, Tooltip } from 'antd';

// @ts-expect-error ts-migrate(2691) FIXME: An import path cannot end with a '.tsx' extension.... Remove this comment to see the full error message
import ExternalLink from '../../common/components/ExternalLink.tsx';
import { removeProtocolAndWwwFromUrl } from '../../common/utils';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/ActionsDropdownOrA... Remove this comment to see the full error message
import ActionsDropdownOrAction from '../../common/components/ActionsDropdownOrAction';

function isBlog(website: any) {
  return website.get('description', '').toLowerCase() === 'blog';
}

function websiteToHrefDisplayPair(website: any) {
  const href = website.get('value');
  const display = isBlog(website) ? 'Blog' : removeProtocolAndWwwFromUrl(href);
  return [href, display];
}

function sortBlogFirst(a: any, b: any) {
  if (a === b) {
    return 0;
  }

  if (isBlog(a)) {
    return -1;
  }

  if (isBlog(b)) {
    return 1;
  }

  return 0;
}

function renderWebsitesDropdownAction(website: any) {
  const [href, display] = websiteToHrefDisplayPair(website);
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Menu.Item key={href}>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <ExternalLink href={href}>{display}</ExternalLink>
    </Menu.Item>
  );
}

function renderWebsiteAction(website: any, title: any) {
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return <ExternalLink href={website.get('value')}>{title}</ExternalLink>;
}

const ACTION_TITLE = (
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <Tooltip title="Author websites">
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <LinkOutlined />
  </Tooltip>
);

function AuthorWebsitesAction({
  websites
}: any) {
  const sortedWebsites = useMemo(() => websites.sort(sortBlogFirst), [
    websites,
  ]);
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <ActionsDropdownOrAction
      // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
      values={sortedWebsites}
      renderAction={renderWebsiteAction}
      renderDropdownAction={renderWebsitesDropdownAction}
      title={ACTION_TITLE}
    />
  );
}

AuthorWebsitesAction.propTypes = {
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'typeof List' is not assignable t... Remove this comment to see the full error message
  websites: PropTypes.instanceOf(List).isRequired,
};

export default AuthorWebsitesAction;
