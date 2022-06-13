import React, { Component } from 'react';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import { LoginOutlined } from '@ant-design/icons';

import { Row, Col } from 'antd';
// @ts-expect-error ts-migrate(2691) FIXME: An import path cannot end with a '.tsx' extension.... Remove this comment to see the full error message
import EditRecordAction from '../../common/components/EditRecordAction.tsx';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/ResultItem' was re... Remove this comment to see the full error message
import ResultItem from '../../common/components/ResultItem';
import { CONFERENCES, LITERATURE } from '../../common/routes';
// @ts-expect-error ts-migrate(6142) FIXME: Module './ConferenceDates' was resolved to '/Users... Remove this comment to see the full error message
import ConferenceDates from './ConferenceDates';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/AddressList' was r... Remove this comment to see the full error message
import AddressList from '../../common/components/AddressList';
// @ts-expect-error ts-migrate(6142) FIXME: Module './InspireCategoryList' was resolved to '/U... Remove this comment to see the full error message
import InspireCategoryList from './InspireCategoryList';
// @ts-expect-error ts-migrate(6142) FIXME: Module './ProceedingsAction' was resolved to '/Use... Remove this comment to see the full error message
import ProceedingsAction from './ProceedingsAction';
import pluralizeUnlessSingle from '../../common/utils';
import IconText from '../../common/components/IconText';
import ListItemAction from '../../common/components/ListItemAction';
import { getContributionsQueryString } from '../utils';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/EventTitle' was re... Remove this comment to see the full error message
import EventTitle from '../../common/components/EventTitle';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../literature/components/UrlsAction' wa... Remove this comment to see the full error message
import UrlsAction from '../../literature/components/UrlsAction';

class ConferenceItem extends Component {
  render() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'metadata' does not exist on type 'Readon... Remove this comment to see the full error message
    const { metadata, openDetailInNewTab } = this.props;

    const title = metadata.getIn(['titles', 0]);
    const acronym = metadata.getIn(['acronyms', 0]);
    const openingDate = metadata.get('opening_date');
    const closingDate = metadata.get('closing_date');
    const addresses = metadata.get('addresses');
    const cnum = metadata.get('cnum');
    const recordId = metadata.get('control_number');
    const canEdit = metadata.get('can_edit', false);
    const inspireCategories = metadata.get('inspire_categories');
    const urls = metadata.get('urls');
    const proceedings = metadata.get('proceedings');
    const contributionsCount = metadata.get('number_of_contributions', 0);

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
            {proceedings && <ProceedingsAction proceedings={proceedings} />}
            {canEdit && (
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <EditRecordAction pidType="conferences" pidValue={recordId} />
            )}
          </>
        }
        rightActions={
          contributionsCount !== 0 && (
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <ListItemAction>
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Link
                to={`${LITERATURE}?q=${getContributionsQueryString(
                  recordId
                )}&doc_type=conference%20paper`}
              >
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <IconText
                  // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
                  text={`${contributionsCount} ${pluralizeUnlessSingle(
                    'contribution',
                    contributionsCount
                  )}`}
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  icon={<LoginOutlined />}
                />
              </Link>
            </ListItemAction>
          )
        }
      >
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Row type="flex">
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Col>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Link
              className="result-item-title"
              to={`${CONFERENCES}/${recordId}`}
              target={openDetailInNewTab ? '_blank' : null}
            >
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <EventTitle title={title} acronym={acronym} />
            </Link>
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
      </ResultItem>
    );
  }
}

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
ConferenceItem.propTypes = {
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'typeof Map' is not assignable to... Remove this comment to see the full error message
  metadata: PropTypes.instanceOf(Map).isRequired,
  openDetailInNewTab: PropTypes.bool,
};

export default ConferenceItem;
