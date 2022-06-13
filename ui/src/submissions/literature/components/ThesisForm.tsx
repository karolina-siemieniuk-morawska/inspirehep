import React, { Component } from 'react';
import { Form } from 'formik';
import { Row } from 'antd';
import PropTypes from 'prop-types';

import CollapsableForm from '../../common/components/CollapsableForm';
// @ts-expect-error ts-migrate(6142) FIXME: Module './BasicInfoFields' was resolved to '/Users... Remove this comment to see the full error message
import BasicInfoFields from './BasicInfoFields';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/SubmitButton' was ... Remove this comment to see the full error message
import SubmitButton from '../../common/components/SubmitButton';
// @ts-expect-error ts-migrate(6142) FIXME: Module './LinkFields' was resolved to '/Users/karo... Remove this comment to see the full error message
import LinkFields from './LinkFields';
// @ts-expect-error ts-migrate(6142) FIXME: Module './ThesisInfoFields' was resolved to '/User... Remove this comment to see the full error message
import ThesisInfoFields from './ThesisInfoFields';
// @ts-expect-error ts-migrate(6142) FIXME: Module './ReferencesField' was resolved to '/Users... Remove this comment to see the full error message
import ReferencesField from './ReferencesField';
// @ts-expect-error ts-migrate(6142) FIXME: Module './CommentsField' was resolved to '/Users/k... Remove this comment to see the full error message
import CommentsField from './CommentsField';

const OPEN_SECTIONS = ['basic_info', 'links', 'thesis_info'];

class ThesisForm extends Component {
  render() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'values' does not exist on type 'Readonly... Remove this comment to see the full error message
    const { values } = this.props;
    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Form>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CollapsableForm openSections={OPEN_SECTIONS}>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <CollapsableForm.Section header="Links" key="links">
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <LinkFields />
          // @ts-expect-error ts-migrate(2339) FIXME: Property 'Section' does not exist on type 'typeof ... Remove this comment to see the full error message
          </CollapsableForm.Section>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <CollapsableForm.Section header="Basic Info" key="basic_info">
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <BasicInfoFields values={values} />
          // @ts-expect-error ts-migrate(2339) FIXME: Property 'Section' does not exist on type 'typeof ... Remove this comment to see the full error message
          </CollapsableForm.Section>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <CollapsableForm.Section header="Thesis Info" key="thesis_info">
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <ThesisInfoFields values={values} />
          // @ts-expect-error ts-migrate(2339) FIXME: Property 'Section' does not exist on type 'typeof ... Remove this comment to see the full error message
          </CollapsableForm.Section>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <CollapsableForm.Section header="References" key="references">
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <ReferencesField values={values} />
          // @ts-expect-error ts-migrate(2339) FIXME: Property 'Section' does not exist on type 'typeof ... Remove this comment to see the full error message
          </CollapsableForm.Section>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <CollapsableForm.Section header="Comments" key="comments">
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <CommentsField values={values} />
          // @ts-expect-error ts-migrate(2339) FIXME: Property 'Section' does not exist on type 'typeof ... Remove this comment to see the full error message
          </CollapsableForm.Section>
        </CollapsableForm>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Row type="flex" justify="end">
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <SubmitButton />
        </Row>
      </Form>
    );
  }
}

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
ThesisForm.propTypes = {
  values: PropTypes.objectOf(PropTypes.any).isRequired, // current form data
};

export default ThesisForm;
