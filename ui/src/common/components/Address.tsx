import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import { InlineUL, SEPARATOR_COMMA } from './InlineList';

function Address({
  address
}: any) {
  const placeName = address.get('place_name');
  const city = address.getIn(['cities', 0]);
  const state = address.get('state');
  const country = address.get('country');
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <span>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <InlineUL separator={SEPARATOR_COMMA} wrapperClassName="di">
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        {placeName && <span>{placeName}</span>}
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        {city && <span>{city}</span>}
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        {state && <span>{state}</span>}
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        {country && <span>{country}</span>}
      </InlineUL>
    </span>
  );
}

Address.propTypes = {
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'typeof Map' is not assignable to... Remove this comment to see the full error message
  address: PropTypes.instanceOf(Map).isRequired,
};

export default Address;
