import React from 'react';
import PropTypes from 'prop-types';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Link } from 'react-router-dom';
import { Map } from 'immutable';
import { Row, Col } from 'antd';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/ResultItem' was re... Remove this comment to see the full error message
import ResultItem from '../../common/components/ResultItem';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/IncomingLiterature... Remove this comment to see the full error message
import IncomingLiteratureReferencesLinkAction from '../../common/components/IncomingLiteratureReferencesLinkAction';
import { INSTITUTIONS } from '../../common/routes';
import ListItemAction from '../../common/components/ListItemAction';
// @ts-expect-error ts-migrate(6142) FIXME: Module './InstitutionHierarchyList' was resolved t... Remove this comment to see the full error message
import InstitutionHierarchyList from './InstitutionHierarchyList';
// @ts-expect-error ts-migrate(6142) FIXME: Module './InstitutionAddressList' was resolved to ... Remove this comment to see the full error message
import InstitutionAddressList from './InstitutionAddressList';
// @ts-expect-error ts-migrate(2691) FIXME: An import path cannot end with a '.tsx' extension.... Remove this comment to see the full error message
import EditRecordAction from '../../common/components/EditRecordAction.tsx';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/containers/AuthorizedContaine... Remove this comment to see the full error message
import AuthorizedContainer from '../../common/containers/AuthorizedContainer';
import { SUPERUSER_OR_CATALOGER } from '../../common/authorization';
import { INSTITUTIONS_PID_TYPE } from '../../common/constants';
import { getPapersQueryString } from '../utils';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../literature/components/UrlsAction' wa... Remove this comment to see the full error message
import UrlsAction from '../../literature/components/UrlsAction';

function InstitutionItem({
  metadata
}: any) {
  const legacyIcn = metadata.get('legacy_ICN');
  const recordId = metadata.get('control_number');
  const addresses = metadata.get('addresses');
  const urls = metadata.get('urls');
  const hierarchies = metadata.get('institution_hierarchy');
  const papersCount = metadata.get('number_of_papers', 0);

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <ResultItem
      // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
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
              pidValue={recordId}
            />
          </AuthorizedContainer>
        </>
      }
      rightActions={
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <ListItemAction>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <IncomingLiteratureReferencesLinkAction
            itemCount={papersCount}
            referenceType="paper"
            linkQuery={getPapersQueryString(recordId)}
            trackerEventId="Institutions:PaperLink"
          />
        </ListItemAction>
      }
    >
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Row>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Col>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Link
            className="result-item-title"
            to={`${INSTITUTIONS}/${recordId}`}
          >
            {legacyIcn}
          </Link>
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
    </ResultItem>
  );
}

InstitutionItem.propTypes = {
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'typeof Map' is not assignable to... Remove this comment to see the full error message
  metadata: PropTypes.instanceOf(Map).isRequired,
};

export default InstitutionItem;
