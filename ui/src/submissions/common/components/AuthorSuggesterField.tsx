import React from 'react';
import { Field } from 'formik';
// @ts-expect-error ts-migrate(6142) FIXME: Module './SuggesterField' was resolved to '/Users/... Remove this comment to see the full error message
import SuggesterField from './SuggesterField';

function getSourceNameValue(suggestion: any) {
  return suggestion._source.name.value;
}

function renderAuthorSuggestion(suggestion: any) {
  const name = getSourceNameValue(suggestion);

  const { positions } = suggestion._source;
  const currentPosition =
    positions && positions.find((position: any) => position.current);

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <span>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      {name} {currentPosition && <span> ({currentPosition.institution})</span>}
    </span>
  );
}

export default function AuthorSuggesterField(props: any) {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Field
      {...props}
      pidType="authors"
      suggesterName="author"
      renderResultItem={renderAuthorSuggestion}
      extractItemCompletionValue={getSourceNameValue}
      component={SuggesterField}
    />
  );
}
