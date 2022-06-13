import React, { useCallback } from 'react';
import { List } from 'immutable';
import PropTypes from 'prop-types';
import { Menu } from 'antd';
import { LinkOutlined } from '@ant-design/icons';

import IconText from '../../common/components/IconText';
// @ts-expect-error ts-migrate(2691) FIXME: An import path cannot end with a '.tsx' extension.... Remove this comment to see the full error message
import ExternalLink from '../../common/components/ExternalLink.tsx';
import { removeProtocolAndWwwFromUrl } from '../../common/utils';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/ActionsDropdownOrA... Remove this comment to see the full error message
import ActionsDropdownOrAction from '../../common/components/ActionsDropdownOrAction';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/EventTracker' was ... Remove this comment to see the full error message
import EventTracker from '../../common/components/EventTracker';

function linkToHrefDisplayPair(link: any) {
  const href = link.get('value');
  const description = link.get('description');
  const display = description || removeProtocolAndWwwFromUrl(href);
  return [href, display];
}

function UrlsAction({
  urls,
  text,
  icon,
  trackerEventId
}: any) {
  const renderUrlsAction = useCallback(
    (url, title) => (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <EventTracker eventId={trackerEventId}>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <ExternalLink href={url.get('value')}>{title}</ExternalLink>
      </EventTracker>
    ),
    [trackerEventId]
  );

  const renderUrlsDropdownAction = useCallback(
    url => {
      const [href, display] = linkToHrefDisplayPair(url);
      return (
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Menu.Item key={href}>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <EventTracker eventId={trackerEventId}>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <ExternalLink href={href}>{display}</ExternalLink>
          </EventTracker>
        </Menu.Item>
      );
    },
    [trackerEventId]
  );

  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  const ACTION_TITLE = <IconText icon={icon} text={text} />;

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <ActionsDropdownOrAction
      // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
      values={urls}
      renderAction={renderUrlsAction}
      renderDropdownAction={renderUrlsDropdownAction}
      title={ACTION_TITLE}
    />
  );
}

UrlsAction.propTypes = {
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'typeof List' is not assignable t... Remove this comment to see the full error message
  urls: PropTypes.instanceOf(List).isRequired,
  text: PropTypes.string,
  icon: PropTypes.node,
  trackerEventId: PropTypes.string,
};

UrlsAction.defaultProps = {
  text: 'website',
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  icon: <LinkOutlined />,
};

export default UrlsAction;
