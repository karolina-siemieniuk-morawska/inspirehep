import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';

import InlineList, { SEPARATOR_AND } from '../../common/components/InlineList';

function extractSeries(bookSeries: any) {
  return bookSeries.get('title') + bookSeries.get('volume', '');
}

function renderSeriesInfo(bookSeries: any) {
  const volume = bookSeries.get('volume');
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <span>
      {bookSeries.get('title')}
      {volume && `, ${volume}`}
    </span>
  );
}

function BookSeriesInfoList({
  bookSeries
}: any) {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <InlineList
      // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
      label="Published in"
      items={bookSeries}
      separator={SEPARATOR_AND}
      extractKey={extractSeries}
      renderItem={renderSeriesInfo}
    />
  );
}

BookSeriesInfoList.propTypes = {
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'typeof List' is not assignable t... Remove this comment to see the full error message
  bookSeries: PropTypes.instanceOf(List).isRequired,
};

export default BookSeriesInfoList;
