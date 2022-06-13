import React, { Component } from 'react';
import { Field } from 'formik';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/TextAreaField' was... Remove this comment to see the full error message
import TextAreaField from '../../common/components/TextAreaField';

class ReferencesField extends Component {
  render() {
    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Field
        name="references"
        label="References"
        placeholder="References in plain text format"
        rows={8}
        component={TextAreaField}
      />
    );
  }
}

export default ReferencesField;
