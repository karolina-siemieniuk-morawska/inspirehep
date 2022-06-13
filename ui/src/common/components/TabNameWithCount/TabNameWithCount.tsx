import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LoadingOutlined } from '@ant-design/icons';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../EventTracker' was resolved to '/Users/k... Remove this comment to see the full error message
import EventTracker from '../EventTracker';
// @ts-expect-error ts-migrate(2691) FIXME: An import path cannot end with a '.tsx' extension.... Remove this comment to see the full error message
import FormattedNumber from '../FormattedNumber.tsx';

class TabNameWithCount extends Component {
  render() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'name' does not exist on type 'Readonly<{... Remove this comment to see the full error message
    const { name, loading, count } = this.props;
    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <EventTracker eventId={`${name}-Tab`}>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <span>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <span>{name}</span>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <span className="ml1">
            {loading ? (
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <span data-test-id="loading">
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <LoadingOutlined className="ml1" spin />
              </span>
            ) : (
              count != null && (
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <span>
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  (<FormattedNumber>{count}</FormattedNumber>)
                </span>
              )
            )}
          </span>
        </span>
      </EventTracker>
    );
  }
}

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
TabNameWithCount.propTypes = {
  name: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  count: PropTypes.number,
};

// @ts-expect-error ts-migrate(2339) FIXME: Property 'defaultProps' does not exist on type 'ty... Remove this comment to see the full error message
TabNameWithCount.defaultProps = {
  count: null,
  loading: false,
};

export default TabNameWithCount;
