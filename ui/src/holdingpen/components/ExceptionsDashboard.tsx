import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';
// @ts-expect-error ts-migrate(6142) FIXME: Module './ExceptionsTable' was resolved to '/Users... Remove this comment to see the full error message
import ExceptionsTable from './ExceptionsTable';
import InlineList from '../../common/components/InlineList';

import UnclickableTag from '../../common/components/UnclickableTag';
import './ExceptionsDashboard.scss';

class ExceptionsDashboard extends Component {
  static getDerivedStateFromProps(nextProps: any, prevState: any) {
    const { exceptions } = nextProps;
    const { prevExceptions } = prevState;

    if (exceptions === prevExceptions) {
      return prevState;
    }

    const countEntriesByCollection = ExceptionsDashboard.getExceptionCountEntriesByCollection(
      exceptions
    );
    return {
      ...prevState,
      prevExceptions: exceptions,
      countEntriesByCollection,
    };
  }

  static getExceptionCountEntriesByCollection(exceptions: any) {
    const countMap = exceptions.reduce((counts: any, exception: any) => {
      if (counts[exception.collection] === undefined) {
        counts[exception.collection] = 0;
      }
      counts[exception.collection] += 1;
      return counts;
    }, {});
    return Object.entries(countMap);
  }

  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'countEntriesByCollection' does not exist... Remove this comment to see the full error message
    const { countEntriesByCollection } = this.state;
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'loading' does not exist on type 'Readonl... Remove this comment to see the full error message
    const { loading, exceptions } = this.props;

    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div className="__ExceptionsDashboard__">
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className="collection-counts">
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <InlineList
            // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
            separateItems={false}
            items={countEntriesByCollection}
            label="Collections"
            // @ts-expect-error ts-migrate(7031) FIXME: Binding element 'collectionName' implicitly has an... Remove this comment to see the full error message
            renderItem={([collectionName, collectionCount]) => (
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <UnclickableTag className="space-around">
                {collectionCount} {collectionName}
              </UnclickableTag>
            )}
          />
        </div>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Row type="flex" justify="space-around">
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Col span={20}>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <ExceptionsTable exceptions={exceptions} loading={loading} />
          </Col>
        </Row>
      </div>
    );
  }
}

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
ExceptionsDashboard.propTypes = {
  exceptions: PropTypes.arrayOf(
    PropTypes.shape({
      collection: PropTypes.string,
      error: PropTypes.string,
      recid: PropTypes.number,
    })
  ).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default ExceptionsDashboard;
