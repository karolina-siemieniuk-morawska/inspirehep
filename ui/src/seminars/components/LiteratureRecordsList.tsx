import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';

// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Link } from 'react-router-dom';

import { LITERATURE } from '../../common/routes';
import pluralizeUnlessSingle from '../../common/utils';
import InlineList from '../../common/components/InlineList';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/LiteratureTitle' w... Remove this comment to see the full error message
import LiteratureTitle from '../../common/components/LiteratureTitle';

function renderLiteratureRecord(literatureRecord: any) {
  const title = literatureRecord.getIn(['titles', 0]);
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Link
      data-test-id="author-link"
      to={`${LITERATURE}/${literatureRecord.get('control_number')}`}
    >
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <LiteratureTitle title={title} />
    </Link>
  );
}

function LiteratureRecordsList({
  literatureRecords
}: any) {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <InlineList
      // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
      label={`INSPIRE ${pluralizeUnlessSingle(
        'paper',
        literatureRecords && literatureRecords.size
      )}`}
      items={literatureRecords}
      extractKey={(literatureRecord: any) => literatureRecord.get('control_number')}
      renderItem={renderLiteratureRecord}
    />
  );
}

LiteratureRecordsList.propTypes = {
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'typeof List' is not assignable t... Remove this comment to see the full error message
  literatureRecords: PropTypes.instanceOf(List),
};

export default LiteratureRecordsList;
