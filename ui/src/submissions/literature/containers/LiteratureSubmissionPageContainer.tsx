import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { connect } from 'react-redux';
import { Map } from 'immutable';
import { Row, Col, Tooltip, Form } from 'antd';

import { submit } from '../../../actions/submissions';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/withFormItem' was resolved to... Remove this comment to see the full error message
import { LABEL_COL, WRAPPER_COL } from '../../common/withFormItem';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/LiteratureSubmission' was re... Remove this comment to see the full error message
import LiteratureSubmission from '../components/LiteratureSubmission';
// @ts-expect-error ts-migrate(2691) FIXME: An import path cannot end with a '.tsx' extension.... Remove this comment to see the full error message
import ExternalLink from '../../../common/components/ExternalLink.tsx';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../../common/components/SelectBox' was ... Remove this comment to see the full error message
import SelectBox from '../../../common/components/SelectBox';
// @ts-expect-error ts-migrate(6142) FIXME: Module './DataImporterContainer' was resolved to '... Remove this comment to see the full error message
import DataImporterContainer from './DataImporterContainer';
import {
  LITERATURE_PID_TYPE,
  CONTENT_POLICY_URL,
} from '../../../common/constants';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/SubmissionPage' wa... Remove this comment to see the full error message
import SubmissionPage from '../../common/components/SubmissionPage';

const DOC_TYPE_OPTIONS = [
  {
    value: 'article',
    display: 'Article/Conference paper',
  },
  {
    value: 'thesis',
    display: 'Thesis',
  },
  {
    value: 'book',
    display: 'Book',
  },
  {
    value: 'bookChapter',
    display: 'Book Chapter',
  },
];

function LiteratureSubmissionPage({
  error,
  importedFormData,
  onSubmit
}: any) {
  const [docType, setDocType] = useState(DOC_TYPE_OPTIONS[0].value);
  const [isDataImportSkipped, setDataImportSkipped] = useState(false);
  const shouldDisplayForm = isDataImportSkipped || importedFormData != null;

  const onDataImportSkipClick = useCallback(() => {
    setDataImportSkipped(true);
  }, []);
  const onDocTypeChange = useCallback(newDocType => {
    setDocType(newDocType);
  }, []);

  useEffect(
    () => {
      if (importedFormData) {
        const newDocType = importedFormData.get('document_type');
        setDocType(newDocType);
      }
    },
    [importedFormData]
  );
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <SubmissionPage
      title="Suggest content"
      description={
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <span>
          This form allows you to suggest a preprint, an article, a book, a
          conference proceeding or a thesis you would like to see added to
          INSPIRE. We will check your suggestion with our{' '}
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <ExternalLink href={CONTENT_POLICY_URL}>
            selection policy
          </ExternalLink>{' '}
          and transfer it to INSPIRE.
        </span>
      }
    >
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Row className="mb3 pa3 bg-white">
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Col span={24}>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <DataImporterContainer onSkipClick={onDataImportSkipClick} />
        </Col>
      </Row>
      {shouldDisplayForm && (
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Row className="mb3 ph3 pt3 bg-white">
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Col span={24}>
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Form.Item
                label={
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <Tooltip title="Type of the document">
                    Type of the document
                  </Tooltip>
                }
                labelCol={LABEL_COL}
                wrapperCol={WRAPPER_COL}
              >
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <SelectBox
                  data-test-id="document-type-select"
                  // @ts-expect-error ts-migrate(2322) FIXME: Type '{ "data-test-id": string; className: string;... Remove this comment to see the full error message
                  className="w-100"
                  value={docType}
                  options={DOC_TYPE_OPTIONS}
                  onChange={onDocTypeChange}
                />
              </Form.Item>
            </Col>
          </Row>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Row>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Col span={24}>
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <LiteratureSubmission
                initialFormData={importedFormData}
                error={error}
                onSubmit={onSubmit}
                docType={docType}
              />
            </Col>
          </Row>
        </>
      )}
    </SubmissionPage>
  );
}

LiteratureSubmissionPage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'typeof Map' is not assignable to... Remove this comment to see the full error message
  error: PropTypes.instanceOf(Map),
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'typeof Map' is not assignable to... Remove this comment to see the full error message
  importedFormData: PropTypes.instanceOf(Map),
};

const stateToProps = (state: any) => ({
  error: state.submissions.get('submitError'),
  importedFormData: state.submissions.get('initialData')
});

const dispatchToProps = (dispatch: any) => ({
  async onSubmit(formData: any) {
    await dispatch(submit(LITERATURE_PID_TYPE, formData));
  }
});

export default connect(stateToProps, dispatchToProps)(LiteratureSubmissionPage);
