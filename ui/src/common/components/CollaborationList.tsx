import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';

// @ts-expect-error ts-migrate(6142) FIXME: Module './CollaborationLink' was resolved to '/Use... Remove this comment to see the full error message
import CollaborationLink from './CollaborationLink';
import InlineList, { SEPARATOR_AND } from './InlineList';

class CollaborationList extends Component {
  static renderCollaboration(collaboration: any) {
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return <CollaborationLink>{collaboration.get('value')}</CollaborationLink>;
  }

  render() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'collaborations' does not exist on type '... Remove this comment to see the full error message
    const { collaborations, collaborationsWithSuffix } = this.props;

    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Fragment>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <InlineList
          // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
          wrapperClassName="di"
          separator={SEPARATOR_AND}
          items={collaborations}
          suffix={
            collaborations.size > 0 && (
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <span>
                {collaborations.size > 1 ? ' Collaborations' : ' Collaboration'}
              </span>
            )
          }
          extractKey={(collaboration: any) => collaboration.get('value')}
          renderItem={CollaborationList.renderCollaboration}
        />
        {!collaborations.isEmpty() &&
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          !collaborationsWithSuffix.isEmpty() && <span> and </span>}
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <InlineList
          // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
          wrapperClassName="di"
          separator={SEPARATOR_AND}
          items={collaborationsWithSuffix}
          extractKey={(collaboration: any) => collaboration.get('value')}
          renderItem={CollaborationList.renderCollaboration}
        />
      </Fragment>
    );
  }
}

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
CollaborationList.propTypes = {
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'typeof List' is not assignable t... Remove this comment to see the full error message
  collaborations: PropTypes.instanceOf(List),
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'typeof List' is not assignable t... Remove this comment to see the full error message
  collaborationsWithSuffix: PropTypes.instanceOf(List),
};

// @ts-expect-error ts-migrate(2339) FIXME: Property 'defaultProps' does not exist on type 'ty... Remove this comment to see the full error message
CollaborationList.defaultProps = {
  collaborations: List(),
  collaborationsWithSuffix: List(),
};

export default CollaborationList;
