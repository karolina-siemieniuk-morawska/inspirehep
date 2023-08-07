import React from 'react';
import { Field } from 'formik';

import { degreeTypeOptions } from '../../common/schemas/constants';
import TextField from '../../common/components/TextField';
import SelectField from '../../common/components/SelectField';
import LiteratureAuthorsField from './LiteratureAuthorsField';

function ThesisInfoFields({ values }: { values: any }) {
  return (
    <>
      <Field
        name="degree_type"
        label="Degree Type"
        options={degreeTypeOptions}
        component={SelectField}
      />
      <Field
        name="submission_date"
        label="Date of Submission"
        placeholder="YYYY-MM-DD, YYYY-MM or YYYY"
        component={TextField}
      />
      <Field
        name="defense_date"
        label="Date of Defense"
        placeholder="YYYY-MM-DD, YYYY-MM or YYYY"
        component={TextField}
      />
      <Field name="institution" label="Institution" component={TextField} />
      <LiteratureAuthorsField
        values={values}
        name="supervisors"
        label="Supervisors"
      />
    </>
  );
}

export default ThesisInfoFields;
