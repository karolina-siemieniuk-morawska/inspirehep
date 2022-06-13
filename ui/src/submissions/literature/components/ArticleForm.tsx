import React, { Component } from 'react';
import { Form, Field } from 'formik';
import { Row } from 'antd';
import PropTypes from 'prop-types';

import CollapsableForm from '../../common/components/CollapsableForm';
// @ts-expect-error ts-migrate(6142) FIXME: Module './BasicInfoFields' was resolved to '/Users... Remove this comment to see the full error message
import BasicInfoFields from './BasicInfoFields';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/SubmitButton' was ... Remove this comment to see the full error message
import SubmitButton from '../../common/components/SubmitButton';
// @ts-expect-error ts-migrate(6142) FIXME: Module './LinkFields' was resolved to '/Users/karo... Remove this comment to see the full error message
import LinkFields from './LinkFields';
// @ts-expect-error ts-migrate(6142) FIXME: Module './ReferencesField' was resolved to '/Users... Remove this comment to see the full error message
import ReferencesField from './ReferencesField';
// @ts-expect-error ts-migrate(6142) FIXME: Module './CommentsField' was resolved to '/Users/k... Remove this comment to see the full error message
import CommentsField from './CommentsField';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/TextField' was res... Remove this comment to see the full error message
import TextField from '../../common/components/TextField';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/TextAreaField' was... Remove this comment to see the full error message
import TextAreaField from '../../common/components/TextAreaField';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/SuggesterField' wa... Remove this comment to see the full error message
import SuggesterField from '../../common/components/SuggesterField';
// @ts-expect-error ts-migrate(6142) FIXME: Module './ConferenceSuggestion' was resolved to '/... Remove this comment to see the full error message
import ConferenceSuggestion from './ConferenceSuggestion';
// @ts-expect-error ts-migrate(6142) FIXME: Module './JournalSuggestion' was resolved to '/Use... Remove this comment to see the full error message
import JournalSuggestion from './JournalSuggestion';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/NumberField' was r... Remove this comment to see the full error message
import NumberField from '../../common/components/NumberField';

const OPEN_SECTIONS = ['basic_info', 'links', 'publication_info'];

class ArticleForm extends Component {
  static getSuggestionSourceShortTitle(suggestion: any) {
    return suggestion._source.short_title;
  }

  static renderJournalSuggestion(suggestion: any) {
    const journal = suggestion._source;
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return <JournalSuggestion journal={journal} />;
  }

  static getSuggestionSourceFirstTitle(suggestion: any) {
    return suggestion._source.titles[0].title;
  }

  static renderConferenceSuggestion(suggestion: any) {
    const conference = suggestion._source;
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return <ConferenceSuggestion conference={conference} />;
  }

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
            <BasicInfoFields values={values} withCollaborationField />
          // @ts-expect-error ts-migrate(2339) FIXME: Property 'Section' does not exist on type 'typeof ... Remove this comment to see the full error message
          </CollapsableForm.Section>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <CollapsableForm.Section
            header="Publication Info"
            key="publication_info"
          >
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Field
              name="journal_title"
              recordFieldPath="journal_record"
              label="Journal Title"
              pidType="journals"
              suggesterName="journal_title"
              extractItemCompletionValue={
                ArticleForm.getSuggestionSourceShortTitle
              }
              renderResultItem={ArticleForm.renderJournalSuggestion}
              component={SuggesterField}
            />
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Field name="volume" label="Volume" component={TextField} />
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Field name="issue" label="Issue" component={TextField} />
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Field name="year" label="Year" component={NumberField} />
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Field
              name="page_range"
              label="Page Range/Article ID"
              placeholder="e.g. 1-100"
              component={TextField}
            />
          // @ts-expect-error ts-migrate(2339) FIXME: Property 'Section' does not exist on type 'typeof ... Remove this comment to see the full error message
          </CollapsableForm.Section>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <CollapsableForm.Section
            header="Conference Info"
            key="conference_info"
          >
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Field
              name="conference_info"
              recordFieldPath="conference_record"
              label="Conference Info"
              placeholder="Conference name, acronym, place, date, type for suggestions"
              pidType="conferences"
              suggesterName="conference"
              extractItemCompletionValue={
                ArticleForm.getSuggestionSourceFirstTitle
              }
              renderResultItem={ArticleForm.renderConferenceSuggestion}
              component={SuggesterField}
            />
          // @ts-expect-error ts-migrate(2339) FIXME: Property 'Section' does not exist on type 'typeof ... Remove this comment to see the full error message
          </CollapsableForm.Section>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <CollapsableForm.Section
            header="Proceedings Info (if not published in a journal)"
            key="proceedings_info"
          >
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Field
              name="proceedings_info"
              label="Proceedings"
              placeholder="Editors, title of proceedings, publisher, year of publication, page range, URL"
              rows={6}
              component={TextAreaField}
            />
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
ArticleForm.propTypes = {
  values: PropTypes.objectOf(PropTypes.any).isRequired, // current form data
};

export default ArticleForm;
