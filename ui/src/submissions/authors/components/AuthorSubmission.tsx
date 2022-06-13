import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Alert } from 'antd';
import { Formik } from 'formik';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'yup'... Remove this comment to see the full error message
import { object } from 'yup';

// @ts-expect-error ts-migrate(6142) FIXME: Module './AuthorForm' was resolved to '/Users/karo... Remove this comment to see the full error message
import AuthorForm from './AuthorForm';
import authorSchema from '../schemas/author';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../../common/immutableToJS' was resolve... Remove this comment to see the full error message
import { convertAllImmutablePropsToJS } from '../../../common/immutableToJS';
import useSubmitCallback from '../../common/hooks/useSubmitCallback';

const DEFAULT_FORM_DATA = authorSchema.cast();

function AuthorSubmission({
  onSubmit,
  error = null,
  initialFormData = {},
  extendSchema = object(),
  isCatalogerLoggedIn,
  isUpdate
}: any) {
  const initialValues = {
    ...DEFAULT_FORM_DATA,
    ...initialFormData,
  };
  const onFormikSubmit = useSubmitCallback(onSubmit);
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div>
      {error && (
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Row className="mb3">
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Col span={24}>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Alert message={error.message} type="error" showIcon closable />
          </Col>
        </Row>
      )}
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Row>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Col span={24}>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Formik
            initialValues={initialValues}
            validationSchema={authorSchema.concat(extendSchema)}
            onSubmit={onFormikSubmit}
            validateOnChange={false}
            isCatalogerLoggedIn={isCatalogerLoggedIn}
            isUpdate={isUpdate}
          >
            {({ values }) => (
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <AuthorForm
                values={values}
                isUpdate={isUpdate}
                isCatalogerLoggedIn={isCatalogerLoggedIn}
              />
            )}
          </Formik>
        </Col>
      </Row>
    </div>
  );
}

AuthorSubmission.propTypes = {
  error: PropTypes.objectOf(PropTypes.any), // must have 'message'
  initialFormData: PropTypes.objectOf(PropTypes.any),
  onSubmit: PropTypes.func.isRequired, // must be async
  extendSchema: PropTypes.instanceOf(object),
  isCatalogerLoggedIn: PropTypes.bool,
  isUpdate: PropTypes.bool,
};

export default convertAllImmutablePropsToJS(AuthorSubmission);
