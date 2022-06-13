import React, { Component } from 'react';
import { Field } from 'formik';
import { Row, Col } from 'antd';
import PropTypes from 'prop-types';

import ArrayOf from '../../common/components/ArrayOf';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/SuggesterField' wa... Remove this comment to see the full error message
import SuggesterField from '../../common/components/SuggesterField';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/AuthorSuggesterFie... Remove this comment to see the full error message
import AuthorSuggesterField from '../../common/components/AuthorSuggesterField';

class LiteratureAuthorsField extends Component {
  static getSuggestionSourceLegacyICN(suggestion: any) {
    return suggestion._source.legacy_ICN;
  }

  render() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'values' does not exist on type 'Readonly... Remove this comment to see the full error message
    const { values, name, label } = this.props;

    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <ArrayOf
        // @ts-expect-error ts-migrate(2322) FIXME: Type '{ values: any; name: any; label: any; emptyI... Remove this comment to see the full error message
        values={values}
        name={name}
        label={label}
        emptyItem={{}}
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        renderItem={(itemName: any) => <Row type="flex" justify="space-between">
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Col span={11}>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <AuthorSuggesterField
              onlyChild
              name={`${itemName}.full_name`}
              recordFieldPath={`${itemName}.record`}
              placeholder="Family name, first name"
            />
          </Col>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Col span={11}>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Field
              onlyChild
              name={`${itemName}.affiliation`}
              recordFieldPath={`${itemName}.affiliation_record`}
              placeholder="Affiliation, type for suggestions"
              pidType="institutions"
              suggesterName="affiliation"
              searchAsYouType
              extractItemCompletionValue={
                LiteratureAuthorsField.getSuggestionSourceLegacyICN
              }
              component={SuggesterField}
            />
          </Col>
        </Row>}
      />
    );
  }
}

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
LiteratureAuthorsField.propTypes = {
  values: PropTypes.objectOf(PropTypes.any).isRequired, // current form data
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default LiteratureAuthorsField;
