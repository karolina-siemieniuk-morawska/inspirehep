import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Alert } from 'antd';
import { Formik } from 'formik';

// @ts-expect-error ts-migrate(6142) FIXME: Module './ExperimentForm' was resolved to '/Users/... Remove this comment to see the full error message
import ExperimentForm from './ExperimentForm';
import experimentSchema from '../schemas/experiment';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../../common/immutableToJS' was resolve... Remove this comment to see the full error message
import { convertAllImmutablePropsToJS } from '../../../common/immutableToJS';
import useSubmitCallback from '../../common/hooks/useSubmitCallback';

const DEFAULT_FORM_DATA = experimentSchema.cast();

const ExperimentSubmission = ({
  onSubmit,
  error = null
}: any) => {
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
            initialValues={DEFAULT_FORM_DATA}
            validationSchema={experimentSchema}
            onSubmit={onFormikSubmit}
            validateOnChange={false}
            component={ExperimentForm}
          />
        </Col>
      </Row>
    </div>
  );
}

ExperimentSubmission.propTypes = {
  error: PropTypes.objectOf(PropTypes.any),
  onSubmit: PropTypes.func.isRequired,
};

export default convertAllImmutablePropsToJS(ExperimentSubmission);
