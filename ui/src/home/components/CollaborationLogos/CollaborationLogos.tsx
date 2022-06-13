import React from 'react';
import { Row, Col } from 'antd';
// @ts-expect-error ts-migrate(6142) FIXME: Module './CollaborationLogo' was resolved to '/Use... Remove this comment to see the full error message
import CollaborationLogo from './CollaborationLogo';

import cernLogo from './logos/collab-logo-CERN.png';
import desyLogo from './logos/collab-logo-DESY.png';
import fermilabLogo from './logos/collab-logo-Fermilab.png';
import ihepLogo from './logos/collab-logo-IHEP.png';
import in2p3Logo from './logos/collab-logo-IN2P3.png';
import slacLogo from './logos/collab-logo-SLAC.png';

function CollaborationLogos() {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Row justify="center" align="middle">
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Col className="ma3">
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CollaborationLogo
          name="CERN"
          href="https://home.cern"
          src={cernLogo}
        />
      </Col>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Col className="ma3">
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CollaborationLogo name="DESY" href="https://desy.de" src={desyLogo} />
      </Col>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Col className="ma3">
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CollaborationLogo
          name="Fermilab"
          href="https://fnal.gov"
          src={fermilabLogo}
        />
      </Col>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Col className="ma3">
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CollaborationLogo
          name="IHEP"
          href="http://english.ihep.cas.cn/"
          src={ihepLogo}
        />
      </Col>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Col className="ma3">
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CollaborationLogo
          name="IN2P3"
          href="https://in2p3.cnrs.fr"
          src={in2p3Logo}
        />
      </Col>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Col className="ma3">
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CollaborationLogo
          name="SLAC"
          href="https://slac.stanford.edu"
          src={slacLogo}
        />
      </Col>
    </Row>
  );
}

export default CollaborationLogos;
