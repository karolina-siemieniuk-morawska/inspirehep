import React, { Component } from 'react';
import { Field } from 'formik';
import PropTypes from 'prop-types';

import { languageOptions } from '../schemas/constants';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/TextField' was res... Remove this comment to see the full error message
import TextField from '../../common/components/TextField';
import ArrayOf from '../../common/components/ArrayOf';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/SelectField' was r... Remove this comment to see the full error message
import SelectField from '../../common/components/SelectField';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/TextAreaField' was... Remove this comment to see the full error message
import TextAreaField from '../../common/components/TextAreaField';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/SuggesterField' wa... Remove this comment to see the full error message
import SuggesterField from '../../common/components/SuggesterField';
// @ts-expect-error ts-migrate(6142) FIXME: Module './LiteratureAuthorsField' was resolved to ... Remove this comment to see the full error message
import LiteratureAuthorsField from './LiteratureAuthorsField';
import { inspireCategoryOptions } from '../../common/schemas/constants';

class BasicInfoFields extends Component {
  static getSuggestionSourceLegacyName(suggestion: any) {
    return suggestion._source.legacy_name;
  }

  render() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'withCollaborationField' does not exist o... Remove this comment to see the full error message
    const { withCollaborationField, values } = this.props;

    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return <>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Field name="title" label="* Title" component={TextField} />
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Field
        name="language"
        label="* Language"
        options={languageOptions}
        component={SelectField}
      />
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Field
        name="subjects"
        label="* Subjects"
        mode="multiple"
        options={inspireCategoryOptions}
        component={SelectField}
      />
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <LiteratureAuthorsField
        // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
        values={values}
        name="authors"
        label="* Authors"
      />
      {withCollaborationField && (
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Field
          name="collaboration"
          label="Collaboration"
          component={TextField}
        />
      )}
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Field
        label="Experiment"
        name="experiment"
        recordFieldPath="experiment_record"
        placeholder="Experiment, type for suggestions"
        pidType="experiments"
        suggesterName="experiment"
        searchAsYouType
        extractItemCompletionValue={
          BasicInfoFields.getSuggestionSourceLegacyName
        }
        component={SuggesterField}
      />
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Field
        name="abstract"
        label="Abstract"
        rows={4}
        component={TextAreaField}
      />
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <ArrayOf
        // @ts-expect-error ts-migrate(2322) FIXME: Type '{ values: any; name: string; label: string; ... Remove this comment to see the full error message
        values={values}
        name="report_numbers"
        label="Report Numbers"
        emptyItem=""
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        renderItem={(itemName: any) => <Field onlyChild name={itemName} component={TextField} />}
      />
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Field
        name="doi"
        label="DOI"
        placeholder="e.g. 10.1086/305772 or doi:10.1086/305772"
        component={TextField}
      />
    </>;
  }
}

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
BasicInfoFields.propTypes = {
  withCollaborationField: PropTypes.bool,
  values: PropTypes.objectOf(PropTypes.any).isRequired, // current form data
};

// @ts-expect-error ts-migrate(2339) FIXME: Property 'defaultProps' does not exist on type 'ty... Remove this comment to see the full error message
BasicInfoFields.defaultProps = {
  withCollaborationField: false,
};

export default BasicInfoFields;
