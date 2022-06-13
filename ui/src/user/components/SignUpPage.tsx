import React from 'react';
import { Row, Col, Card, Alert } from 'antd';
import PropTypes from 'prop-types';

// @ts-expect-error ts-migrate(6142) FIXME: Module './SingUpForm' was resolved to '/Users/karo... Remove this comment to see the full error message
import SingUpForm from './SingUpForm';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/DocumentHead' was ... Remove this comment to see the full error message
import DocumentHead from '../../common/components/DocumentHead';

function SignUpPage({
  onSubmit,
  loading,
  error
}: any) {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <DocumentHead title="Sign up" />
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Row className="h-100" type="flex" justify="center" align="middle">
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Card>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <p>
          Please let us know your e-mail address to complete your account registration.
          </p>
          {error && (
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Row className="mb3">
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Col>
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Alert message={error.message} type="error" showIcon closable />
              </Col>
            </Row>
          )}
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <SingUpForm onSubmit={onSubmit} loading={loading} />
        </Card>
      </Row>
    </>
  );
}

SignUpPage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.objectOf(PropTypes.any),
};

export default SignUpPage;
