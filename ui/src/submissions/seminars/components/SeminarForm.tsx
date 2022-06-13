import React from 'react';
import PropTypes from 'prop-types';
import { Field, Form } from 'formik';
import { Col, Row, Form as AntForm } from 'antd';

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
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/ContactsField' was... Remove this comment to see the full error message
import ContactsField from '../../common/components/ContactsField';
import { timeZoneOptions, SEMINAR_DATETIME_FORMAT } from '../schemas/constants';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/withFormItem' was resolved to... Remove this comment to see the full error message
import { LABEL_COL, WRAPPER_COL } from '../../common/withFormItem';
import { SEMINARS_PID_TYPE, TIME_FORMAT } from '../../../common/constants';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/AuthorSuggesterFie... Remove this comment to see the full error message
import AuthorSuggesterField from '../../common/components/AuthorSuggesterField';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/BooleanField' was ... Remove this comment to see the full error message
import BooleanField from '../../common/components/BooleanField';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../../common/components/LabelWithHelp' ... Remove this comment to see the full error message
import LabelWithHelp from '../../../common/components/LabelWithHelp';

function getSuggestionSourceLegacyICN(suggestion: any) {
  return suggestion._source.legacy_ICN;
}

const TIME_PICKER_OPTIONS = {
  format: TIME_FORMAT,
  minuteStep: 5,
};

function SeminarForm({
  values
}: any) {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Form className="bg-white pa3">
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Field name="name" label="* Seminar Title" component={TextField} />
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Field
        name="dates"
        label="* Dates"
        component={DateRangeField}
        showTime={TIME_PICKER_OPTIONS}
        format={SEMINAR_DATETIME_FORMAT}
      />
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Field
        name="timezone"
        label="Timezone"
        showSearch
        virtualScroll
        options={timeZoneOptions}
        component={SelectField}
      />
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <ArrayOf
        // @ts-expect-error ts-migrate(2322) FIXME: Type '{ values: any; name: string; label: string; ... Remove this comment to see the full error message
        values={values}
        name="speakers"
        label="* Speaker(s)"
        emptyItem={{}}
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        renderItem={(itemName: any) => <Row type="flex" justify="space-between">
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Col span={11}>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <AuthorSuggesterField
              onlyChild
              name={`${itemName}.name`}
              recordFieldPath={`${itemName}.record`}
              placeholder="Family name, first name"
            />
          </Col>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Col span={11}>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Field
              onlyChild
              name={`${itemName}.affiliation`}
              recordFieldPath={`${itemName}.affiliation_record`}
              placeholder="Affiliation, type for suggestions"
              pidType="institutions"
              suggesterName="affiliation"
              searchAsYouType
              extractItemCompletionValue={getSuggestionSourceLegacyICN}
              component={SuggesterField}
            />
          </Col>
        </Row>}
      />
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Field
        name="series_name"
        label="Series Name"
        placeholder="Series name, type for suggestions"
        pidType={SEMINARS_PID_TYPE}
        suggesterName="series_name"
        component={SuggesterField}
      />
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Field
        name="series_number"
        label="Series Number"
        component={NumberField}
      />
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <ArrayOf
        // @ts-expect-error ts-migrate(2322) FIXME: Type '{ values: any; name: string; label: string; ... Remove this comment to see the full error message
        values={values}
        name="websites"
        label="Seminar Website(s)"
        emptyItem=""
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        renderItem={(itemName: any) => <Field onlyChild name={itemName} component={TextField} />}
      />
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <ArrayOf
        // @ts-expect-error ts-migrate(2322) FIXME: Type '{ values: any; name: string; label: string; ... Remove this comment to see the full error message
        values={values}
        name="material_urls"
        label="Material(s)"
        emptyItem={{}}
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        renderItem={(itemName: any) => <Row type="flex" justify="space-between">
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Col span={11}>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Field
              onlyChild
              name={`${itemName}.value`}
              placeholder="https://drive.google.com/slides"
              component={TextField}
            />
          </Col>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Col span={11}>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Field
              onlyChild
              name={`${itemName}.description`}
              placeholder="Description, eg. Slides, PDF"
              component={TextField}
            />
          </Col>
        </Row>}
      />
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <ArrayOf
        // @ts-expect-error ts-migrate(2322) FIXME: Type '{ values: any; name: string; label: string; ... Remove this comment to see the full error message
        values={values}
        name="join_urls"
        label="Join URL(s)"
        emptyItem={{}}
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        renderItem={(itemName: any) => <Row type="flex" justify="space-between">
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Col span={11}>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Field
              onlyChild
              name={`${itemName}.value`}
              placeholder="https://zoom.us/videoconference"
              component={TextField}
            />
          </Col>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Col span={11}>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Field
              onlyChild
              name={`${itemName}.description`}
              placeholder="Description, eg. Zoom"
              component={TextField}
            />
          </Col>
        </Row>}
      />
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Field name="captioned" label="Has captions" component={BooleanField} />
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <AntForm.Item // TODO: create `ObjectOf` component
        label="Address"
        labelCol={LABEL_COL}
        wrapperCol={WRAPPER_COL}
      >
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Row type="flex" justify="space-between">
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Col span={11}>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Field
              onlyChild
              name="address.city"
              placeholder="City"
              component={TextField}
            />
          </Col>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Col span={11}>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Field
              onlyChild
              name="address.country"
              placeholder="Country/Region"
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
              name="address.state"
              placeholder="State"
              component={TextField}
            />
          </Col>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Col span={11}>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Field
              onlyChild
              name="address.venue"
              placeholder="Venue"
              component={TextField}
            />
          </Col>
        </Row>
      </AntForm.Item>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Field
        name="field_of_interest"
        label="* Field of Interest"
        mode="multiple"
        options={inspireCategoryOptions}
        component={SelectField}
      />
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <ContactsField />
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <ArrayOf
        // @ts-expect-error ts-migrate(2322) FIXME: Type '{ values: any; name: string; label: Element;... Remove this comment to see the full error message
        values={values}
        name="literature_records"
        label={
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <LabelWithHelp
            // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
            label="Related paper(s)"
            help="If the seminar refers to an INSPIRE paper, please fill in the link."
          />
        }
        emptyItem=""
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        renderItem={(itemName: any) => <Field
          onlyChild
          addonBefore="inspirehep.net/literature/"
          name={itemName}
          component={TextField}
        />}
      />
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Field name="abstract" label="Abstract" component={RichTextField} />
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

SeminarForm.propTypes = {
  values: PropTypes.objectOf(PropTypes.any).isRequired, // current form data
};

export default SeminarForm;
