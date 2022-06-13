import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Field, Form, Formik } from 'formik';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'yup'... Remove this comment to see the full error message
import { object, string } from 'yup';
import { Button, Row, Col } from 'antd';

// TODO: extract core form fields to common
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../submissions/common/components/TextFi... Remove this comment to see the full error message
import TextField from '../../submissions/common/components/TextField';

const SCHEMA = object().shape({
  email: string()
    .email()
    .required()
    .label('Email'),
  first_name: string()
    .required()
    .label('First Name'),
  last_name: string()
    .required()
    .label('Last Name'),
});

const FULL_ROW = { span: 24 };

function SubscribeJobsForm({
  onSubmit
}: any) {
  const renderForm = useCallback(
    ({ isValid }) => (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Form>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Field
          wrapperCol={FULL_ROW}
          name="email"
          type="email"
          placeholder="Email"
          component={TextField}
        />
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Field
          wrapperCol={FULL_ROW}
          name="first_name"
          placeholder="First Name"
          component={TextField}
        />
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Field
          wrapperCol={FULL_ROW}
          name="last_name"
          placeholder="Last Name"
          component={TextField}
        />
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Row type="flex" justify="end">
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Col>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Button disabled={!isValid} type="primary" htmlType="submit">
              Subscribe
            </Button>
          </Col>
        </Row>
      </Form>
    ),
    []
  );

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Formik validationSchema={SCHEMA} initialValues={{}} onSubmit={onSubmit}>
      {renderForm}
    </Formik>
  );
}

SubscribeJobsForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SubscribeJobsForm;
