import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

import { Button } from 'antd';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/FieldInfoAlert' wa... Remove this comment to see the full error message
import FieldInfoAlert from '../../common/components/FieldInfoAlert';
import pluralizeUnlessSingle from '../../../common/utils';
// @ts-expect-error ts-migrate(6142) FIXME: Module './ExistingConferencesDrawer' was resolved ... Remove this comment to see the full error message
import ExistingConferencesDrawer from './ExistingConferencesDrawer';

function ExistingConferencesAlert({
  onDatesChange,
  dates,
  numberOfConferences
}: any) {
  const [openingDate, closingDate] = dates;
  const [isDrawerVisible, setDrawerVisible] = useState(false);

  const onShowMoreClick = useCallback(() => setDrawerVisible(true), []);
  const onDrawerClose = useCallback(() => setDrawerVisible(false), []);

  useEffect(
    () => {
      if (openingDate && closingDate) {
        onDatesChange([openingDate, closingDate]);
      }
    },
    [onDatesChange, openingDate, closingDate]
  );

  return (
    numberOfConferences > 0 && (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <FieldInfoAlert
          // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
          description={
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <span>
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <strong data-test-id="conferences-exist-alert-number">
                {numberOfConferences}
              </strong>{' '}
              other {pluralizeUnlessSingle('conference', numberOfConferences)}{' '}
              found in these dates.
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Button type="link" size="small" onClick={onShowMoreClick}>
                Show more
              </Button>
            </span>
          }
        />
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <ExistingConferencesDrawer
          visible={isDrawerVisible}
          onDrawerClose={onDrawerClose}
          numberOfConferences={numberOfConferences}
        />
      </>
    )
  );
}

ExistingConferencesAlert.propTypes = {
  onDatesChange: PropTypes.func.isRequired,
  dates: PropTypes.arrayOf(PropTypes.string).isRequired,
  numberOfConferences: PropTypes.number,
};

export default ExistingConferencesAlert;
