import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/RouterLinkButton' ... Remove this comment to see the full error message
import RouterLinkButton from '../../common/components/RouterLinkButton';

const TEXT_CENTER = { textAlign: 'center' };

function SubmissionCard({
  title,
  children,
  formLink
}: any) {
  const actions = useMemo(
    () => [
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <RouterLinkButton key="submit" to={formLink}>
        Submit
      </RouterLinkButton>,
    ],
    [formLink]
  );
  return (
    // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
    <Card
      title={title}
      actions={actions}
      headStyle={TEXT_CENTER}
      bodyStyle={TEXT_CENTER}
    >
      {children}
    </Card>
  );
}

SubmissionCard.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  formLink: PropTypes.string.isRequired,
};

export default SubmissionCard;
