import React from 'react';

// @ts-expect-error ts-migrate(6142) FIXME: Module './LinkWithEncodedLiteratureQuery' was reso... Remove this comment to see the full error message
import LinkWithEncodedLiteratureQuery from './LinkWithEncodedLiteratureQuery';
import ContentBox from '../../common/components/ContentBox';

const EXAMPLES = [
  'n=2 pedestrians tachikawa',
  'superconformal field theories Maldacena 1997',
  '1207.7214',
];

function renderExample(freetextSearch: any) {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div key={freetextSearch}>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <LinkWithEncodedLiteratureQuery query={freetextSearch} />
    </div>
  );
}

function FreetextExamples() {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <ContentBox>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <p>
        Users can also type free text searches using any combination of author
        names, title, dates etc.
      </p>
      {EXAMPLES.map(renderExample)}
    </ContentBox>
  );
}

export default FreetextExamples;
