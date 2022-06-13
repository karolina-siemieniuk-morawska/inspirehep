import React, { Component } from 'react';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col, Card } from 'antd';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../../../common/components/LoadingOrChildr... Remove this comment to see the full error message
import LoadingOrChildren from '../../../common/components/LoadingOrChildren';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../components/JsonDiff' was resolved to... Remove this comment to see the full error message
import JsonDiff from '../../components/JsonDiff';
import fetchInspect from '../../../actions/inspect';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../../common/immutableToJS' was resolve... Remove this comment to see the full error message
import { convertAllImmutablePropsToJS } from '../../../common/immutableToJS';

import './InspectPage.scss';

class InspectPage extends Component {
  componentDidMount() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'match' does not exist on type 'Readonly<... Remove this comment to see the full error message
    const { match, dispatch } = this.props;
    const workflowId = match.params.id;
    dispatch(fetchInspect(workflowId));
  }

  render() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'loading' does not exist on type 'Readonl... Remove this comment to see the full error message
    const { loading, data } = this.props;
    const root = data.root || {};
    const head = data.head || {};
    const update = data.update || {};
    const merged = data.merged || {};

    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div className="__InspectPage__ w-100">
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <LoadingOrChildren loading={loading}>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Row
            align="middle"
            // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
            type="flex"
            justify="space-around"
            gutter={16}
            className="w-100 mt3"
          >
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Col span={8}>
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Card title="Head on root">
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <JsonDiff first={root} second={head} />
              </Card>
            </Col>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Col span={8}>
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Card title="Update on root">
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <JsonDiff first={root} second={update} />
              </Card>
            </Col>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Col span={8}>
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Card title="Merged on head">
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <JsonDiff first={head} second={merged} />
              </Card>
            </Col>
          </Row>
        </LoadingOrChildren>
      </div>
    );
  }
}

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
InspectPage.propTypes = {
  data: PropTypes.shape({
    root: PropTypes.objectOf(PropTypes.any),
    head: PropTypes.objectOf(PropTypes.any),
    update: PropTypes.objectOf(PropTypes.any),
    merged: PropTypes.objectOf(PropTypes.any),
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state: any) => ({
  data: state.inspect.get('data'),
  loading: state.inspect.get('loading')
});
const dispatchToProps = (dispatch: any) => ({
  dispatch
});

export default connect(mapStateToProps, dispatchToProps)(
  convertAllImmutablePropsToJS(InspectPage)
);
