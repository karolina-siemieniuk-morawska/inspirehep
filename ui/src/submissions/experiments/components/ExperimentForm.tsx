import React from 'react';
import { Field, Form } from 'formik';
import { Row, Col } from 'antd';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/SelectField' was r... Remove this comment to see the full error message
import SelectField from '../../common/components/SelectField';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/SubmitButton' was ... Remove this comment to see the full error message
import SubmitButton from '../../common/components/SubmitButton';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/SuggesterField' wa... Remove this comment to see the full error message
import SuggesterField from '../../common/components/SuggesterField';
import { EXPERIMENT_TYPE_OPTIONS } from '../schemas/constants';

const ExperimentForm = () => {
  const getSuggestionSourceLegacyName = (suggestion: any) => suggestion._source.legacy_name;

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Form className="bg-white pa3">
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Row className="pt3 bg-white">
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Col span={24}>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Field
            name="project_type"
            label="* Experiment type"
            mode="multiple"
            options={EXPERIMENT_TYPE_OPTIONS}
            placeholder="Select types"
            component={SelectField}
          />
        </Col>
      </Row>

      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Row className="mb3 pt2 bg-white">
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Col span={24}>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Field
            component={SuggesterField}
            extractItemCompletionValue={getSuggestionSourceLegacyName}
            label="* Legacy name"
            name="legacy_name"
            pidType="experiments"
            placeholder="Legacy name, type for suggestions"
            searchAsYouType
            suggesterName="experiment"
          />
        </Col>
      </Row>

      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Row type="flex" justify="end">
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <SubmitButton />
      </Row>
    </Form>
  );
};

export default ExperimentForm;
