import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Alert } from 'antd';
import { Formik, yupToFormErrors } from 'formik';
import useAsyncEffect from 'use-async-effect';

import articleSchema from '../schemas/article';
import thesisSchema from '../schemas/thesis';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../../common/immutableToJS' was resolve... Remove this comment to see the full error message
import { convertAllImmutablePropsToJS } from '../../../common/immutableToJS';
// @ts-expect-error ts-migrate(6142) FIXME: Module './ArticleForm' was resolved to '/Users/kar... Remove this comment to see the full error message
import ArticleForm from './ArticleForm';
// @ts-expect-error ts-migrate(6142) FIXME: Module './ThesisForm' was resolved to '/Users/karo... Remove this comment to see the full error message
import ThesisForm from './ThesisForm';
// @ts-expect-error ts-migrate(6142) FIXME: Module './BookForm' was resolved to '/Users/karoli... Remove this comment to see the full error message
import BookForm from './BookForm';
import bookSchema from '../schemas/book';
// @ts-expect-error ts-migrate(6142) FIXME: Module './BookChapterForm' was resolved to '/Users... Remove this comment to see the full error message
import BookChapterForm from './BookChapterForm';
import bookChapterSchema from '../schemas/bookChapter';
import useSubmitCallback from '../../common/hooks/useSubmitCallback';

const FORMS_BY_DOC_TYPE = {
  article: {
    component: ArticleForm,
    schema: articleSchema,
    defaultData: articleSchema.cast(),
  },
  thesis: {
    component: ThesisForm,
    schema: thesisSchema,
    defaultData: thesisSchema.cast(),
  },
  book: {
    component: BookForm,
    schema: bookSchema,
    defaultData: bookSchema.cast(),
  },
  bookChapter: {
    component: BookChapterForm,
    schema: bookChapterSchema,
    defaultData: bookChapterSchema.cast(),
  },
};
const ALLOWED_DOC_TYPES = Object.keys(FORMS_BY_DOC_TYPE);

function fallbackToArticleIfNotAllowed(docType: any) {
  const isAllowed = ALLOWED_DOC_TYPES.some(
    allowedDocType => docType === allowedDocType
  );
  return isAllowed ? docType : 'article';
}

function LiteratureSubmission({
  error = null,
  docType,
  initialFormData = null,
  onSubmit
}: any) {
  const normalizedDocType = useMemo(
    () => fallbackToArticleIfNotAllowed(docType),
    [docType]
  );

  // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
  const { component, schema, defaultData } = FORMS_BY_DOC_TYPE[
    normalizedDocType
  ];
  const initialValues = useMemo(
    () => ({ ...defaultData, ...initialFormData }),
    [defaultData, initialFormData]
  );

  const [initialErrors, setInitialErrors] = useState();

  useAsyncEffect(
    async () => {
      try {
        const hasImportedData = Boolean(initialFormData);
        if (hasImportedData) {
          await schema.validate(initialValues);
        }
      } catch (yupErrors) {
        const errors = yupToFormErrors(yupErrors);
        // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'FormikErrors<unknown>' is not as... Remove this comment to see the full error message
        setInitialErrors(errors);
      }
    },
    [initialValues, schema]
  );

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
            enableReinitialize
            initialErrors={initialErrors}
            initialValues={initialValues}
            validationSchema={schema}
            validateOnChange={false}
            onSubmit={onFormikSubmit}
            component={component}
          />
        </Col>
      </Row>
    </div>
  );
}

LiteratureSubmission.propTypes = {
  docType: PropTypes.oneOf(['article', 'thesis', 'book', 'bookChapter'])
    .isRequired,
  error: PropTypes.objectOf(PropTypes.any), // must have 'message'
  initialFormData: PropTypes.objectOf(PropTypes.any),
  onSubmit: PropTypes.func.isRequired, // must be async
};

LiteratureSubmission.defaultProps = {
  error: null,
  initialFormData: null,
};

export default convertAllImmutablePropsToJS(LiteratureSubmission);
