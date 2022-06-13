import React, { Component } from 'react';
import PropTypes from 'prop-types';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/SelectField' was r... Remove this comment to see the full error message
import SelectField from '../../common/components/SelectField';
import { statusOptions, unAuthorizedStatusOptions } from '../schemas/constants';

class StatusField extends Component {
  render() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'isCatalogerLoggedIn' does not exist on t... Remove this comment to see the full error message
    const { isCatalogerLoggedIn, canModify, ...selectFieldProps } = this.props;

    const options = isCatalogerLoggedIn
      ? statusOptions
      : unAuthorizedStatusOptions;

    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <SelectField
        {...selectFieldProps}
        // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
        disabled={!canModify}
        options={options}
      />
    );
  }
}

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
StatusField.propTypes = {
  isCatalogerLoggedIn: PropTypes.bool.isRequired,
  canModify: PropTypes.bool.isRequired,
};

export default StatusField;
