import React from 'react';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import { Row, Col } from 'antd';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/DocumentHead' was ... Remove this comment to see the full error message
import DocumentHead from '../../common/components/DocumentHead';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/ConferenceDates' was resolve... Remove this comment to see the full error message
import ConferenceDates from '../components/ConferenceDates';
import fetchConference from '../../actions/conferences';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/InspireCategoryList' was res... Remove this comment to see the full error message
import InspireCategoryList from '../components/InspireCategoryList';
import ContentBox from '../../common/components/ContentBox';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/RichDescription' w... Remove this comment to see the full error message
import RichDescription from '../../common/components/RichDescription';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/EventSeries' was r... Remove this comment to see the full error message
import EventSeries from '../../common/components/EventSeries';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/ContactList' was r... Remove this comment to see the full error message
import ContactList from '../../common/components/ContactList';
import PublicNotesList from '../../common/components/PublicNotesList';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/KeywordList' was r... Remove this comment to see the full error message
import KeywordList from '../../common/components/KeywordList';
// @ts-expect-error ts-migrate(2691) FIXME: An import path cannot end with a '.tsx' extension.... Remove this comment to see the full error message
import EditRecordAction from '../../common/components/EditRecordAction.tsx';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/ProceedingsAction' was resol... Remove this comment to see the full error message
import ProceedingsAction from '../components/ProceedingsAction';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/AddressList' was r... Remove this comment to see the full error message
import AddressList from '../../common/components/AddressList';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/ConferenceContributions' was... Remove this comment to see the full error message
import ConferenceContributions from '../components/ConferenceContributions';
import { newSearch } from '../../actions/search';
import { CONFERENCE_CONTRIBUTIONS_NS } from '../../search/constants';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/DeletedAlert' was ... Remove this comment to see the full error message
import DeletedAlert from '../../common/components/DeletedAlert';
import { makeCompliantMetaDescription } from '../../common/utils';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/withRouteActionsDispatcher' w... Remove this comment to see the full error message
import withRouteActionsDispatcher from '../../common/withRouteActionsDispatcher';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/EventTitle' was re... Remove this comment to see the full error message
import EventTitle from '../../common/components/EventTitle';
import { CONFERENCES_PID_TYPE } from '../../common/constants';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../literature/components/UrlsAction' wa... Remove this comment to see the full error message
import UrlsAction from '../../literature/components/UrlsAction';

function DetailPage({
  record
}: any) {
  const metadata = record.get('metadata');
  const controlNumber = metadata.get('control_number');
  const title = metadata.getIn(['titles', 0]);
  const acronym = metadata.getIn(['acronyms', 0]);
  const openingDate = metadata.get('opening_date');
  const closingDate = metadata.get('closing_date');
  const addresses = metadata.get('addresses');
  const cnum = metadata.get('cnum');
  const description = metadata.getIn(['short_description', 'value']);
  const inspireCategories = metadata.get('inspire_categories');
  const series = metadata.get('series');
  const contacts = metadata.get('contact_details');
  const publicNotes = metadata.get('public_notes');
  const keywords = metadata.get('keywords');
  const urls = metadata.get('urls');
  const proceedings = metadata.get('proceedings');
  const canEdit = metadata.get('can_edit', false);
  const deleted = metadata.get('deleted', false);

  const metaDescription = makeCompliantMetaDescription(description);

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <DocumentHead title={title.get('title')} description={metaDescription} />
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Row type="flex" justify="center">
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Col className="mv3" xs={24} md={22} lg={21} xxl={18}>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <ContentBox
            // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
            className="sm-pb3"
            leftActions={
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <>
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                {urls && <UrlsAction urls={urls} />}
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                {proceedings && <ProceedingsAction proceedings={proceedings} />}
                {canEdit && (
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <EditRecordAction
                    pidType="conferences"
                    pidValue={controlNumber}
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
            <Row>
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Col>
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <h2>
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <EventTitle title={title} acronym={acronym} />
                </h2>
              </Col>
            </Row>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Row>
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Col>
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <ConferenceDates
                  openingDate={openingDate}
                  closingDate={closingDate}
                />
                {addresses && (
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <>
                    {'. '}
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <AddressList addresses={addresses} />
                  </>
                )}
                {cnum && ` (${cnum})`}
              </Col>
            </Row>
            {inspireCategories && (
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Row className="mt2">
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Col>
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <InspireCategoryList
                    categories={inspireCategories}
                    // @ts-expect-error ts-migrate(2322) FIXME: Type '{ categories: any; wrapperClassName: string;... Remove this comment to see the full error message
                    wrapperClassName="di"
                  />
                </Col>
              </Row>
            )}
            {description && (
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Row className="mt3">
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Col>
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <RichDescription>{description}</RichDescription>
                </Col>
              </Row>
            )}
            {series && (
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Row className="mt3">
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Col>
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <EventSeries series={series} pidType={CONFERENCES_PID_TYPE} />
                </Col>
              </Row>
            )}
            {contacts && (
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Row className="mt2">
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Col>
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <ContactList contacts={contacts} />
                </Col>
              </Row>
            )}
            {publicNotes && (
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Row className="mt2">
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Col>
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <PublicNotesList publicNotes={publicNotes} />
                </Col>
              </Row>
            )}
            {keywords && (
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Row className="mt2">
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Col>
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <KeywordList keywords={keywords} />
                </Col>
              </Row>
            )}
          </ContentBox>
        </Col>
      </Row>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Row type="flex" justify="center">
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Col xs={24} md={22} lg={21} xxl={18}>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <ContentBox>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <ConferenceContributions conferenceRecordId={controlNumber} />
          </ContentBox>
        </Col>
      </Row>
    </>
  );
}

DetailPage.propTypes = {
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'typeof Map' is not assignable to... Remove this comment to see the full error message
  record: PropTypes.instanceOf(Map).isRequired,
};

const mapStateToProps = (state: any) => ({
  record: state.conferences.get('data')
});
const DetailPageContainer = connect(mapStateToProps)(DetailPage);

export default withRouteActionsDispatcher(DetailPageContainer, {
  routeParamSelector: ({
    id
  }: any) => id,
  routeActions: (id: any) => [
    fetchConference(id),
    newSearch(CONFERENCE_CONTRIBUTIONS_NS),
  ],
  loadingStateSelector: (state: any) => !state.conferences.hasIn(['data', 'metadata']),
});
