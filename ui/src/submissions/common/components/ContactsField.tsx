import React from 'react';
import PropTypes from 'prop-types';
import { Field, useFormikContext } from 'formik';
import { Row, Col } from 'antd';


import ArrayOf from './ArrayOf';
// @ts-expect-error ts-migrate(6142) FIXME: Module './TextField' was resolved to '/Users/karol... Remove this comment to see the full error message
import TextField from './TextField';
// @ts-expect-error ts-migrate(6142) FIXME: Module './AuthorSuggesterField' was resolved to '/... Remove this comment to see the full error message
import AuthorSuggesterField from './AuthorSuggesterField';


function ContactsField({ label = 'Contact Detail(s)', name = 'contacts' }) {
  const { values } = useFormikContext();
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <ArrayOf
      // @ts-expect-error ts-migrate(2322) FIXME: Type '{ label: string; name: string; emptyItem: {}... Remove this comment to see the full error message
      label={label}
      name={name}
      emptyItem={{}}
      values={values}
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      renderItem={(itemName: any) => <Row type="flex" justify="space-between">
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Col span={11}>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <AuthorSuggesterField
            onlyChild
            name={`${itemName}.name`}
            recordFieldPath={`${itemName}.record`}
            placeholder="Name"
          />
        </Col>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Col span={11}>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Field
            onlyChild
            name={`${itemName}.email`}
            placeholder="Email"
            component={TextField}
          />
        </Col>
      </Row>}
    />
  );
}


ContactsField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
};


export default ContactsField;
