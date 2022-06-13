import React from 'react';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import { Row, Col } from 'antd';
import { VideoCameraAddOutlined, FileOutlined } from '@ant-design/icons';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/DocumentHead' was ... Remove this comment to see the full error message
import DocumentHead from '../../common/components/DocumentHead';
import fetchSeminar from '../../actions/seminars';
import ContentBox from '../../common/components/ContentBox';
// @ts-expect-error ts-migrate(2691) FIXME: An import path cannot end with a '.tsx' extension.... Remove this comment to see the full error message
import EditRecordAction from '../../common/components/EditRecordAction.tsx';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/DeletedAlert' was ... Remove this comment to see the full error message
import DeletedAlert from '../../common/components/DeletedAlert';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/withRouteActionsDispatcher' w... Remove this comment to see the full error message
import withRouteActionsDispatcher from '../../common/withRouteActionsDispatcher';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/AuthorList' was re... Remove this comment to see the full error message
import AuthorList from '../../common/components/AuthorList';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/Address' was resol... Remove this comment to see the full error message
import Address from '../../common/components/Address';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../conferences/components/InspireCatego... Remove this comment to see the full error message
import InspireCategoryList from '../../conferences/components/InspireCategoryList';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../literature/components/Abstract' was ... Remove this comment to see the full error message
import Abstract from '../../literature/components/Abstract';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/EventSeries' was r... Remove this comment to see the full error message
import EventSeries from '../../common/components/EventSeries';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/ContactList' was r... Remove this comment to see the full error message
import ContactList from '../../common/components/ContactList';
import PublicNotesList from '../../common/components/PublicNotesList';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/KeywordList' was r... Remove this comment to see the full error message
import KeywordList from '../../common/components/KeywordList';
import {
  doTimezonesHaveDifferentTimes,
  makeCompliantMetaDescription,
} from '../../common/utils';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/EventTitle' was re... Remove this comment to see the full error message
import EventTitle from '../../common/components/EventTitle';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/SeminarDateTimes' was resolv... Remove this comment to see the full error message
import SeminarDateTimes from '../components/SeminarDateTimes';
import { LOCAL_TIMEZONE, SEMINARS_PID_TYPE } from '../../common/constants';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/ExportToCalendarAction/Expor... Remove this comment to see the full error message
import ExportToCalendarAction from '../components/ExportToCalendarAction/ExportToCalendarAction';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../literature/components/UrlsAction' wa... Remove this comment to see the full error message
import UrlsAction from '../../literature/components/UrlsAction';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/LiteratureRecordsList' was r... Remove this comment to see the full error message
import LiteratureRecordsList from '../components/LiteratureRecordsList';

function DetailPage({
  record
}: any) {
  const metadata = record.get('metadata');
  const title = metadata.get('title');
  const recordId = metadata.get('control_number');
  const canEdit = metadata.get('can_edit', false);
  const urls = metadata.get('urls');
  const joinUrls = metadata.get('join_urls');
  const speakers = metadata.get('speakers');
  const deleted = metadata.get('deleted');
  const address = metadata.get('address');
  const inspireCategories = metadata.get('inspire_categories');
  const abstract = metadata.get('abstract');
  const series = metadata.get('series');
  const contacts = metadata.get('contact_details');
  const keywords = metadata.get('keywords');
  const publicNotes = metadata.get('public_notes');
  const startDate = metadata.get('start_datetime');
  const endDate = metadata.get('end_datetime');
  const timezone = metadata.get('timezone');
  const literatureRecords = metadata.get('literature_records');
  const captioned = metadata.get('captioned');
  const materialUrls = metadata.get('material_urls');

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <DocumentHead
        // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
        title={title.get('title')}
        description={makeCompliantMetaDescription(
          abstract && abstract.get('value')
        )}
      />
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
                {joinUrls && (
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <UrlsAction
                    urls={joinUrls}
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    icon={<VideoCameraAddOutlined />}
                    text="join"
                  />
                )}
                {materialUrls && (
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <UrlsAction
                    urls={materialUrls}
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    icon={<FileOutlined />}
                    text="material"
                  />
                )}
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <ExportToCalendarAction seminar={metadata} />
                {canEdit && (
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <EditRecordAction pidType="seminars" pidValue={recordId} />
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
                  <EventTitle title={title} />
                </h2>
              </Col>
            </Row>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Row>
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Col>
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <AuthorList authors={speakers} />
              </Col>
            </Row>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Row>
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Col>
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <SeminarDateTimes
                  startDate={startDate}
                  endDate={endDate}
                  timezone={LOCAL_TIMEZONE}
                  displayTimezone
                />
                {doTimezonesHaveDifferentTimes(timezone, LOCAL_TIMEZONE) && (
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <>
                    {' '}
                    (
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <SeminarDateTimes
                      startDate={startDate}
                      endDate={endDate}
                      timezone={timezone}
                      displayTimezone
                    />
                    )
                  </>
                )}
              </Col>
            </Row>
            {address && (
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Row>
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Col>
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <Address address={address} />
                </Col>
              </Row>
            )}
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
            {abstract && (
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Row className="mt2">
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Col>
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <Abstract abstract={abstract} />
                </Col>
              </Row>
            )}
            {series && (
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Row className="mt3">
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Col>
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <EventSeries series={series} pidType={SEMINARS_PID_TYPE} />
                </Col>
              </Row>
            )}
            {literatureRecords && (
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Row className="mt2">
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Col>
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <LiteratureRecordsList
                    literatureRecords={literatureRecords}
                    // @ts-expect-error ts-migrate(2322) FIXME: Type '{ literatureRecords: any; wrapperClassName: ... Remove this comment to see the full error message
                    wrapperClassName="di"
                  />
                </Col>
              </Row>
            )}
            {captioned && (
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Row className="mt2">
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Col>Contains captions</Col>
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
    </>
  );
}

DetailPage.propTypes = {
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'typeof Map' is not assignable to... Remove this comment to see the full error message
  record: PropTypes.instanceOf(Map).isRequired,
};

const mapStateToProps = (state: any) => ({
  record: state.seminars.get('data')
});
const DetailPageContainer = connect(mapStateToProps)(DetailPage);

export default withRouteActionsDispatcher(DetailPageContainer, {
  routeParamSelector: ({
    id
  }: any) => id,
  routeActions: (id: any) => [fetchSeminar(id)],
  loadingStateSelector: (state: any) => !state.seminars.hasIn(['data', 'metadata']),
});
