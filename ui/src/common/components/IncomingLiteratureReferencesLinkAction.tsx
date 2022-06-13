import React from 'react';
import PropTypes from 'prop-types';
import { LoginOutlined } from '@ant-design/icons';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Link } from 'react-router-dom';

import IconText from './IconText';
// @ts-expect-error ts-migrate(2691) FIXME: An import path cannot end with a '.tsx' extension.... Remove this comment to see the full error message
import FormattedNumber from './FormattedNumber.tsx';
import pluralizeUnlessSingle from '../utils';
import { LITERATURE } from '../routes';
import ListItemAction from './ListItemAction';
// @ts-expect-error ts-migrate(6142) FIXME: Module './EventTracker' was resolved to '/Users/ka... Remove this comment to see the full error message
import EventTracker from './EventTracker';

const IncomingLiteratureReferencesLinkAction = ({
  itemCount,
  referenceType,
  linkQuery,
  trackerEventId
}: any) => (
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <ListItemAction>
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <EventTracker eventId={trackerEventId}>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Link to={`${LITERATURE}?q=${linkQuery}`}>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <IconText
          // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
          text={
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <>
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <FormattedNumber>{itemCount}</FormattedNumber>{' '}
              {pluralizeUnlessSingle(referenceType, itemCount)}
            </>
          }
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          icon={<LoginOutlined />}
        />
      </Link>
    </EventTracker>
  </ListItemAction>
);

IncomingLiteratureReferencesLinkAction.propTypes = {
  itemCount: PropTypes.number.isRequired,
  referenceType: PropTypes.string.isRequired,
  linkQuery: PropTypes.string.isRequired,
  trackerEventId: PropTypes.string.isRequired,
};

export default IncomingLiteratureReferencesLinkAction;
