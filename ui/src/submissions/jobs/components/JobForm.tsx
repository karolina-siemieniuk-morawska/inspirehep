import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, Form } from 'formik';
import { Row } from 'antd';

// @ts-expect-error ts-migrate(2691) FIXME: An import path cannot end with a '.tsx' extension.... Remove this comment to see the full error message
import ExternalLink from '../../../common/components/ExternalLink.tsx';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/TextField' was res... Remove this comment to see the full error message
import TextField from '../../common/components/TextField';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/SelectField' was r... Remove this comment to see the full error message
import SelectField from '../../common/components/SelectField';
import ArrayOf from '../../common/components/ArrayOf';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/SuggesterField' wa... Remove this comment to see the full error message
import SuggesterField from '../../common/components/SuggesterField';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/SubmitButton' was ... Remove this comment to see the full error message
import SubmitButton from '../../common/components/SubmitButton';
import { regionOptions, fieldOfInterestOptions } from '../schemas/constants';
import { rankOptions } from '../../common/schemas/constants';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/DateField' was res... Remove this comment to see the full error message
import DateField from '../../common/components/DateField';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/RichTextField' was... Remove this comment to see the full error message
import RichTextField from '../../common/components/RichTextField';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../containers/StatusFieldContainer' was re... Remove this comment to see the full error message
import StatusFieldContainer from '../containers/StatusFieldContainer';
import { isValidDeadlineDate } from '../schemas/job';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/FieldInfoAlert' wa... Remove this comment to see the full error message
import FieldInfoAlert from '../../common/components/FieldInfoAlert';
import { POST_DOC_RANK_VALUE } from '../../../common/constants';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/ContactsField' was... Remove this comment to see the full error message
import ContactsField from '../../common/components/ContactsField';

class JobForm extends Component {
  static isInvalidDeadlineDate(date: any) {
    return !isValidDeadlineDate(date);
  }

  // TODO: move them somewhere common to share with `AuthorForm`
  static getSuggestionSourceLegacyICN(suggestion: any) {
    return suggestion._source.legacy_ICN;
  }

  static getSuggestionSourceLegacyName(suggestion: any) {
    return suggestion._source.legacy_name;
  }

  isPostDocSubmission() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'values' does not exist on type 'Readonly... Remove this comment to see the full error message
    const { values } = this.props;

    return values.ranks && values.ranks.some((rank: any) => rank === POST_DOC_RANK_VALUE);
  }

  render() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'values' does not exist on type 'Readonly... Remove this comment to see the full error message
    const { values } = this.props;
    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Form className="bg-white pa3">
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Field
          name="status"
          label="* Status"
          component={StatusFieldContainer}
        />
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Field name="title" label="* Title" component={TextField} />
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Field
          name="external_job_identifier"
          label="Job ID"
          placeholder="Used to reference this job opening, e.g. 07845"
          component={TextField}
        />
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <ArrayOf
          // @ts-expect-error ts-migrate(2322) FIXME: Type '{ values: any; name: string; label: string; ... Remove this comment to see the full error message
          values={values}
          name="institutions"
          label="* Institutions"
          emptyItem={{}}
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          renderItem={(itemName: any) => <Field
            onlyChild
            name={`${itemName}.value`}
            recordFieldPath={`${itemName}.record`}
            placeholder="Institution, type for suggestions"
            pidType="institutions"
            suggesterName="affiliation"
            searchAsYouType
            extractItemCompletionValue={JobForm.getSuggestionSourceLegacyICN}
            component={SuggesterField}
          />}
        />
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Field
          name="regions"
          label="* Regions"
          mode="multiple"
          options={regionOptions}
          component={SelectField}
        />
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Field
          name="field_of_interest"
          label="* Field of Interest"
          mode="multiple"
          options={fieldOfInterestOptions}
          component={SelectField}
        />
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Field
          name="ranks"
          label="* Ranks"
          mode="multiple"
          options={rankOptions}
          component={SelectField}
        />
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <ArrayOf
          // @ts-expect-error ts-migrate(2322) FIXME: Type '{ values: any; name: string; label: string; ... Remove this comment to see the full error message
          values={values}
          name="experiments"
          label="Experiment"
          emptyItem={{}}
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          renderItem={(itemName: any) => <Field
            onlyChild
            name={`${itemName}.legacy_name`}
            recordFieldPath={`${itemName}.record`}
            placeholder="Experiment, type for suggestions"
            pidType="experiments"
            suggesterName="experiment"
            searchAsYouType
            extractItemCompletionValue={JobForm.getSuggestionSourceLegacyName}
            component={SuggesterField}
          />}
        />
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Field
          name="url"
          label="URL"
          placeholder="URL for additional information"
          component={TextField}
        />
        {this.isPostDocSubmission() && (
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <FieldInfoAlert
            // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
            description={
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <span>
                Many institutions have agreed to set January 7 as the earliest
                deadline which can be imposed for accepting offers of
                postdoctoral positions.{' '}
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <ExternalLink href="http://insti.physics.sunysb.edu/itp/postdoc-agreement.html">
                  Learn More
                </ExternalLink>
              </span>
            }
          />
        )}
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Field
          name="deadline_date"
          label="* Deadline"
          disabledDate={JobForm.isInvalidDeadlineDate}
          component={DateField}
        />
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <ContactsField label="* Contact Details" />
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <ArrayOf
          // @ts-expect-error ts-migrate(2322) FIXME: Type '{ values: any; name: string; label: string; ... Remove this comment to see the full error message
          values={values}
          name="reference_letters"
          label="Reference Letters"
          emptyItem=""
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          renderItem={(itemName: any) => <Field
            onlyChild
            name={itemName}
            placeholder="URL (http://) or email where reference letters should be sent"
            component={TextField}
          />}
        />

        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Field
          name="description"
          label="* Description"
          component={RichTextField}
        />
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Row type="flex" justify="end">
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <SubmitButton />
        </Row>
      </Form>
    );
  }
}

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
JobForm.propTypes = {
  values: PropTypes.objectOf(PropTypes.any).isRequired, // current form data
};

export default JobForm;
