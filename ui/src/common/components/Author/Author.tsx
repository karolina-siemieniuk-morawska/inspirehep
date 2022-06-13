import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import { Tooltip } from 'antd';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../AffiliationList' was resolved to '/User... Remove this comment to see the full error message
import AffiliationList from '../AffiliationList';
// @ts-expect-error ts-migrate(6142) FIXME: Module './UnlinkedAuthor' was resolved to '/Users/... Remove this comment to see the full error message
import UnlinkedAuthor from './UnlinkedAuthor';
// @ts-expect-error ts-migrate(6142) FIXME: Module './AuthorWithBAI' was resolved to '/Users/k... Remove this comment to see the full error message
import AuthorWithBAI from './AuthorWithBAI';
// @ts-expect-error ts-migrate(6142) FIXME: Module './LinkedAuthor' was resolved to '/Users/ka... Remove this comment to see the full error message
import LinkedAuthor from './LinkedAuthor';

class Author extends Component {
  renderRoleSuffix() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'author' does not exist on type 'Readonly... Remove this comment to see the full error message
    const { author } = this.props;
    const roles = author.get('inspire_roles', []);

    if (roles.indexOf('editor') > -1) {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      return <Tooltip title="editor">(ed.)</Tooltip>;
    }

    return null;
  }

  renderAffiliationsList() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'author' does not exist on type 'Readonly... Remove this comment to see the full error message
    const { author } = this.props;
    const affiliations = author.get('affiliations');
    return (
      affiliations && (
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <span className="pl1 secondary-color">
          (
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <AffiliationList affiliations={affiliations} />
          )
        </span>
      )
    );
  }

  renderAuthorName() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'author' does not exist on type 'Readonly... Remove this comment to see the full error message
    const { author } = this.props;
    if (author.has('record')) {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      return <LinkedAuthor author={author} />;
    }
    if (author.has('bai')) {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      return <AuthorWithBAI author={author} />;
    }
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return <UnlinkedAuthor author={author} />;
  }

  render() {
    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div className="di">
        {this.renderAuthorName()}
        {this.renderAffiliationsList()}
        {this.renderRoleSuffix()}
      </div>
    );
  }
}

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
Author.propTypes = {
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'typeof Map' is not assignable to... Remove this comment to see the full error message
  author: PropTypes.instanceOf(Map).isRequired,
};

export default Author;
