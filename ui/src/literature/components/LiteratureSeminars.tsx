import React from 'react';

import { LITERATURE_SEMINARS_NS } from '../../search/constants';
import { LOCAL_TIMEZONE } from '../../common/constants';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../seminars/components/SeminarItem' was... Remove this comment to see the full error message
import SeminarItem from '../../seminars/components/SeminarItem';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/containers/ResultsContainer' ... Remove this comment to see the full error message
import ResultsContainer from '../../common/containers/ResultsContainer';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/containers/PaginationContaine... Remove this comment to see the full error message
import PaginationContainer from '../../common/containers/PaginationContainer';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../seminars/components/SeminarCountWarn... Remove this comment to see the full error message
import SeminarCountWarning from '../../seminars/components/SeminarCountWarning';

function renderSeminarItem(result: any) {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <SeminarItem
      metadata={result.get('metadata')}
      selectedTimezone={LOCAL_TIMEZONE}
      enableActions={false}
    />
  );
}

function LiteratureSeminars() {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <SeminarCountWarning />
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <ResultsContainer
        namespace={LITERATURE_SEMINARS_NS}
        renderItem={renderSeminarItem}
      />
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <PaginationContainer namespace={LITERATURE_SEMINARS_NS} />
    </>
  );
}

export default LiteratureSeminars;
