import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import { Menu } from 'antd';
import { LinkOutlined } from '@ant-design/icons';

import IconText from '../../common/components/IconText';
// @ts-expect-error ts-migrate(6142) FIXME: Module './DOILink' was resolved to '/Users/karolin... Remove this comment to see the full error message
import DOILink from './DOILink';
// @ts-expect-error ts-migrate(6142) FIXME: Module './DOIMaterial' was resolved to '/Users/kar... Remove this comment to see the full error message
import DOIMaterial from './DOIMaterial';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/ActionsDropdownOrA... Remove this comment to see the full error message
import ActionsDropdownOrAction from '../../common/components/ActionsDropdownOrAction';

function renderDOIDropdownAction(doi: any) {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Menu.Item key={doi.get('value')}>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <DOILink doi={doi.get('value')}>
        {doi.get('value')}
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <DOIMaterial material={doi.get('material')} />
      </DOILink>
    </Menu.Item>
  );
}

function renderDOIAction(doi: any, title: any) {
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return <DOILink doi={doi.get('value')}>{title}</DOILink>;
}

// @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
const TITLE = <IconText text="DOI" icon={<LinkOutlined />} />;

function DOILinkAction({
  dois
}: any) {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <ActionsDropdownOrAction
      // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
      values={dois}
      renderAction={renderDOIAction}
      renderDropdownAction={renderDOIDropdownAction}
      title={TITLE}
    />
  );
}

DOILinkAction.propTypes = {
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'typeof List' is not assignable t... Remove this comment to see the full error message
  dois: PropTypes.instanceOf(List).isRequired,
};

export default DOILinkAction;
