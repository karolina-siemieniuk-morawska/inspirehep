import React, { Component } from 'react';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import fetchExceptions from '../../actions/exceptions';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/immutableToJS' was resolved t... Remove this comment to see the full error message
import { convertAllImmutablePropsToJS } from '../../common/immutableToJS';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/ExceptionsDashboard' was res... Remove this comment to see the full error message
import ExceptionsDashboard from '../components/ExceptionsDashboard';

class ExceptionsPage extends Component {
  componentDidMount() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'dispatch' does not exist on type 'Readon... Remove this comment to see the full error message
    const { dispatch } = this.props;
    dispatch(fetchExceptions());
  }

  render() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'exceptions' does not exist on type 'Read... Remove this comment to see the full error message
    const { exceptions, loading } = this.props;
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return <ExceptionsDashboard exceptions={exceptions} loading={loading} />;
  }
}

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
ExceptionsPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  exceptions: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state: any) => ({
  exceptions: state.exceptions.get('data'),
  loading: state.exceptions.get('loading')
});
const dispatchToProps = (dispatch: any) => ({
  dispatch
});

export default connect(mapStateToProps, dispatchToProps)(
  convertAllImmutablePropsToJS(ExceptionsPage)
);
