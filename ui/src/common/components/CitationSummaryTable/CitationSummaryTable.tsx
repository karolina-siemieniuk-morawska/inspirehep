import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Link } from 'react-router-dom';

import './CitationSummaryTable.scss';
// @ts-expect-error ts-migrate(2691) FIXME: An import path cannot end with a '.tsx' extension.... Remove this comment to see the full error message
import ExternalLink from '../ExternalLink.tsx';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../LabelWithHelp' was resolved to '/Users/... Remove this comment to see the full error message
import LabelWithHelp from '../LabelWithHelp';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../LoadingOrChildren' was resolved to '/Us... Remove this comment to see the full error message
import LoadingOrChildren from '../LoadingOrChildren';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../ErrorAlertOrChildren' was resolved to '... Remove this comment to see the full error message
import ErrorAlertOrChildren from '../ErrorAlertOrChildren';
import { ErrorPropType } from '../../propTypes';
// @ts-expect-error ts-migrate(2691) FIXME: An import path cannot end with a '.tsx' extension.... Remove this comment to see the full error message
import FormattedNumber from '../FormattedNumber.tsx';
import { PUBLISHED_URL } from '../../constants';

const PUBLISHED_HELP_MESSAGE = (
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <span>
    Published papers are believed to have undergone rigorous peer review.{' '}
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <ExternalLink href={PUBLISHED_URL}>Learn More</ExternalLink>
  </span>
);

const H_INDEX_HELP_MESSAGE = (
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <span>
    The h-index is defined as the number of papers with citation number higher
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    or equal to h. <Link to="/literature/690567">Learn more</Link>
  </span>
);

function toFixedNumber(numberOrNull: any) {
  return numberOrNull == null ? 0 : numberOrNull.toFixed(1);
}

class CitationSummaryTable extends Component {
  render() {
    const {
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'publishedBucket' does not exist on type ... Remove this comment to see the full error message
      publishedBucket,
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'citeableBucket' does not exist on type '... Remove this comment to see the full error message
      citeableBucket,
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'hIndex' does not exist on type 'Readonly... Remove this comment to see the full error message
      hIndex,
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'loading' does not exist on type 'Readonl... Remove this comment to see the full error message
      loading,
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'error' does not exist on type 'Readonly<... Remove this comment to see the full error message
      error,
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'renderNumberOfCiteablePapers' does not e... Remove this comment to see the full error message
      renderNumberOfCiteablePapers,
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'renderNumberOfPublishedPapers' does not ... Remove this comment to see the full error message
      renderNumberOfPublishedPapers,
    } = this.props;

    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <LoadingOrChildren loading={loading}>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <ErrorAlertOrChildren error={error}>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <div className="__CitationTable__">
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <table>
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <tbody>
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <tr>
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <th />
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <th>
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <LabelWithHelp
                      // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
                      label="Citeable"
                      help="Citeable papers have metadata that allow us to reliably track their citations."
                    />
                  </th>
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <th>
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <LabelWithHelp
                      // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
                      label="Published"
                      help={PUBLISHED_HELP_MESSAGE}
                    />
                  </th>
                </tr>
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <tr>
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <th>Papers</th>
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <td>
                    {renderNumberOfCiteablePapers(
                      citeableBucket.get('doc_count', 0)
                    )}
                  </td>
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <td>
                    {renderNumberOfPublishedPapers(
                      publishedBucket.get('doc_count', 0)
                    )}
                  </td>
                </tr>
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <tr>
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <th>Citations</th>
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <td>
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <FormattedNumber>
                      {citeableBucket.getIn(['citations_count', 'value'], 0)}
                    </FormattedNumber>
                  </td>
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <td>
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <FormattedNumber>
                      {publishedBucket.getIn(['citations_count', 'value'], 0)}
                    </FormattedNumber>
                  </td>
                </tr>
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <tr>
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <th>
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <LabelWithHelp
                      // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
                      label="h-index"
                      help={H_INDEX_HELP_MESSAGE}
                    />
                  </th>
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <td>
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <FormattedNumber>{hIndex.get('all', 0)}</FormattedNumber>
                  </td>
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <td>
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <FormattedNumber>
                      {hIndex.get('published', 0)}
                    </FormattedNumber>
                  </td>
                </tr>
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <tr>
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <th>Citations/paper (avg)</th>
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <td>
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <FormattedNumber>
                      {toFixedNumber(
                        citeableBucket.getIn(['average_citations', 'value'], 0)
                      )}
                    </FormattedNumber>
                  </td>
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <td>
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <FormattedNumber>
                      {toFixedNumber(
                        publishedBucket.getIn(['average_citations', 'value'], 0)
                      )}
                    </FormattedNumber>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </ErrorAlertOrChildren>
      </LoadingOrChildren>
    );
  }
}

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
CitationSummaryTable.propTypes = {
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'typeof Map' is not assignable to... Remove this comment to see the full error message
  publishedBucket: PropTypes.instanceOf(Map),
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'typeof Map' is not assignable to... Remove this comment to see the full error message
  citeableBucket: PropTypes.instanceOf(Map),
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'typeof Map' is not assignable to... Remove this comment to see the full error message
  hIndex: PropTypes.instanceOf(Map),
  renderNumberOfCiteablePapers: PropTypes.func,
  renderNumberOfPublishedPapers: PropTypes.func,
  loading: PropTypes.bool.isRequired,
  error: ErrorPropType,
};

// @ts-expect-error ts-migrate(2339) FIXME: Property 'defaultProps' does not exist on type 'ty... Remove this comment to see the full error message
CitationSummaryTable.defaultProps = {
  publishedBucket: Map(),
  citeableBucket: Map(),
  hIndex: Map(),
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  renderNumberOfCiteablePapers: (value: any) => <FormattedNumber>{value}</FormattedNumber>,
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  renderNumberOfPublishedPapers: (value: any) => <FormattedNumber>{value}</FormattedNumber>,
};

export default CitationSummaryTable;
