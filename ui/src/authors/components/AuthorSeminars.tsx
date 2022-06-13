import React from 'react';

import { AUTHOR_SEMINARS_NS } from '../../search/constants';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../seminars/containers/SeminarSearchCon... Remove this comment to see the full error message
import SeminarSearchContainer from '../../seminars/containers/SeminarSearchContainer';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../seminars/components/SeminarCountWarn... Remove this comment to see the full error message
import SeminarCountWarning from '../../seminars/components/SeminarCountWarning';

function AuthorSeminars() {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <SeminarCountWarning />
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <SeminarSearchContainer embedded namespace={AUTHOR_SEMINARS_NS} />
    </>
  );
}

export default AuthorSeminars;
