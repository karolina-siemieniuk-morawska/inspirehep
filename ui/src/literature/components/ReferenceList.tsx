import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';

import ContentBox from '../../common/components/ContentBox';
// @ts-expect-error ts-migrate(6142) FIXME: Module './ReferenceItem' was resolved to '/Users/k... Remove this comment to see the full error message
import ReferenceItem from './ReferenceItem';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/ErrorAlertOrChildr... Remove this comment to see the full error message
import ErrorAlertOrChildren from '../../common/components/ErrorAlertOrChildren';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/EmptyOrChildren' w... Remove this comment to see the full error message
import EmptyOrChildren from '../../common/components/EmptyOrChildren';
import { ErrorPropType } from '../../common/propTypes';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/ListWithPagination... Remove this comment to see the full error message
import ListWithPagination from '../../common/components/ListWithPagination';

function ReferenceList({
  total,
  references,
  error,
  loading,
  onQueryChange,
  query
}: any) {
  const renderReferenceItem = useCallback(
    (reference, index) => (
      // reference data model doesn't have any identifier, thus we have hack for `key`
      // FIXME: find an proper key for reference item as index might cause bugs
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <ReferenceItem
        key={reference.getIn(['titles', 0, 'title']) || String(index)}
        // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
        reference={reference}
      />
    ),
    []
  );

  const onPageChange = useCallback(page => onQueryChange({ page }), [
    onQueryChange,
  ]);

  const onSizeChange = useCallback(
    (page, size) => onQueryChange({ size, page: '1' }),
    [onQueryChange]
  );

  const renderList = useCallback(
    () =>
      total > 0 && (
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <ListWithPagination
          // @ts-expect-error ts-migrate(2322) FIXME: Type '{ renderItem: (reference: any, index: any) =... Remove this comment to see the full error message
          renderItem={renderReferenceItem}
          pageItems={references}
          onPageChange={onPageChange}
          onSizeChange={onSizeChange}
          total={total}
          page={query.page}
          pageSize={query.size}
        />
      ),
    [
      query.page,
      query.size,
      total,
      references,
      renderReferenceItem,
      onPageChange,
      onSizeChange,
    ]
  );

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <ContentBox loading={loading}>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <ErrorAlertOrChildren error={error}>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <EmptyOrChildren data={references} title="0 References">
          {renderList()}
        </EmptyOrChildren>
      </ErrorAlertOrChildren>
    </ContentBox>
  );
}
ReferenceList.propTypes = {
  total: PropTypes.number.isRequired,
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'typeof List' is not assignable t... Remove this comment to see the full error message
  references: PropTypes.instanceOf(List).isRequired,
  error: ErrorPropType,
  loading: PropTypes.bool.isRequired,
  onQueryChange: PropTypes.func.isRequired,
  query: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ReferenceList;
