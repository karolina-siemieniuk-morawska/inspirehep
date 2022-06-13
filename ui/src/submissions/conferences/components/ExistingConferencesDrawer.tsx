import React from 'react';
import PropTypes from 'prop-types';
import { Drawer } from 'antd';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../../common/containers/ResultsContaine... Remove this comment to see the full error message
import ResultsContainer from '../../../common/containers/ResultsContainer';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../../conferences/components/Conference... Remove this comment to see the full error message
import ConferenceItem from '../../../conferences/components/ConferenceItem';
import { EXISTING_CONFERENCES_NS } from '../../../search/constants';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../../common/containers/PaginationConta... Remove this comment to see the full error message
import PaginationContainer from '../../../common/containers/PaginationContainer';
import pluralizeUnlessSingle from '../../../common/utils';

function renderConferenceItem(result: any) {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <ConferenceItem metadata={result.get('metadata')} openDetailInNewTab />
  );
}

function ExistingConferencesDrawer({
  visible,
  onDrawerClose,
  numberOfConferences
}: any) {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Drawer
      className="search-drawer"
      placement="right"
      closable={false}
      onClose={onDrawerClose}
      visible={visible}
    >
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <p>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <strong>{numberOfConferences}</strong>{' '}
        {pluralizeUnlessSingle('conference', numberOfConferences)} found in
        these dates:
      </p>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <ResultsContainer
        namespace={EXISTING_CONFERENCES_NS}
        renderItem={renderConferenceItem}
      />
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <PaginationContainer namespace={EXISTING_CONFERENCES_NS} />
    </Drawer>
  );
}

ExistingConferencesDrawer.propTypes = {
  visible: PropTypes.bool,
  onDrawerClose: PropTypes.func,
  numberOfConferences: PropTypes.number,
};

export default ExistingConferencesDrawer;
