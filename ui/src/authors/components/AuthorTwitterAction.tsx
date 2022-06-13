import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TwitterOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';

import ListItemAction from '../../common/components/ListItemAction';
// @ts-expect-error ts-migrate(2691) FIXME: An import path cannot end with a '.tsx' extension.... Remove this comment to see the full error message
import ExternalLink from '../../common/components/ExternalLink.tsx';

class AuthorTwitterAction extends Component {
  render() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'twitter' does not exist on type 'Readonl... Remove this comment to see the full error message
    const { twitter } = this.props;
    const href = `//twitter.com/${twitter}`;
    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <ListItemAction>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Tooltip title="Twitter">
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <ExternalLink href={href}>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <TwitterOutlined />
          </ExternalLink>
        </Tooltip>
      </ListItemAction>
    );
  }
}

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
AuthorTwitterAction.propTypes = {
  twitter: PropTypes.string.isRequired,
};

export default AuthorTwitterAction;
