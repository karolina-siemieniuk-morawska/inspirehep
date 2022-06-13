import React from 'react';
import PropTypes from 'prop-types';
import { Field, Form } from 'formik';
import { Col, Row, Tooltip } from 'antd';

import { authorStatusOptions } from '../schemas/constants';
import {
  degreeTypeOptions,
  arxivCategoryOptions,
  rankOptions,
} from '../../common/schemas/constants';
import CollapsableForm from '../../common/components/CollapsableForm';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/TextField' was res... Remove this comment to see the full error message
import TextField from '../../common/components/TextField';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/BooleanField' was ... Remove this comment to see the full error message
import BooleanField from '../../common/components/BooleanField';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/SelectField' was r... Remove this comment to see the full error message
import SelectField from '../../common/components/SelectField';
import ArrayOf from '../../common/components/ArrayOf';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/SuggesterField' wa... Remove this comment to see the full error message
import SuggesterField from '../../common/components/SuggesterField';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/TextAreaField' was... Remove this comment to see the full error message
import TextAreaField from '../../common/components/TextAreaField';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../../common/components/LabelWithHelp' ... Remove this comment to see the full error message
import LabelWithHelp from '../../../common/components/LabelWithHelp';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/SubmitButton' was ... Remove this comment to see the full error message
import SubmitButton from '../../common/components/SubmitButton';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/DateField' was res... Remove this comment to see the full error message
import DateField from '../../common/components/DateField';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/AuthorSuggesterFie... Remove this comment to see the full error message
import AuthorSuggesterField from '../../common/components/AuthorSuggesterField';

const OPEN_SECTIONS = [
  'personal_info',
  'career_info',
  'personal_websites',
  'comments',
];

const HIDDEN_FIELD_HELP =
  'This entry will be hidden from your author profile, but it will still be visible to INSPIRE staff. If this information is incorrect, please inform us using the Comments area in the bottom of the page';
const HiddenFieldLabel = (
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <LabelWithHelp label="Hidden" help={HIDDEN_FIELD_HELP} />
);

function getSuggestionSourceLegacyICN(suggestion: any) {
  return suggestion._source.legacy_ICN;
}

function getSuggestionSourceLegacyName(suggestion: any) {
  return suggestion._source.legacy_name;
}

function AuthorForm({
  values,
  isCatalogerLoggedIn,
  isUpdate
}: any) {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Form>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <CollapsableForm openSections={OPEN_SECTIONS}>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CollapsableForm.Section header="Personal Info" key="personal_info">
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <p>
            Email addresses cannot be deleted. If information is incorrect,
            please mark it as `Hidden` and give more details in the Comments
            area.
          </p>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Field
            name="given_name"
            label="* Given Names"
            placeholder="e.g. Diego"
            component={TextField}
          />
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Field
            name="family_name"
            label="* Family Name"
            placeholder="e.g. Martínez Santos"
            component={TextField}
          />
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Field
            name="display_name"
            label="* Display Name"
            placeholder="How should the author be addressed throughout the site? e.g. Diego Martínez"
            component={TextField}
          />
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Field
            name="native_name"
            label="Native Name"
            placeholder="For non-Latin names e.g. 麦迪娜 or Эдгар Бугаев"
            component={TextField}
          />
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Field
            name="alternate_name"
            label="Alternate Name"
            placeholder="Names that are searchable but not displayed"
            component={TextField}
          />
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <ArrayOf
            // @ts-expect-error ts-migrate(2322) FIXME: Type '{ values: any; name: string; label: string; ... Remove this comment to see the full error message
            values={values}
            name="emails"
            label="Emails"
            emptyItem={{}}
            allowItemDelete={isCatalogerLoggedIn || !isUpdate}
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            renderItem={(itemName: any) => <Row type="flex" justify="space-between">
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Col span={11}>
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Field
                  onlyChild
                  name={`${itemName}.value`}
                  placeholder="Email"
                  component={TextField}
                />
              </Col>
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Col span={11}>
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Row gutter={16}>
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <Col>
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Field
                      onlyChild
                      name={`${itemName}.current`}
                      suffixText="Current"
                      component={BooleanField}
                    />
                  </Col>
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <Col>
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Field
                      onlyChild
                      name={`${itemName}.hidden`}
                      suffixText={
                        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <LabelWithHelp
                          // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
                          label="Hidden"
                          help="Hidden emails will not be displayed, but will only be used by INSPIRE staff for contact and identification purposes."
                        />
                      }
                      component={BooleanField}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>}
          />
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Field
            name="status"
            label="* Status"
            options={authorStatusOptions}
            component={SelectField}
          />
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Field
            name="orcid"
            addonBefore="orcid.org/"
            label={
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <LabelWithHelp
                // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
                label={
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <Tooltip title="ORCID provides a persistent digital identifier that distinguishes you from other researchers">
                    ORCID
                  </Tooltip>
                }
                help="ORCID provides a persistent digital identifier that distinguishes you from other researchers"
              />
            }
            placeholder="0000-0000-0000-0000"
            component={TextField}
          />
        // @ts-expect-error ts-migrate(2339) FIXME: Property 'Section' does not exist on type 'typeof ... Remove this comment to see the full error message
        </CollapsableForm.Section>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CollapsableForm.Section
          header="Author websites"
          key="personal_websites"
        >
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <ArrayOf
            // @ts-expect-error ts-migrate(2322) FIXME: Type '{ values: any; name: string; label: string; ... Remove this comment to see the full error message
            values={values}
            name="websites"
            label="Websites"
            emptyItem=""
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            renderItem={(itemName: any) => <Field onlyChild name={itemName} component={TextField} />}
          />
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Field name="blog" label="Blog" component={TextField} />
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Field
            name="linkedin"
            label="Linkedin"
            addonBefore="linkedin.com/in/"
            component={TextField}
          />
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Field
            name="twitter"
            label="Twitter"
            addonBefore="twitter.com/"
            component={TextField}
          />
        // @ts-expect-error ts-migrate(2339) FIXME: Property 'Section' does not exist on type 'typeof ... Remove this comment to see the full error message
        </CollapsableForm.Section>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CollapsableForm.Section header="Career Info" key="career_info">
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <p>
            Career information cannot be deleted. If information is incorrect,
            please mark it as ‘Hidden’ and give more details in the Comments
            area.
          </p>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Field
            name="arxiv_categories"
            label="Field of Research"
            mode="multiple"
            options={arxivCategoryOptions}
            component={SelectField}
          />
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <ArrayOf
            // @ts-expect-error ts-migrate(2322) FIXME: Type '{ values: any; label: string; name: string; ... Remove this comment to see the full error message
            values={values}
            label="Institution History"
            name="positions"
            emptyItem={{}}
            allowItemDelete={isCatalogerLoggedIn || !isUpdate}
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            renderItem={(itemName: any) => <Row type="flex" justify="space-between">
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Col span={11}>
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Field
                  onlyChild
                  name={`${itemName}.institution`}
                  recordFieldPath={`${itemName}.record`}
                  placeholder="Institution, type for suggestions"
                  pidType="institutions"
                  suggesterName="affiliation"
                  searchAsYouType
                  extractItemCompletionValue={getSuggestionSourceLegacyICN}
                  component={SuggesterField}
                />
              </Col>
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Col span={11}>
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Row gutter={16}>
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <Col>
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Field
                      onlyChild
                      name={`${itemName}.current`}
                      suffixText="Current"
                      component={BooleanField}
                    />
                  </Col>
                  {isUpdate && (
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Col>
                      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <Field
                        onlyChild
                        name={`${itemName}.hidden`}
                        suffixText={HiddenFieldLabel}
                        component={BooleanField}
                      />
                    </Col>
                  )}
                </Row>
              </Col>
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Col span={11}>
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Field
                  onlyChild
                  name={`${itemName}.start_date`}
                  placeholder="Start year"
                  component={DateField}
                  picker="year"
                />
              </Col>
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Col span={11}>
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Field
                  onlyChild
                  name={`${itemName}.end_date`}
                  placeholder="End year"
                  component={DateField}
                  picker="year"
                />
              </Col>
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Col span={11}>
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Field
                  onlyChild
                  name={`${itemName}.rank`}
                  placeholder="Rank"
                  options={rankOptions}
                  component={SelectField}
                />
              </Col>
            </Row>}
          />
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <ArrayOf
            // @ts-expect-error ts-migrate(2322) FIXME: Type '{ values: any; label: string; name: string; ... Remove this comment to see the full error message
            values={values}
            label="Experiment History"
            name="project_membership"
            allowItemDelete={isCatalogerLoggedIn || !isUpdate}
            emptyItem={{}}
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            renderItem={(itemName: any) => <Row type="flex" justify="space-between">
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Col span={11}>
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Field
                  onlyChild
                  name={`${itemName}.name`}
                  recordFieldPath={`${itemName}.record`}
                  placeholder="Experiment, type for suggestions"
                  pidType="experiments"
                  suggesterName="experiment"
                  searchAsYouType
                  extractItemCompletionValue={getSuggestionSourceLegacyName}
                  component={SuggesterField}
                />
              </Col>
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Col span={11}>
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Row gutter={16}>
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <Col>
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Field
                      onlyChild
                      name={`${itemName}.current`}
                      suffixText="Current"
                      component={BooleanField}
                    />
                  </Col>
                  {isUpdate && (
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Col>
                      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <Field
                        onlyChild
                        name={`${itemName}.hidden`}
                        suffixText={HiddenFieldLabel}
                        component={BooleanField}
                      />
                    </Col>
                  )}
                </Row>
              </Col>
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Col span={11}>
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Field
                  onlyChild
                  name={`${itemName}.start_date`}
                  placeholder="Start year"
                  component={DateField}
                  picker="year"
                />
              </Col>
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Col span={11}>
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Field
                  onlyChild
                  name={`${itemName}.end_date`}
                  placeholder="End year"
                  component={DateField}
                  picker="year"
                />
              </Col>
            </Row>}
          />
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <ArrayOf
            // @ts-expect-error ts-migrate(2322) FIXME: Type '{ values: any; label: string; name: string; ... Remove this comment to see the full error message
            values={values}
            label="Advisors"
            name="advisors"
            allowItemDelete={isCatalogerLoggedIn || !isUpdate}
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
                  name={`${itemName}.degree_type`}
                  placeholder="Degree type"
                  options={degreeTypeOptions}
                  component={SelectField}
                />
              </Col>
              {isUpdate && (
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Col span={11}>
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <Field
                    onlyChild
                    name={`${itemName}.hidden`}
                    suffixText={HiddenFieldLabel}
                    component={BooleanField}
                  />
                </Col>
              )}
            </Row>}
          />
        // @ts-expect-error ts-migrate(2339) FIXME: Property 'Section' does not exist on type 'typeof ... Remove this comment to see the full error message
        </CollapsableForm.Section>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CollapsableForm.Section
          header="Comments to the INSPIRE team"
          key="comments"
        >
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Field
            name="comments"
            label="Comments"
            placeholder="any comments you might have"
            rows={4}
            component={TextAreaField}
          />
        // @ts-expect-error ts-migrate(2339) FIXME: Property 'Section' does not exist on type 'typeof ... Remove this comment to see the full error message
        </CollapsableForm.Section>
      </CollapsableForm>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Row type="flex" justify="end">
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <SubmitButton />
      </Row>
    </Form>
  );
}

AuthorForm.propTypes = {
  values: PropTypes.objectOf(PropTypes.any).isRequired, // current form data
  isCatalogerLoggedIn: PropTypes.bool,
  isUpdate: PropTypes.bool,
};

export default AuthorForm;
