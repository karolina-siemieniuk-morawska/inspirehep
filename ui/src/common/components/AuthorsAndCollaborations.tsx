import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';

// @ts-expect-error ts-migrate(6142) FIXME: Module './AuthorList' was resolved to '/Users/karo... Remove this comment to see the full error message
import AuthorList from './AuthorList';
// @ts-expect-error ts-migrate(6142) FIXME: Module './CollaborationList' was resolved to '/Use... Remove this comment to see the full error message
import CollaborationList from './CollaborationList';

class AuthorsAndCollaborations extends Component {
  renderBulletIfAuthorsNotEmpty() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'authors' does not exist on type 'Readonl... Remove this comment to see the full error message
    const { authors } = this.props;
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return authors.size > 0 && <span className="mh1">&bull;</span>;
  }

  renderAuthorList(wrapperClassName: any, limit: any) {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'authors' does not exist on type 'Readonl... Remove this comment to see the full error message
    const { authors, authorCount, enableAuthorsShowAll } = this.props;
    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Fragment>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <AuthorList
          // @ts-expect-error ts-migrate(2322) FIXME: Type '{ wrapperClassName: any; limit: any; total: ... Remove this comment to see the full error message
          wrapperClassName={wrapperClassName}
          limit={limit}
          total={authorCount}
          authors={authors}
          enableShowAll={enableAuthorsShowAll}
        />
      </Fragment>
    );
  }

  renderCollaborationList() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'collaborations' does not exist on type '... Remove this comment to see the full error message
    const { collaborations, collaborationsWithSuffix } = this.props;
    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <CollaborationList
        // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
        collaborations={collaborations}
        collaborationsWithSuffix={collaborationsWithSuffix}
      />
    );
  }

  render() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'authors' does not exist on type 'Readonl... Remove this comment to see the full error message
    const { authors, collaborations, collaborationsWithSuffix } = this.props;
    const collaborationsSize =
      collaborations.size + collaborationsWithSuffix.size;

    if (collaborationsSize === 0) {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      return this.renderAuthorList('di');
    }

    if (authors.size === 1) {
      return (
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Fragment>
          {this.renderCollaborationList()}
          {this.renderBulletIfAuthorsNotEmpty()}
          // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
          {this.renderAuthorList('di')}
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <span> for the collaboration</span>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          {collaborationsSize > 1 && <span>s</span>}
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <span>.</span>
        </Fragment>
      );
    }

    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Fragment>
        {this.renderCollaborationList()}
        {this.renderBulletIfAuthorsNotEmpty()}
        {this.renderAuthorList('di', 1)}
      </Fragment>
    );
  }
}

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
AuthorsAndCollaborations.propTypes = {
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'typeof List' is not assignable t... Remove this comment to see the full error message
  authors: PropTypes.instanceOf(List),
  authorCount: PropTypes.number,
  enableAuthorsShowAll: PropTypes.bool,
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'typeof List' is not assignable t... Remove this comment to see the full error message
  collaborations: PropTypes.instanceOf(List),
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'typeof List' is not assignable t... Remove this comment to see the full error message
  collaborationsWithSuffix: PropTypes.instanceOf(List),
};

// @ts-expect-error ts-migrate(2339) FIXME: Property 'defaultProps' does not exist on type 'ty... Remove this comment to see the full error message
AuthorsAndCollaborations.defaultProps = {
  authorCount: undefined,
  authors: List(),
  collaborations: List(),
  collaborationsWithSuffix: List(),
  enableAuthorsShowAll: false,
};

export default AuthorsAndCollaborations;
