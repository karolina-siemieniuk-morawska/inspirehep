import React from 'react';
import PropTypes from 'prop-types';

// @ts-expect-error ts-migrate(2691) FIXME: An import path cannot end with a '.tsx' extension.... Remove this comment to see the full error message
import ExternalLink from '../../common/components/ExternalLink.tsx';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/OrcidProfileLink' ... Remove this comment to see the full error message
import OrcidProfileLink from '../../common/components/OrcidProfileLink';

function OrcidPushSettingMessage({
  orcid,
  enabled
}: any) {
  if (enabled) {
    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <p>
          This profile is already connected to the following ORCID:
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <OrcidProfileLink orcid={orcid} />
        </p>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <p>Your claimed works will be exported automatically.</p>
      </div>
    );
  }

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <p>
        Your INSPIRE works are not exported to your ORCID yet. Please note that
        only the publications that are verified as yours on INSPIRE will be
        exported to ORCID.
      </p>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div>
        A new interface that will allow you to claim your papers is coming up
        soon. In the meantime, if you wish to claim a paper as yours, you can
        send your request at{' '}
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <ExternalLink href="mailto:authors@inspirehep.net">
          authors@inspirehep.net
        </ExternalLink>
        .
      </div>
    </div>
  );
}

OrcidPushSettingMessage.propTypes = {
  orcid: PropTypes.string,
  enabled: PropTypes.bool.isRequired,
};

export default OrcidPushSettingMessage;
