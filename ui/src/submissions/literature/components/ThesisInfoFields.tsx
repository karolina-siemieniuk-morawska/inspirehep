import React, { Component } from 'react';
import { Field } from 'formik';
import PropTypes from 'prop-types';

import { degreeTypeOptions } from '../../common/schemas/constants';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/TextField' was res... Remove this comment to see the full error message
import TextField from '../../common/components/TextField';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/SelectField' was r... Remove this comment to see the full error message
import SelectField from '../../common/components/SelectField';
// @ts-expect-error ts-migrate(6142) FIXME: Module './LiteratureAuthorsField' was resolved to ... Remove this comment to see the full error message
import LiteratureAuthorsField from './LiteratureAuthorsField';

class ThesisInfoFields extends Component {
  render() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'values' does not exist on type 'Readonly... Remove this comment to see the full error message
    const { values } = this.props;

    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Field
          name="degree_type"
          label="Degree Type"
          options={degreeTypeOptions}
          component={SelectField}
        />
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Field
          name="submission_date"
          label="Date of Submission"
          placeholder="YYYY-MM-DD, YYYY-MM or YYYY"
          component={TextField}
        />
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Field
          name="defense_date"
          label="Date of Defense"
          placeholder="YYYY-MM-DD, YYYY-MM or YYYY"
          component={TextField}
        />
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Field name="institution" label="Institution" component={TextField} />
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <LiteratureAuthorsField
          // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
          values={values}
          name="supervisors"
          label="Supervisors"
        />
      </>
    );
  }
}

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
ThesisInfoFields.propTypes = {
  values: PropTypes.objectOf(PropTypes.any).isRequired, // current form data
};

export default ThesisInfoFields;
