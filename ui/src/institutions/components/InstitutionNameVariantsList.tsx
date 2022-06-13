import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import InlineList from '../../common/components/InlineList';

function renderNameVariant(nameVariant: any) {
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return <span>{nameVariant.get('value')}</span>;
}

function extractKeyFromNameVariant(nameVariant: any) {
  return nameVariant.get('value');
}

function InstitutionsNameVariantsList({
  nameVariants
}: any) {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <InlineList
      // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
      label="Name Variants"
      items={nameVariants}
      extractKey={extractKeyFromNameVariant}
      renderItem={renderNameVariant}
    />
  );
}

InstitutionsNameVariantsList.propTypes = {
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'typeof List' is not assignable t... Remove this comment to see the full error message
  nameVariants: PropTypes.instanceOf(List),
};

export default InstitutionsNameVariantsList;
