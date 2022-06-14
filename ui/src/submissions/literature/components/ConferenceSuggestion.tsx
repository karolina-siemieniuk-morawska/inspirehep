import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ConferenceSuggestion extends Component {
  render() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'conference' does not exist on type 'Read... Remove this comment to see the full error message
    const { conference } = this.props;
    const { cnum, acronyms, address, titles } = conference;
    const { title } = titles[0];
    const openingDate = conference.opening_date;
    const firstAcronym = acronyms && acronyms[0];
    const firstAddress = (address && address[0]) || {};
    const countryCode = firstAddress.country_code;
    const city = firstAddress.cities && firstAddress.cities[0];
    return (
      <>
        <div>
          <strong>{title}</strong>
        </div>
        <div className="f7">
          <div>{firstAcronym && <span>({firstAcronym})</span>}</div>
          <div>
            <span>{openingDate} </span>
            <span>
              {city && <span>{city}, </span>} {countryCode}
            </span>
          </div>
          <div>
            <span>{cnum}</span>
          </div>
        </div>
      </>
    );
  }
}

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
ConferenceSuggestion.propTypes = {
  conference: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ConferenceSuggestion;
