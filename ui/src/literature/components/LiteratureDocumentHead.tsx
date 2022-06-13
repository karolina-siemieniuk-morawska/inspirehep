import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import moment from 'moment';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/DocumentHead' was ... Remove this comment to see the full error message
import DocumentHead from '../../common/components/DocumentHead';
import { makeCompliantMetaDescription } from '../../common/utils';

const FULL_DATE_FORMAT = 'YYYY/MM/DD';

function LiteratureDocumentHead({
  metadata,
  created
}: any) {
  const title = metadata.getIn(['titles', 0, 'title']);
  const abstract = metadata.getIn(['abstracts', 0, 'value']);

  const onlineDate = moment(created).format(FULL_DATE_FORMAT);

  const arxiv = metadata.getIn(['arxiv_eprints', 0, 'value']);
  const doi = metadata.getIn(['dois', 0, 'value']);
  const citationPdfUrls = metadata.get('citation_pdf_urls');
  const authors = metadata.get('authors');

  const publicationInfo = metadata.getIn(['publication_info', 0], Map());
  const publicationDate = publicationInfo.get('year');
  const journalTitle = publicationInfo.get('journal_title');
  const journalVolume = publicationInfo.get('journal_volume');
  const journalIssue = publicationInfo.get('journal_issue');
  const pageStart = publicationInfo.get('page_start');
  const pageEnd = publicationInfo.get('page_end');
  return (
    // `citation_*` meta tags are used by Google Scholar
    // https://scholar.google.com/intl/en/scholar/inclusion.html#indexing
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <DocumentHead
      // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
      title={title}
      description={makeCompliantMetaDescription(abstract)}
    >
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <meta name="citation_title" content={title} />
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <meta name="citation_online_date" content={onlineDate} />

      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      {abstract && <meta name="citation_abstract" content={abstract} />}

      {publicationDate && (
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <meta name="citation_publication_date" content={publicationDate} />
      )}
      {arxiv && (
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <meta
          name="citation_technical_report_number"
          content={`arXiv:${arxiv}`}
        />
      )}
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      {doi && <meta name="citation_doi" content={doi} />}

      {citationPdfUrls &&
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        citationPdfUrls.map((link: any) => <meta key={link} name="citation_pdf_url" content={link} />)}

      {authors &&
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        authors.map((author: any) => <meta
          key={author.get('full_name')}
          name="citation_author"
          content={author.get('full_name')}
        />)}

      {journalTitle && (
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <meta name="citation_journal_title" content={journalTitle} />
      )}
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      {journalVolume && <meta name="citation_volume" content={journalVolume} />}
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      {journalIssue && <meta name="citation_issue" content={journalIssue} />}
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      {pageStart && <meta name="citation_firstpage" content={pageStart} />}
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      {pageEnd && <meta name="citation_lastpage" content={pageEnd} />}
    </DocumentHead>
  );
}

LiteratureDocumentHead.propTypes = {
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'typeof Map' is not assignable to... Remove this comment to see the full error message
  metadata: PropTypes.instanceOf(Map).isRequired,
  created: PropTypes.string.isRequired,
};

export default LiteratureDocumentHead;
