import React from 'react';
import PropTypes from 'prop-types';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { connect } from 'react-redux';
import { Row, Col, Tabs } from 'antd';
import { Map, List } from 'immutable';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'clas... Remove this comment to see the full error message
import classNames from 'classnames';
import { FilePdfOutlined, DatabaseOutlined } from '@ant-design/icons';

import './DetailPage.scss';
import {
  fetchLiterature,
  fetchLiteratureAuthors,
  fetchLiteratureReferences,
} from '../../../actions/literature';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../components/Abstract' was resolved to... Remove this comment to see the full error message
import Abstract from '../../components/Abstract';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../components/ArxivEprintList' was reso... Remove this comment to see the full error message
import ArxivEprintList from '../../components/ArxivEprintList';
// @ts-expect-error ts-migrate(2691) FIXME: An import path cannot end with a '.tsx' extension.... Remove this comment to see the full error message
import EditRecordAction from '../../../common/components/EditRecordAction.tsx';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../components/DOIList' was resolved to ... Remove this comment to see the full error message
import DOIList from '../../components/DOIList';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../../common/components/AuthorsAndColla... Remove this comment to see the full error message
import AuthorsAndCollaborations from '../../../common/components/AuthorsAndCollaborations';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../components/ExternalSystemIdentifierL... Remove this comment to see the full error message
import ExternalSystemIdentifierList from '../../components/ExternalSystemIdentifierList';
import ContentBox from '../../../common/components/ContentBox';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../components/LiteratureDate' was resol... Remove this comment to see the full error message
import LiteratureDate from '../../components/LiteratureDate';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../../common/components/KeywordList' wa... Remove this comment to see the full error message
import KeywordList from '../../../common/components/KeywordList';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../../common/components/PublicationInfo... Remove this comment to see the full error message
import PublicationInfoList from '../../../common/components/PublicationInfoList';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../components/ReportNumberList' was res... Remove this comment to see the full error message
import ReportNumberList from '../../components/ReportNumberList';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../components/ThesisInfo' was resolved ... Remove this comment to see the full error message
import ThesisInfo from '../../components/ThesisInfo';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../components/IsbnList' was resolved to... Remove this comment to see the full error message
import IsbnList from '../../components/IsbnList';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../components/ConferenceInfoList' was r... Remove this comment to see the full error message
import ConferenceInfoList from '../../components/ConferenceInfoList';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../components/NumberOfPages' was resolv... Remove this comment to see the full error message
import NumberOfPages from '../../components/NumberOfPages';
import TabNameWithCount from '../../../common/components/TabNameWithCount';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../../common/components/ExperimentList'... Remove this comment to see the full error message
import ExperimentList from '../../../common/components/ExperimentList';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../../common/components/LiteratureTitle... Remove this comment to see the full error message
import LiteratureTitle from '../../../common/components/LiteratureTitle';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../CiteModalActionContainer' was resolved ... Remove this comment to see the full error message
import CiteModalActionContainer from '../CiteModalActionContainer';
import { fetchCitationsByYear } from '../../../actions/citations';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../../common/containers/CitationsByYear... Remove this comment to see the full error message
import CitationsByYearGraphContainer from '../../../common/containers/CitationsByYearGraphContainer';
import Figures from '../../components/Figures';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../../common/components/RequireOneOf' w... Remove this comment to see the full error message
import RequireOneOf from '../../../common/components/RequireOneOf';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../../common/containers/ReferenceListCo... Remove this comment to see the full error message
import ReferenceListContainer from '../../../common/containers/ReferenceListContainer';
import PublicNotesList from '../../../common/components/PublicNotesList';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../components/UrlsAction' was resolved ... Remove this comment to see the full error message
import UrlsAction from '../../components/UrlsAction';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../../common/components/DeletedAlert' w... Remove this comment to see the full error message
import DeletedAlert from '../../../common/components/DeletedAlert';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../components/SupervisorList' was resol... Remove this comment to see the full error message
import SupervisorList from '../../components/SupervisorList';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../../common/withRouteActionsDispatcher... Remove this comment to see the full error message
import withRouteActionsDispatcher from '../../../common/withRouteActionsDispatcher';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../components/LiteratureDocumentHead' w... Remove this comment to see the full error message
import LiteratureDocumentHead from '../../components/LiteratureDocumentHead';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../../common/components/IncomingLiterat... Remove this comment to see the full error message
import IncomingLiteratureReferencesLinkAction from '../../../common/components/IncomingLiteratureReferencesLinkAction';
import { getPapersQueryString } from '../../utils';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../components/ParentRecordInfo' was res... Remove this comment to see the full error message
import ParentRecordInfo from '../../components/ParentRecordInfo';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../components/BookSeriesInfoList' was r... Remove this comment to see the full error message
import BookSeriesInfoList from '../../components/BookSeriesInfoList';
import { LITERATURE_SEMINARS_NS } from '../../../search/constants';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../components/LiteratureSeminars' was r... Remove this comment to see the full error message
import LiteratureSeminars from '../../components/LiteratureSeminars';
import { newSearch, searchBaseQueriesUpdate } from '../../../actions/search';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../components/ImprintInfo' was resolved... Remove this comment to see the full error message
import ImprintInfo from '../../components/ImprintInfo';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../components/LiteratureCollectionBanne... Remove this comment to see the full error message
import HiddenCollectionAlert from '../../components/LiteratureCollectionBanner';

function DetailPage({
  authors,
  record,
  referencesCount,
  supervisors,
  seminarsCount
}: any) {
  const metadata = record.get('metadata');

  const title = metadata.getIn(['titles', 0]);
  const date = metadata.get('date');
  const controlNumber = metadata.get('control_number');
  const thesisInfo = metadata.get('thesis_info');
  const isbns = metadata.get('isbns');
  const imprint = metadata.get('imprints');
  const publicationInfo = metadata.get('publication_info');
  const conferenceInfo = metadata.get('conference_info');
  const eprints = metadata.get('arxiv_eprints');
  const publicNotes = metadata.get('public_notes');
  const dois = metadata.get('dois');
  const reportNumbers = metadata.get('report_numbers');
  const numberOfPages = metadata.get('number_of_pages');
  const externalSystemIdentifiers = metadata.get('external_system_identifiers');
  const acceleratorExperiments = metadata.get('accelerator_experiments');
  const abstract = metadata.getIn(['abstracts', 0]);
  const fullTextLinks = metadata.get('fulltext_links');
  const urls = metadata.get('urls');
  const collaborations = metadata.get('collaborations');
  const collaborationsWithSuffix = metadata.get('collaborations_with_suffix');
  const linkedBook = metadata.get('linked_book');
  const bookSeries = metadata.get('book_series');
  const hiddenCollection = metadata.get('is_collection_hidden');
  const keywords = metadata.get('keywords');
  const authorCount = metadata.get('author_count');
  const citationCount = metadata.get('citation_count');

  const canEdit = metadata.get('can_edit', false);
  const figures = metadata.get('figures');
  const deleted = metadata.get('deleted', false);
  const datasetLinks = metadata.get('dataset_links');

  const publicationInfoWithTitle = publicationInfo
    ? publicationInfo.filter((pub: any) => pub.has('journal_title'))
    : null;

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <LiteratureDocumentHead
        metadata={metadata}
        created={record.get('created')}
      />
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Row className="__DetailPage__" type="flex" justify="center">
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Col xs={24} md={22} lg={21} xxl={18}>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Row className="mv3" type="flex" justify="center">
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Col span={24}>{hiddenCollection && <HiddenCollectionAlert />}</Col>
          </Row>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Row
            className="mv3"
            // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
            type="flex"
            justify="center"
            gutter={{ xs: 0, lg: 16, xl: 32 }}
          >
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Col xs={24} lg={16}>
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <ContentBox
                // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
                className="md-pb3"
                leftActions={
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <>
                    {fullTextLinks && (
                      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <UrlsAction
                        urls={fullTextLinks}
                        text="pdf"
                        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        icon={<FilePdfOutlined />}
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
                    <CiteModalActionContainer recordId={controlNumber} />
                    {canEdit && (
                      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <EditRecordAction
                        pidType="literature"
                        pidValue={controlNumber}
                      />
                    )}
                    {datasetLinks && (
                      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <UrlsAction
                        urls={datasetLinks}
                        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        icon={<DatabaseOutlined />}
                        text="datasets"
                      />
                    )}
                  </>
                }
                rightActions={
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <>
                    {citationCount != null && (
                      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <IncomingLiteratureReferencesLinkAction
                        linkQuery={getPapersQueryString(controlNumber)}
                        referenceType="citation"
                        itemCount={citationCount}
                        trackerEventId="Citations:Detail"
                      />
                    )}
                  </>
                }
              >
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Row>
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <Col span={24}>{deleted && <DeletedAlert />}</Col>
                </Row>
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <h2>
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <LiteratureTitle title={title} />
                </h2>
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div>
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <AuthorsAndCollaborations
                    // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
                    authorCount={authorCount}
                    authors={authors}
                    enableAuthorsShowAll
                    collaborations={collaborations}
                    collaborationsWithSuffix={collaborationsWithSuffix}
                  />
                </div>
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <LiteratureDate date={date} />
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div className="mt3">
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <NumberOfPages numberOfPages={numberOfPages} />
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <SupervisorList supervisors={supervisors} />
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <ThesisInfo thesisInfo={thesisInfo} />
                  {linkedBook && (
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <ParentRecordInfo
                      parentRecord={linkedBook}
                      // @ts-expect-error ts-migrate(2322) FIXME: Type '{ parentRecord: any; publicationInfo: any; }... Remove this comment to see the full error message
                      publicationInfo={publicationInfo}
                    />
                  )}
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  {bookSeries && <BookSeriesInfoList bookSeries={bookSeries} />}
                  {publicationInfoWithTitle &&
                    publicationInfoWithTitle.size > 0 && (
                      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <PublicationInfoList
                        // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
                        publicationInfo={publicationInfoWithTitle}
                      />
                    )}
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <ConferenceInfoList conferenceInfo={conferenceInfo} />
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <IsbnList isbns={isbns} />
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <ImprintInfo imprint={imprint} />
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <ArxivEprintList eprints={eprints} />
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <DOIList dois={dois} />
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <ReportNumberList reportNumbers={reportNumbers} />
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <ExperimentList experiments={acceleratorExperiments} />
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <ExternalSystemIdentifierList
                    // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
                    externalSystemIdentifiers={externalSystemIdentifiers}
                  />
                </div>
              </ContentBox>
            </Col>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Col xs={24} lg={8}>
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <ContentBox subTitle="Citations per year">
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <CitationsByYearGraphContainer />
              </ContentBox>
            </Col>
          </Row>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Row>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Col span={24}>
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <RequireOneOf dependencies={[abstract, publicNotes, keywords]}>
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <ContentBox>
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <div>
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Abstract abstract={abstract} />
                  </div>
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <div
                    className={classNames({
                      mt3: publicNotes,
                      mb3: keywords,
                    })}
                  >
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <PublicNotesList publicNotes={publicNotes} />
                  </div>
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <div>
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <KeywordList keywords={keywords} />
                  </div>
                </ContentBox>
              </RequireOneOf>
            </Col>
          </Row>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Row>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Col className="mt3" span={24}>
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Tabs
                type="card"
                tabBarStyle={{ marginBottom: 0 }}
                className="remove-top-border-of-card-children"
              >
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Tabs.TabPane
                  tab={
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <TabNameWithCount
                      // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
                      name="References"
                      count={referencesCount}
                    />
                  }
                  key="1"
                >
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <ReferenceListContainer recordId={controlNumber} />
                </Tabs.TabPane>
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Tabs.TabPane
                  tab={
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <TabNameWithCount
                      // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
                      name="Figures"
                      count={figures ? figures.size : 0}
                    />
                  }
                  key="2"
                >
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <ContentBox>
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Figures figures={figures} />
                  </ContentBox>
                </Tabs.TabPane>
                {seminarsCount > 0 && (
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <Tabs.TabPane tab={<span>Seminars</span>} key="3">
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <ContentBox>
                      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <LiteratureSeminars />
                    </ContentBox>
                  </Tabs.TabPane>
                )}
              </Tabs>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

DetailPage.propTypes = {
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'typeof Map' is not assignable to... Remove this comment to see the full error message
  record: PropTypes.instanceOf(Map).isRequired,
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'typeof List' is not assignable t... Remove this comment to see the full error message
  authors: PropTypes.instanceOf(List).isRequired,
  referencesCount: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'typeof List' is not assignable t... Remove this comment to see the full error message
  supervisors: PropTypes.instanceOf(List),
};

const mapStateToProps = (state: any) => ({
  record: state.literature.get('data'),
  authors: state.literature.get('authors'),
  supervisors: state.literature.get('supervisors'),
  referencesCount: state.literature.get('totalReferences'),

  loadingSeminars: state.search.getIn([
    'namespaces',
    LITERATURE_SEMINARS_NS,
    'loading',
  ]),

  seminarsCount: state.search.getIn([
    'namespaces',
    LITERATURE_SEMINARS_NS,
    'initialTotal',
  ])
});

const DetailPageContainer = connect(mapStateToProps)(DetailPage);

export default withRouteActionsDispatcher(DetailPageContainer, {
  routeParamSelector: ({
    id
  }: any) => id,
  routeActions: (id: any) => [
    fetchLiterature(id),
    fetchLiteratureReferences(id),
    fetchLiteratureAuthors(id),
    fetchCitationsByYear({ q: `recid:${id}` }),
    newSearch(LITERATURE_SEMINARS_NS),
    searchBaseQueriesUpdate(LITERATURE_SEMINARS_NS, {
      baseQuery: { q: `literature_records.record.$ref:${id}` },
    }),
  ],
  loadingStateSelector: (state: any) => !state.literature.hasIn(['data', 'metadata']),
});
