import React, { useEffect } from 'react';
import { Checkbox } from 'antd';
import PropTypes from 'prop-types';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/LabelWithHelp' was... Remove this comment to see the full error message
import LabelWithHelp from '../../common/components/LabelWithHelp';

const EXCLUDE_SELF_CITATIONS_HELP = (
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <p>
    Self-citations are citations from the same collaboration or any of the
    authors of the paper being cited.{' '}
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <a href="https://inspirehep.net/help/knowledge-base/citation-metrics/">
      Learn More
    </a>
  </p>
);

function ExcludeSelfCitations({
  onChange,
  excluded,
  preference,
  onPreferenceChange
}: any) {
  useEffect(
    () => {
      onPreferenceChange(preference);
    },
    [onPreferenceChange, preference]
  );
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Checkbox
      onChange={event => onChange(event.target.checked)}
      checked={excluded}
    >
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <LabelWithHelp
        // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
        label="Exclude self-citations"
        help={EXCLUDE_SELF_CITATIONS_HELP}
      />
    </Checkbox>
  );
}

ExcludeSelfCitations.propTypes = {
  onChange: PropTypes.func.isRequired,
  excluded: PropTypes.bool,
  preference: PropTypes.bool.isRequired,
  onPreferenceChange: PropTypes.func,
};

export default ExcludeSelfCitations;
