import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/URLList' was resol... Remove this comment to see the full error message
import URLList from '../../common/components/URLList';

class MoreInfo extends Component {
  render() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'urls' does not exist on type 'Readonly<{... Remove this comment to see the full error message
    const { urls } = this.props;
    return (
      urls && (
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <strong>More Information: </strong>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <URLList urls={urls} wrapperClassName="di" />
        </div>
      )
    );
  }
}

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
MoreInfo.propTypes = {
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'typeof List' is not assignable t... Remove this comment to see the full error message
  urls: PropTypes.instanceOf(List),
};

// @ts-expect-error ts-migrate(2339) FIXME: Property 'defaultProps' does not exist on type 'ty... Remove this comment to see the full error message
MoreInfo.defaultProps = {
  urls: null,
};

export default MoreInfo;
