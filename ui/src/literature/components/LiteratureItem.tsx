import React, { Fragment, useContext } from 'react';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import { Tooltip } from 'antd';
import {
  FilePdfOutlined,
  FileExclamationTwoTone,
  DatabaseOutlined,
} from '@ant-design/icons';

// @ts-expect-error ts-migrate(6142) FIXME: Module './ArxivEprintList' was resolved to '/Users... Remove this comment to see the full error message
import ArxivEprintList from './ArxivEprintList';
// @ts-expect-error ts-migrate(6142) FIXME: Module './LiteratureDate' was resolved to '/Users/... Remove this comment to see the full error message
import LiteratureDate from './LiteratureDate';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/PublicNotesList/Pu... Remove this comment to see the full error message
import PublicNotesList from '../../common/components/PublicNotesList/PublicNotesList';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/AuthorsAndCollabor... Remove this comment to see the full error message
import AuthorsAndCollaborations from '../../common/components/AuthorsAndCollaborations';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/PublicationInfoLis... Remove this comment to see the full error message
import PublicationInfoList from '../../common/components/PublicationInfoList';
// @ts-expect-error ts-migrate(6142) FIXME: Module './BookSeriesInfoList' was resolved to '/Us... Remove this comment to see the full error message
import BookSeriesInfoList from './BookSeriesInfoList';
// @ts-expect-error ts-migrate(6142) FIXME: Module './UrlsAction' was resolved to '/Users/karo... Remove this comment to see the full error message
import UrlsAction from './UrlsAction';
// @ts-expect-error ts-migrate(6142) FIXME: Module './DOILinkAction' was resolved to '/Users/k... Remove this comment to see the full error message
import DOILinkAction from './DOILinkAction';
// @ts-expect-error ts-migrate(2691) FIXME: An import path cannot end with a '.tsx' extension.... Remove this comment to see the full error message
import EditRecordAction from '../../common/components/EditRecordAction.tsx';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/ResultItem' was re... Remove this comment to see the full error message
import ResultItem from '../../common/components/ResultItem';
import { LITERATURE } from '../../common/routes';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/LiteratureTitle' w... Remove this comment to see the full error message
import LiteratureTitle from '../../common/components/LiteratureTitle';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/ResponsiveView' wa... Remove this comment to see the full error message
import ResponsiveView from '../../common/components/ResponsiveView';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../containers/CiteModalActionContainer' wa... Remove this comment to see the full error message
import CiteModalActionContainer from '../containers/CiteModalActionContainer';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/IncomingLiterature... Remove this comment to see the full error message
import IncomingLiteratureReferencesLinkAction from '../../common/components/IncomingLiteratureReferencesLinkAction';
// @ts-expect-error ts-migrate(6142) FIXME: Module './ConferenceInfoList' was resolved to '/Us... Remove this comment to see the full error message
import ConferenceInfoList from './ConferenceInfoList';
import { getPapersQueryString } from '../utils';
import {
  InlineUL,
  SEPARATOR_MIDDLEDOT,
} from '../../common/components/InlineList';
import AssignAuthorViewContext from '../../authors/AssignViewContext';
import AssignViewOwnProfileContext from '../../authors/assignViewOwnProfileContext';
import AssignViewDifferentProfileContext from '../../authors/assignViewDifferentProfileContext';
import AssignViewNotLoggedInContext from '../../authors/assignViewNotLoggedInContext';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../authors/containers/AssignOneActionCo... Remove this comment to see the full error message
import AssignOneActionContainer from '../../authors/containers/AssignOneActionContainer';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../authors/containers/AssignOneOwnProfi... Remove this comment to see the full error message
import AssignOneOwnProfileContainer from '../../authors/containers/AssignOneOwnProfileContainer';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../authors/containers/AssignOneDifferen... Remove this comment to see the full error message
import AssignOneDifferentProfileContainer from '../../authors/containers/AssignOneDifferentProfileContainer';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../authors/components/AssignNoProfileAc... Remove this comment to see the full error message
import AssignNoProfileAction from '../../authors/components/AssignNoProfileAction';
import AssignViewNoProfileContext from '../../authors/assignViewNoProfileContext';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../authors/components/ClaimingDisabledB... Remove this comment to see the full error message
import ClaimingDisabledButton from '../../authors/components/ClaimingDisabledButton';

function LiteratureItem({
  metadata,
  searchRank,
  isCatalogerLoggedIn
}: any) {
  const title = metadata.getIn(['titles', 0]);
  const authors = metadata.get('authors');

  const fullTextLinks = metadata.get('fulltext_links');
  const urls = metadata.get('urls');
  const dois = metadata.get('dois');
  const recordId = metadata.get('control_number');
  const citationCount = metadata.get('citation_count', 0);
  const authorCount = metadata.get('number_of_authors');
  const conferenceInfo = metadata.get('conference_info');
  const publicNotes = metadata.get('public_notes');

  const date = metadata.get('date');
  const publicationInfo = metadata.get('publication_info');
  const bookSeries = metadata.get('book_series');
  const eprints = metadata.get('arxiv_eprints');
  const collaborations = metadata.get('collaborations');
  const collaborationsWithSuffix = metadata.get('collaborations_with_suffix');
  const canEdit = metadata.get('can_edit', false);
  const datasetLinks = metadata.get('dataset_links');

  const curatedRelation = metadata.get('curated_relation', false);
  const canClaimDifferentProfile = metadata.get('can_claim', false);

  const assignAuthorView = useContext(AssignAuthorViewContext);
  const assignOwnProfileView = useContext(AssignViewOwnProfileContext);
  const assignDifferentProfileView = useContext(
    AssignViewDifferentProfileContext
  );
  const assignNoProfileView = useContext(AssignViewNoProfileContext);
  const assignNoProfileViewCondition =
    assignNoProfileView &&
    !assignOwnProfileView &&
    !assignAuthorView &&
    !assignDifferentProfileView;
  
  const assignNotLoggedInView = useContext(AssignViewNotLoggedInContext);
  const assignNotLoggedInViewCondition = assignNotLoggedInView && !assignNoProfileViewCondition;
  const publicationInfoWithTitle = publicationInfo
    ? publicationInfo.filter((pub: any) => pub.has('journal_title'))
    : null;

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <ResultItem
      // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
      leftActions={
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Fragment>
          {fullTextLinks && (
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <UrlsAction
              urls={fullTextLinks}
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              icon={<FilePdfOutlined />}
              text="pdf"
              trackerEventId="PdfDownload"
            />
          )}
          {urls && (
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <UrlsAction
              urls={urls}
              text="links"
              trackerEventId="LiteratureFileLink"
            />
          )}
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          {dois && <DOILinkAction dois={dois} />}
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <CiteModalActionContainer recordId={recordId} />
          {datasetLinks && (
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <UrlsAction
              urls={datasetLinks}
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              icon={<DatabaseOutlined />}
              text="datasets"
            />
          )}
          {canEdit && (
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <EditRecordAction pidType="literature" pidValue={recordId} />
          )}
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          {assignAuthorView && <AssignOneActionContainer recordId={recordId} />}
          {assignOwnProfileView && !assignAuthorView && (
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <AssignOneOwnProfileContainer
              recordId={recordId}
              disabledAssignAction={curatedRelation}
            />
          )}
          {assignDifferentProfileView && !assignOwnProfileView && (
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <AssignOneDifferentProfileContainer
              recordId={recordId}
              claimingClaimedPapersDisabled={!curatedRelation}
              claimingUnclaimedPapersDisabled={curatedRelation}
              userCanNotClaimProfile={!canClaimDifferentProfile}
            />
          )}
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          {assignNoProfileViewCondition && <AssignNoProfileAction />}
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          {assignNotLoggedInViewCondition && <ClaimingDisabledButton />}
        </Fragment>
      }
      rightActions={
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Fragment>
          {citationCount != null && (
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <IncomingLiteratureReferencesLinkAction
              linkQuery={getPapersQueryString(recordId)}
              referenceType="citation"
              itemCount={citationCount}
              trackerEventId="Citations:Search"
            />
          )}
        </Fragment>
      }
    >
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div data-test-id="literature-result-item">
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className="flex flex-nowrap">
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <div className="flex-grow-1">
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Link
              data-test-id="literature-result-title-link"
              className="result-item-title"
              to={`${LITERATURE}/${recordId}`}
            >
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <LiteratureTitle title={title} />
              {(assignAuthorView || assignOwnProfileView) && !curatedRelation && (
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Tooltip title="Unclaimed paper. Click on the Claim button to claim or remove it from the profile">
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <FileExclamationTwoTone className="ml1" />
                </Tooltip>
              )}
            </Link>
          </div>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <ResponsiveView
            min="sm"
            render={() => (
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <div
                data-test-id="literature-result-rank"
                className="light-silver pl2"
              >
                #{searchRank}
              </div>
            )}
          />
        </div>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className="mt1">
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <AuthorsAndCollaborations
            // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
            authorCount={authorCount}
            authors={authors}
            collaborations={collaborations}
            collaborationsWithSuffix={collaborationsWithSuffix}
          />
          {date && (
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <>
              {' ('}
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <LiteratureDate date={date} />)
            </>
          )}
        </div>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className="mt1">
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <InlineUL separator={SEPARATOR_MIDDLEDOT}>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            {bookSeries && <BookSeriesInfoList bookSeries={bookSeries} />}
            {publicationInfoWithTitle && publicationInfoWithTitle.size > 0 && (
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <PublicationInfoList publicationInfo={publicationInfoWithTitle} />
            )}
            {conferenceInfo && (
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <ConferenceInfoList conferenceInfo={conferenceInfo} />
            )}
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            {eprints && <ArxivEprintList eprints={eprints} />}
          </InlineUL>
        </div>
        {isCatalogerLoggedIn && (
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <div className="mt1">
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <InlineUL separator={SEPARATOR_MIDDLEDOT}>
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <PublicNotesList publicNotes={publicNotes} />
            </InlineUL>
          </div>
        )}
      </div>
    </ResultItem>
  );
}

LiteratureItem.propTypes = {
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'typeof Map' is not assignable to... Remove this comment to see the full error message
  metadata: PropTypes.instanceOf(Map).isRequired,
  searchRank: PropTypes.number.isRequired,
  isCatalogerLoggedIn: PropTypes.bool,
};

export default LiteratureItem;
