import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import { Timeline } from 'antd';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/ExpandListToggle' ... Remove this comment to see the full error message
import ExpandListToggle from '../../common/components/ExpandListToggle';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/Affiliation' was r... Remove this comment to see the full error message
import Affiliation from '../../common/components/Affiliation';

const DISPLAY_LIMIT = 3;

class PositionsTimeline extends Component {
  static renderPositionTimelineItem(position: any) {
    const institution = position.get('institution');
    const rank = position.get('rank');
    const displayDate = position.get('display_date');

    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Timeline.Item key={`#${displayDate}@${institution}`}>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div>{displayDate}</div>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          {rank && <strong>{rank}, </strong>}
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Affiliation affiliation={position} />
        </div>
      </Timeline.Item>
    );
  }

  constructor(props: any) {
    super(props);

    this.state = { expanded: false };
    this.onExpandToggle = this.onExpandToggle.bind(this);
  }

  onExpandToggle() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'expanded' does not exist on type 'Readon... Remove this comment to see the full error message
    const { expanded } = this.state;
    this.setState({ expanded: !expanded });
  }

  render() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'positions' does not exist on type 'Reado... Remove this comment to see the full error message
    const { positions } = this.props;
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'expanded' does not exist on type 'Readon... Remove this comment to see the full error message
    const { expanded } = this.state;

    const positionsToDisplay = expanded
      ? positions
      : positions.take(DISPLAY_LIMIT);

    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Fragment>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Timeline>
          {positionsToDisplay.map(PositionsTimeline.renderPositionTimelineItem)}
        </Timeline>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <ExpandListToggle
          // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
          limit={DISPLAY_LIMIT}
          size={positions.size}
          expanded={expanded}
          onToggle={this.onExpandToggle}
          expandLabel="Show all positions"
        />
      </Fragment>
    );
  }
}

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
PositionsTimeline.propTypes = {
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'typeof List' is not assignable t... Remove this comment to see the full error message
  positions: PropTypes.instanceOf(List),
};

// @ts-expect-error ts-migrate(2339) FIXME: Property 'defaultProps' does not exist on type 'ty... Remove this comment to see the full error message
PositionsTimeline.defaultProps = {
  positions: null,
};

export default PositionsTimeline;
