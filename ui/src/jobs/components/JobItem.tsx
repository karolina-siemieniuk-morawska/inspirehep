import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Map } from 'immutable';
import { Row, Col } from 'antd';

import ResultItem from '../../common/components/ResultItem';
import DateFromNow from './DateFromNow';
import { JOBS } from '../../common/routes';
import DeadlineDate from './DeadlineDate';
import InstitutionsList from './InstitutionsList';
import RegionsList from './RegionsList';
import ArxivCategoryList from '../../common/components/ArxivCategoryList';
import RanksList from './RanksList';
import ExperimentList from '../../common/components/ExperimentList';
// @ts-expect-error ts-migrate(2691) FIXME: An import path cannot end with a '.tsx' extension.... Remove this comment to see the full error message
import EditRecordAction from '../../common/components/EditRecordAction.tsx';
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
      <ResultItem
        // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
        leftActions={
          canEdit && <EditRecordAction pidType="jobs" pidValue={recordId} />
        }
      >
        // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
        <Row type="flex" align="middle">
          <Col>
            <Link className="result-item-title pr1" to={`${JOBS}/${recordId}`}>
              // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
              <JobTitle position={position} externalJobId={externalJobId} />
            </Link>
          </Col>
          <Col>
            // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
            (<InlineUL wrapperClassName="di" separator={SEPARATOR_MIDDLEDOT}>
              // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
              {institutions && <InstitutionsList institutions={institutions} />}
              // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
              <RegionsList regions={regions} />
            </InlineUL>)
          </Col>
        </Row>
        <Row className="mt2">
          <Col>
            <ArxivCategoryList
              // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
              arxivCategories={arxivCategories}
              wrapperClassName="di"
            />
            // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
            <InlineUL separator={SEPARATOR_MIDDLEDOT} wrapperClassName="di">
              // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
              {experiments && <ExperimentList experiments={experiments} />}
              // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
              {ranks && <RanksList ranks={ranks} />}
            </InlineUL>
          </Col>
        </Row>
        // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
        <Row className="mt3" type="flex" justify="space-between">
          <Col>
            // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
            <DeadlineDate deadlineDate={deadlineDate} />
          </Col>
          <Col>
            // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
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
