import React from 'react';
import PropTypes from 'prop-types';
import { Field, Form } from 'formik';
import { Col, Row } from 'antd';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/TextField' was res... Remove this comment to see the full error message
import TextField from '../../common/components/TextField';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/SelectField' was r... Remove this comment to see the full error message
import SelectField from '../../common/components/SelectField';
import ArrayOf from '../../common/components/ArrayOf';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/SuggesterField' wa... Remove this comment to see the full error message
import SuggesterField from '../../common/components/SuggesterField';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/SubmitButton' was ... Remove this comment to see the full error message
import SubmitButton from '../../common/components/SubmitButton';
import {
  inspireCategoryOptions,
  countryOptions,
} from '../../common/schemas/constants';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/RichTextField' was... Remove this comment to see the full error message
import RichTextField from '../../common/components/RichTextField';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/NumberField' was r... Remove this comment to see the full error message
import NumberField from '../../common/components/NumberField';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/DateRangeField' wa... Remove this comment to see the full error message
import DateRangeField from '../../common/components/DateRangeField';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../containers/ExistingConferencesAlertCont... Remove this comment to see the full error message
import ExistingConferencesAlertContainer from '../containers/ExistingConferencesAlertContainer';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/ContactsField' was... Remove this comment to see the full error message
import ContactsField from '../../common/components/ContactsField';

function ConferenceForm({
  values
}: any) {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Form className="bg-white pa3">
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Field name="name" label="* Conference Name" component={TextField} />
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Field name="subtitle" label="Subtitle" component={TextField} />
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <ArrayOf
        // @ts-expect-error ts-migrate(2322) FIXME: Type '{ values: any; name: string; label: string; ... Remove this comment to see the full error message
        values={values}
        name="acronyms"
        label="Acronym(s)"
        emptyItem=""
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        renderItem={(itemName: any) => <Field onlyChild name={itemName} component={TextField} />}
      />
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Field
        name="series_name"
        label="Series Name"
        placeholder="Series name, type for suggestions"
        pidType="conferences"
        suggesterName="series_name"
        component={SuggesterField}
      />
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Field
        name="series_number"
        label="Series Number"
        component={NumberField}
      />
      {values.dates && (
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <ExistingConferencesAlertContainer dates={values.dates} />
      )}
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Field name="dates" label="* Dates" component={DateRangeField} />
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <ArrayOf
        // @ts-expect-error ts-migrate(2322) FIXME: Type '{ values: any; name: string; label: string; ... Remove this comment to see the full error message
        values={values}
        name="addresses"
        label="* Address(es)"
        emptyItem={{}}
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        renderItem={(itemName: any) => <Row type="flex" justify="space-between">
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Col span={11}>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Field
              onlyChild
              name={`${itemName}.city`}
              placeholder="* City"
              component={TextField}
            />
          </Col>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Col span={11}>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Field
              onlyChild
              name={`${itemName}.country`}
              placeholder="* Country/Region"
              showSearch
              options={countryOptions}
              component={SelectField}
            />
          </Col>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Col span={11}>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Field
              onlyChild
              name={`${itemName}.state`}
              placeholder="State"
              component={TextField}
            />
          </Col>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Col span={11}>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Field
              onlyChild
              name={`${itemName}.venue`}
              placeholder="Venue"
              component={TextField}
            />
          </Col>
        </Row>}
      />
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Field
        name="field_of_interest"
        label="* Field of Interest"
        mode="multiple"
        options={inspireCategoryOptions}
        component={SelectField}
      />
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <ArrayOf
        // @ts-expect-error ts-migrate(2322) FIXME: Type '{ values: any; name: string; label: string; ... Remove this comment to see the full error message
        values={values}
        name="websites"
        label="Conference Website(s)"
        emptyItem=""
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        renderItem={(itemName: any) => <Field onlyChild name={itemName} component={TextField} />}
      />
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <ContactsField />
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Field name="description" label="Description" component={RichTextField} />
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Field
        name="additional_info"
        label="Additional Information"
        component={TextField}
      />
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <ArrayOf
        // @ts-expect-error ts-migrate(2322) FIXME: Type '{ values: any; name: string; label: string; ... Remove this comment to see the full error message
        values={values}
        name="keywords"
        label="Keywords"
        emptyItem=""
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        renderItem={(itemName: any) => <Field onlyChild name={itemName} component={TextField} />}
      />
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Row type="flex" justify="end">
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <SubmitButton />
      </Row>
    </Form>
  );
}

ConferenceForm.propTypes = {
  values: PropTypes.objectOf(PropTypes.any).isRequired, // current form data
};

export default ConferenceForm;
