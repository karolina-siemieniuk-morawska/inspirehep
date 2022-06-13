import React, { useMemo } from 'react';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import { Row, Col } from 'antd';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/withRouteActionsDispatcher' w... Remove this comment to see the full error message
import withRouteActionsDispatcher from '../../common/withRouteActionsDispatcher';
import fetchInstitution from '../../actions/institutions';
import ContentBox from '../../common/components/ContentBox';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/DocumentHead' was ... Remove this comment to see the full error message
import DocumentHead from '../../common/components/DocumentHead';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/InstitutionHierarchyList' wa... Remove this comment to see the full error message
import InstitutionHierarchyList from '../components/InstitutionHierarchyList';
// @ts-expect-error ts-migrate(6142) FIXME: Module './InstitutionPapers' was resolved to '/Use... Remove this comment to see the full error message
import InstitutionPapers from './InstitutionPapers';
import { newSearch } from '../../actions/search';
import { INSTITUTION_PAPERS_NS } from '../../search/constants';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/RequireOneOf' was ... Remove this comment to see the full error message
import RequireOneOf from '../../common/components/RequireOneOf';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/GridLink' was resolved to '/... Remove this comment to see the full error message
import GridLink from '../components/GridLink';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/RorLink' was resolved to '/U... Remove this comment to see the full error message
import RorLink from '../components/RorLink';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/InstitutionNameVariantsList'... Remove this comment to see the full error message
import InstitutionsNameVariantsList from '../components/InstitutionNameVariantsList';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/InstitutionPeople' was resol... Remove this comment to see the full error message
import InstitutionPeople from '../components/InstitutionPeople';
import { getInstitutionMetaDescription } from '../utils';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/InstitutionsHistoricalDataLi... Remove this comment to see the full error message
import InstitutionsHistoricalDataList from '../components/InstitutionsHistoricalDataList';
import PublicNotesList from '../../common/components/PublicNotesList';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/InstitutionAddressList' was ... Remove this comment to see the full error message
import InstitutionAddressList from '../components/InstitutionAddressList';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/containers/AuthorizedContaine... Remove this comment to see the full error message
import AuthorizedContainer from '../../common/containers/AuthorizedContainer';
import { SUPERUSER_OR_CATALOGER } from '../../common/authorization';
import { INSTITUTIONS_PID_TYPE } from '../../common/constants';
// @ts-expect-error ts-migrate(2691) FIXME: An import path cannot end with a '.tsx' extension.... Remove this comment to see the full error message
import EditRecordAction from '../../common/components/EditRecordAction.tsx';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/RelatedRecordsList... Remove this comment to see the full error message
import RelatedRecordsList from '../../common/components/RelatedRecordsList';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../literature/components/UrlsAction' wa... Remove this comment to see the full error message
import UrlsAction from '../../literature/components/UrlsAction';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/DeletedAlert' was ... Remove this comment to see the full error message
import DeletedAlert from '../../common/components/DeletedAlert';

function DetailPage({
  record
}: any) {
  const metadata = record.get('metadata');

  const urls = metadata.get('urls');
  const controlNumber = metadata.get('control_number');
  const legacyIcn = metadata.get('legacy_ICN');
  const addresses = metadata.get('addresses');
  const hierarchies = metadata.get('institution_hierarchy');
  const grid = metadata.get('grid');
  const ror = metadata.get('ror');
  const nameVariants = metadata.get('name_variants');
  const parentInstitutions = metadata.get('parent_institutions');
  const successorInstitutitons = metadata.get('successor_institutions');
  const predecessorInstitutions = metadata.get('predecessor_institutions');
  const subsidiaryInstitutions = metadata.get('subsidiary_institutions');
  const historicalData = metadata.get('historical_data');
  const publicNotes = metadata.get('public_notes');
  const metaDescription = useMemo(
    () => getInstitutionMetaDescription(metadata),
    [metadata]
  );
  const deleted = metadata.get('deleted', false);
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <DocumentHead title={legacyIcn} description={metaDescription} />
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Row justify="center">
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
                <AuthorizedContainer authorizedRoles={SUPERUSER_OR_CATALOGER}>
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <EditRecordAction
                    pidType={INSTITUTIONS_PID_TYPE}
                    pidValue={controlNumber}
                  />
                </AuthorizedContainer>
              </>
            }
          >
            {deleted && (
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Row>
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Col span={24}>
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <DeletedAlert />
                </Col>
              </Row>
            )}
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Row>
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Col>
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <h2>{legacyIcn}</h2>
              </Col>
            </Row>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Row>
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Col>
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <InstitutionHierarchyList hierarchies={hierarchies} />
              </Col>
            </Row>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Row>
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Col>
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <InstitutionAddressList addresses={addresses} />
              </Col>
            </Row>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <RequireOneOf
              dependencies={[
                grid,
                ror,
                nameVariants,
                parentInstitutions,
                successorInstitutitons,
                predecessorInstitutions,
                publicNotes,
                historicalData,
              ]}
            >
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Row className="mt3">
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Col>
                  {grid && (
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Row>
                      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <GridLink grid={grid} />
                    </Row>
                  )}
                  {ror && (
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Row>
                      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <RorLink ror={ror} />
                    </Row>
                  )}
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <InstitutionsNameVariantsList nameVariants={nameVariants} />
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <InstitutionsHistoricalDataList
                    historicalData={historicalData}
                  />
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <PublicNotesList publicNotes={publicNotes} />
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <RelatedRecordsList
                    relatedRecords={parentInstitutions}
                    relationType="Parent"
                    label="Institution"
                    pidType={INSTITUTIONS_PID_TYPE}
                  />
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <RelatedRecordsList
                    relatedRecords={subsidiaryInstitutions}
                    relationType="Subsidiary"
                    label="Institution"
                    pidType={INSTITUTIONS_PID_TYPE}
                  />
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <RelatedRecordsList
                    relatedRecords={successorInstitutitons}
                    relationType="Successor"
                    label="Institution"
                    pidType={INSTITUTIONS_PID_TYPE}
                  />
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <RelatedRecordsList
                    relatedRecords={predecessorInstitutions}
                    relationType="Predecessor"
                    label="Institution"
                    pidType={INSTITUTIONS_PID_TYPE}
                  />
                </Col>
              </Row>
            </RequireOneOf>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Row className="mt3">
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Col>
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <InstitutionPeople recordId={controlNumber} />
              </Col>
            </Row>
          </ContentBox>
        </Col>
      </Row>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Row justify="center">
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Col xs={24} md={22} lg={21} xxl={18}>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <ContentBox>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <InstitutionPapers recordId={controlNumber} />
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
  record: state.institutions.get('data')
});
const DetailPageContainer = connect(mapStateToProps)(DetailPage);

export default withRouteActionsDispatcher(DetailPageContainer, {
  routeParamSelector: ({
    id
  }: any) => id,
  routeActions: (id: any) => [fetchInstitution(id), newSearch(INSTITUTION_PAPERS_NS)],
  loadingStateSelector: (state: any) => !state.institutions.hasIn(['data', 'metadata']),
});
