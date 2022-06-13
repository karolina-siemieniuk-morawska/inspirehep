import React, { Component } from 'react';
import PropTypes from 'prop-types';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Link } from 'react-router-dom';
import { Map } from 'immutable';
import { Row, Col } from 'antd';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/ResultItem' was re... Remove this comment to see the full error message
import ResultItem from '../../common/components/ResultItem';
// @ts-expect-error ts-migrate(6142) FIXME: Module './DateFromNow' was resolved to '/Users/kar... Remove this comment to see the full error message
import DateFromNow from './DateFromNow';
import { JOBS } from '../../common/routes';
// @ts-expect-error ts-migrate(6142) FIXME: Module './DeadlineDate' was resolved to '/Users/ka... Remove this comment to see the full error message
import DeadlineDate from './DeadlineDate';
// @ts-expect-error ts-migrate(6142) FIXME: Module './InstitutionsList' was resolved to '/User... Remove this comment to see the full error message
import InstitutionsList from './InstitutionsList';
// @ts-expect-error ts-migrate(6142) FIXME: Module './RegionsList' was resolved to '/Users/kar... Remove this comment to see the full error message
import RegionsList from './RegionsList';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/ArxivCategoryList'... Remove this comment to see the full error message
import ArxivCategoryList from '../../common/components/ArxivCategoryList';
// @ts-expect-error ts-migrate(6142) FIXME: Module './RanksList' was resolved to '/Users/karol... Remove this comment to see the full error message
import RanksList from './RanksList';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/ExperimentList' wa... Remove this comment to see the full error message
import ExperimentList from '../../common/components/ExperimentList';
// @ts-expect-error ts-migrate(2691) FIXME: An import path cannot end with a '.tsx' extension.... Remove this comment to see the full error message
import EditRecordAction from '../../common/components/EditRecordAction.tsx';
// @ts-expect-error ts-migrate(6142) FIXME: Module './JobTitle' was resolved to '/Users/karoli... Remove this comment to see the full error message
import JobTitle from './JobTitle';
import {
  InlineUL,
  SEPARATOR_MIDDLEDOT,
} from '../../common/components/InlineList';

class JobItem extends Component {
  render() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'metadata' does not exist on type 'Readon... Remove this comment to see the full error message
    const { metadata, created } = this.props;

    const recordId = metadata.get('control_number');
    const position = metadata.get('position');
    const institutions = metadata.get('institutions');
    const regions = metadata.get('regions');
    const deadlineDate = metadata.get('deadline_date');
    const arxivCategories = metadata.get('arxiv_categories');
    const ranks = metadata.get('ranks');
    const experiments = metadata.get('accelerator_experiments');
    const canEdit = metadata.get('can_edit', false);
    const externalJobId = metadata.get('external_job_identifier');
    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <ResultItem
        // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
        leftActions={
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          canEdit && <EditRecordAction pidType="jobs" pidValue={recordId} />
        }
      >
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Row type="flex" align="middle">
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Col>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Link className="result-item-title pr1" to={`${JOBS}/${recordId}`}>
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <JobTitle position={position} externalJobId={externalJobId} />
            </Link>
          </Col>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Col>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            (<InlineUL wrapperClassName="di" separator={SEPARATOR_MIDDLEDOT}>
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              {institutions && <InstitutionsList institutions={institutions} />}
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <RegionsList regions={regions} />
            </InlineUL>)
          </Col>
        </Row>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Row className="mt2">
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Col>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <ArxivCategoryList
              // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
              arxivCategories={arxivCategories}
              wrapperClassName="di"
            />
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <InlineUL separator={SEPARATOR_MIDDLEDOT} wrapperClassName="di">
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              {experiments && <ExperimentList experiments={experiments} />}
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              {ranks && <RanksList ranks={ranks} />}
            </InlineUL>
          </Col>
        </Row>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Row className="mt3" type="flex" justify="space-between">
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Col>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <DeadlineDate deadlineDate={deadlineDate} />
          </Col>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Col>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            Posted <DateFromNow date={created} />
          </Col>
        </Row>
      </ResultItem>
    );
  }
}

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
JobItem.propTypes = {
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'typeof Map' is not assignable to... Remove this comment to see the full error message
  metadata: PropTypes.instanceOf(Map).isRequired,
  created: PropTypes.string.isRequired,
};

export default JobItem;
