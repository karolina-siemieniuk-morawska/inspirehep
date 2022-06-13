import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../../literature/containers/LiteratureSear... Remove this comment to see the full error message
import LiteratureSearchContainer from '../../literature/containers/LiteratureSearchContainer';
import { getPapersQueryString } from '../utils';
import { EXPERIMENT_PAPERS_NS } from '../../search/constants';

function ExperimentPapers({
  recordId
}: any) {
  const baseQuery = useMemo(
    () => ({
      q: getPapersQueryString(recordId),
    }),
    [recordId]
  );

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <LiteratureSearchContainer
      namespace={EXPERIMENT_PAPERS_NS}
      baseQuery={baseQuery}
      noResultsTitle="0 Papers"
      embedded
    />
  );
}

ExperimentPapers.propTypes = {
  recordId: PropTypes.number.isRequired,
};

export default ExperimentPapers;
