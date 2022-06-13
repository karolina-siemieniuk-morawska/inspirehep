import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Alert } from 'antd';
import { Formik } from 'formik';

// @ts-expect-error ts-migrate(6142) FIXME: Module './SeminarForm' was resolved to '/Users/kar... Remove this comment to see the full error message
import SeminarForm from './SeminarForm';
import seminarSubmission from '../schemas/seminar';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../../common/immutableToJS' was resolve... Remove this comment to see the full error message
import { convertAllImmutablePropsToJS } from '../../../common/immutableToJS';
import useSubmitCallback from '../../common/hooks/useSubmitCallback';

const DEFAULT_FORM_DATA = seminarSubmission.cast();

function SeminarSubmission({
  onSubmit,
  initialFormData = {},
  error = null
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
            validationSchema={seminarSubmission}
            onSubmit={onFormikSubmit}
            validateOnChange={false}
            component={SeminarForm}
          />
        </Col>
      </Row>
    </div>
  );
}

SeminarSubmission.propTypes = {
  error: PropTypes.objectOf(PropTypes.any), // must have 'message'
  initialFormData: PropTypes.objectOf(PropTypes.any),
  onSubmit: PropTypes.func.isRequired, // must be async
};

export default convertAllImmutablePropsToJS(SeminarSubmission);
