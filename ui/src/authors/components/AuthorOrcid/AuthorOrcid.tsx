import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'antd';

import './AuthorOrcid.scss';
import orcidLogo from '../../../common/orcid.svg';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../../common/components/OrcidProfileLin... Remove this comment to see the full error message
import OrcidProfileLink from '../../../common/components/OrcidProfileLink';

class AuthorOrcid extends Component {
  render() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'orcid' does not exist on type 'Readonly<... Remove this comment to see the full error message
    const { orcid } = this.props;
    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <OrcidProfileLink className="__AuthorOrcid__" orcid={orcid}>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Tooltip title="ORCID">
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <img src={orcidLogo} alt="ORCID" />
        </Tooltip>
      </OrcidProfileLink>
    );
  }
}

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
AuthorOrcid.propTypes = {
  orcid: PropTypes.string.isRequired,
};

export default AuthorOrcid;
