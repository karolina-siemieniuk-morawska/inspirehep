import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../../literature/containers/LiteratureSear... Remove this comment to see the full error message
import LiteratureSearchContainer from '../../literature/containers/LiteratureSearchContainer';
import { CONFERENCE_CONTRIBUTIONS_NS } from '../../search/constants';
import { getContributionsQueryString } from '../utils';

function ConferenceContributions({
  conferenceRecordId
}: any) {
  const baseQuery = useMemo(
    () => ({
      q: getContributionsQueryString(conferenceRecordId),
    }),
    [conferenceRecordId]
  );

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <LiteratureSearchContainer
      namespace={CONFERENCE_CONTRIBUTIONS_NS}
      baseQuery={baseQuery}
      noResultsTitle="0 Contributions"
      embedded
    />
  );
}

ConferenceContributions.propTypes = {
  conferenceRecordId: PropTypes.string.isRequired,
};

export default ConferenceContributions;
