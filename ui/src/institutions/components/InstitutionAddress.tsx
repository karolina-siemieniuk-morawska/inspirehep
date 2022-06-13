import React from 'react';
import PropTypes from 'prop-types';
import { Map, List } from 'immutable';
import InlineList, {
  InlineUL,
  SEPARATOR_COMMA,
} from '../../common/components/InlineList';

function postalAddressesContainWord(postalAddresses: any, word: any) {
  return postalAddresses.some(
    (address: any) => address.toLowerCase().indexOf(word.toLowerCase()) > -1
  );
}

function InstitutionAddress({
  address
}: any) {
  const postalAddresses = address.get('postal_address', List());
  const city = address.getIn(['cities', 0]);
  const country = address.get('country');
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <span>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <InlineUL separator={SEPARATOR_COMMA} wrapperClassName="di">
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        {postalAddresses.size > 0 && <InlineList items={postalAddresses} />}
        {city &&
          !postalAddressesContainWord(postalAddresses, city) && (
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <span>{city}</span>
          )}
        {country &&
          !postalAddressesContainWord(postalAddresses, country) && (
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <span>{country}</span>
          )}
      </InlineUL>
    </span>
  );
}

InstitutionAddress.propTypes = {
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'typeof Map' is not assignable to... Remove this comment to see the full error message
  address: PropTypes.instanceOf(Map).isRequired,
};

export default InstitutionAddress;
