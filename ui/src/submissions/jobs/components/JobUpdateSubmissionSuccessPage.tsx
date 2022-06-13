import React, { Component } from 'react';
import PropTypes from 'prop-types';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Link } from 'react-router-dom';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/SubmissionSuccess'... Remove this comment to see the full error message
import SubmissionSuccess from '../../common/components/SubmissionSuccess';
import { JOBS } from '../../../common/routes';

class JobUpdateSubmissionSuccessPage extends Component {
  render() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'match' does not exist on type 'Readonly<... Remove this comment to see the full error message
    const { match } = this.props;
    const { id } = match.params;
    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <SubmissionSuccess
        // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
        message={
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <span>
            Successfully submitted, thank you for the submission! See the
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            updates <Link to={`${JOBS}/${id}`}>here</Link>.
          </span>
        }
      />
    );
  }
}

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
JobUpdateSubmissionSuccessPage.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default JobUpdateSubmissionSuccessPage;
