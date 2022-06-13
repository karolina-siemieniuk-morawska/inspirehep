import React from 'react';
import PropTypes from 'prop-types';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Link } from 'react-router-dom';
import { Map, List } from 'immutable';
import { Row, Col } from 'antd';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/ResultItem' was re... Remove this comment to see the full error message
import ResultItem from '../../common/components/ResultItem';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/IncomingLiterature... Remove this comment to see the full error message
import IncomingLiteratureReferencesLinkAction from '../../common/components/IncomingLiteratureReferencesLinkAction';
import { EXPERIMENTS } from '../../common/routes';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/AffiliationList' w... Remove this comment to see the full error message
import AffiliationList from '../../common/components/AffiliationList';
import { SEPARATOR_MIDDLEDOT } from '../../common/components/InlineList';
// @ts-expect-error ts-migrate(6142) FIXME: Module './ExperimentCollaboration' was resolved to... Remove this comment to see the full error message
import ExperimentCollaboration from './ExperimentCollaboration';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../literature/components/UrlsAction' wa... Remove this comment to see the full error message
import UrlsAction from '../../literature/components/UrlsAction';
import { getPapersQueryString } from '../utils';

function ExperimentItem({
  metadata
}: any) {
  const legacyName = metadata.get('legacy_name');
  const recordId = metadata.get('control_number');
  const institutions = metadata.get('institutions', List());
  const longName = metadata.get('long_name');
  const collaboration = metadata.get('collaboration');
  const urls = metadata.get('urls');
  const papersCount = metadata.get('number_of_papers', 0);

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <ResultItem
      // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
      leftActions={
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <>
          {urls && (
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <UrlsAction
              urls={urls}
              text="links"
              trackerEventId="Experiments:Url"
            />
          )}
        </>
      }
      rightActions={
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <IncomingLiteratureReferencesLinkAction
          itemCount={papersCount}
          referenceType="paper"
          linkQuery={getPapersQueryString(recordId)}
          trackerEventId="Experiments:PapersLink"
        />
      }
    >
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Row>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Col>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Link className="result-item-title" to={`${EXPERIMENTS}/${recordId}`}>
            {legacyName}
          </Link>
          {institutions.size > 0 && (
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <span className="pl1">
              (
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <AffiliationList
                // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
                affiliations={institutions}
                separator={SEPARATOR_MIDDLEDOT}
              />
              )
            </span>
          )}
        </Col>
      </Row>
      {longName && (
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Row>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Col>{longName}</Col>
        </Row>
      )}
      {collaboration && (
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Row>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Col>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <ExperimentCollaboration collaboration={collaboration} />
          </Col>
        </Row>
      )}
    </ResultItem>
  );
}

ExperimentItem.propTypes = {
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'typeof Map' is not assignable to... Remove this comment to see the full error message
  metadata: PropTypes.instanceOf(Map).isRequired,
};

export default ExperimentItem;
