import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';

// @ts-expect-error ts-migrate(6142) FIXME: Module './AdvisorsOfDegree' was resolved to '/User... Remove this comment to see the full error message
import AdvisorsOfDegree from './AdvisorsOfDegree';

function Advisors({
  advisors
}: any) {
  // `Array.from` because Immutable.Map.values returns `Iterable`
  return Array.from(
    advisors
      .groupBy((advisor: any) => advisor.get('degree_type', 'other'))
      .map((advisorsOfDegree: any, degreeType: any) => (
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <AdvisorsOfDegree degreeType={degreeType} advisors={advisorsOfDegree} />
      ))
      .values()
  );
}

Advisors.propTypes = {
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'typeof List' is not assignable t... Remove this comment to see the full error message
  advisors: PropTypes.instanceOf(List).isRequired,
};

export default Advisors;
