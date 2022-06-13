import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Card, Button, Input } from 'antd';
import { Field, Form, Formik } from 'formik';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/DocumentHead' was ... Remove this comment to see the full error message
import DocumentHead from '../../common/components/DocumentHead';

class LocalLoginPage extends Component {
  static renderFormInput({
    field,
    form,
    ...props
  }: any) {
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return <Input {...field} {...props} />;
  }

  static renderLoginForm() {
    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Form>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Row className="mb3">
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Field
            name="email"
            type="email"
            placeholder="Email"
            data-test-id="email"
            component={LocalLoginPage.renderFormInput}
          />
        </Row>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Row className="mb3">
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Field
            name="password"
            type="password"
            placeholder="Password"
            data-test-id="password"
            component={LocalLoginPage.renderFormInput}
          />
        </Row>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Button
          className="w-100"
          type="primary"
          htmlType="submit"
          data-test-id="login"
        >
          Login
        </Button>
      </Form>
    );
  }

  render() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'onLoginFormSubmit' does not exist on typ... Remove this comment to see the full error message
    const { onLoginFormSubmit } = this.props;
    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <DocumentHead title="Login" />
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Row className="h-100" type="flex" justify="center" align="middle">
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Card align="middle">
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <p>This login page is included only for dev and test environment</p>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Formik onSubmit={onLoginFormSubmit} initialValues={{}}>
              {LocalLoginPage.renderLoginForm}
            </Formik>
          </Card>
        </Row>
      </>
    );
  }
}

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
LocalLoginPage.propTypes = {
  onLoginFormSubmit: PropTypes.func.isRequired,
};

export default LocalLoginPage;
