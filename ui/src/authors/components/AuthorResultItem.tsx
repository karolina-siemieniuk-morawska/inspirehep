import React, { Component } from 'react';
import PropTypes from 'prop-types';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Link } from 'react-router-dom';
import { Map, List } from 'immutable';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/ResultItem' was re... Remove this comment to see the full error message
import ResultItem from '../../common/components/ResultItem';
// @ts-expect-error ts-migrate(6142) FIXME: Module './AuthorName' was resolved to '/Users/karo... Remove this comment to see the full error message
import AuthorName from './AuthorName';
import { getCurrentAffiliationsFromPositions } from '../utils';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/ArxivCategoryList'... Remove this comment to see the full error message
import ArxivCategoryList from '../../common/components/ArxivCategoryList';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/ExperimentList' wa... Remove this comment to see the full error message
import ExperimentList from '../../common/components/ExperimentList';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/AffiliationList' w... Remove this comment to see the full error message
import AffiliationList from '../../common/components/AffiliationList';
// @ts-expect-error ts-migrate(2691) FIXME: An import path cannot end with a '.tsx' extension.... Remove this comment to see the full error message
import EditAuthorRecordAction from './EditAuthorRecordAction.tsx';

class AuthorResultItem extends Component {
  render() {
    // TODO: add a Context for `openDetailInNewTab` and use it to make all internal links `target=_blank`
    // for example: right now author profile opens on a new tab, but the detail page of author's affiliation.
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'metadata' does not exist on type 'Readon... Remove this comment to see the full error message
    const { metadata, openDetailInNewTab, isCatalogerLoggedIn } = this.props;

    const name = metadata.get('name');
    const recordId = metadata.get('control_number');
    const currentPositions = getCurrentAffiliationsFromPositions(
      metadata.get('positions', List())
    );
    const arxivCategories = metadata.get('arxiv_categories');
    const experiments = metadata.get('project_membership');
    const canEdit = metadata.get('can_edit');

    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <ResultItem
        // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
        leftActions={
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <EditAuthorRecordAction
            pidValue={recordId}
            canEdit={canEdit}
            isCatalogerLoggedIn={isCatalogerLoggedIn}
          />
        }
      >
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Link
          className="result-item-title"
          to={`/authors/${recordId}`}
          target={openDetailInNewTab ? '_blank' : null}
        >
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <AuthorName name={name} />
        </Link>
        {currentPositions.size > 0 && (
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <span className="pl1">
            (
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <AffiliationList affiliations={currentPositions} />)
          </span>
        )}
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className="mt1">
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <ArxivCategoryList arxivCategories={arxivCategories} />
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <ExperimentList experiments={experiments} />
        </div>
      </ResultItem>
    );
  }
}

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
AuthorResultItem.propTypes = {
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'typeof Map' is not assignable to... Remove this comment to see the full error message
  metadata: PropTypes.instanceOf(Map).isRequired,
  openDetailInNewTab: PropTypes.bool,
  isCatalogerLoggedIn: PropTypes.bool,
};

// @ts-expect-error ts-migrate(2339) FIXME: Property 'defaultProps' does not exist on type 'ty... Remove this comment to see the full error message
AuthorResultItem.defaultProps = {
  openDetailInNewTab: false,
};

export default AuthorResultItem;
