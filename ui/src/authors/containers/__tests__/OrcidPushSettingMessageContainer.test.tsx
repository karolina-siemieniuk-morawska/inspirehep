import React from 'react';
import { mount } from 'enzyme';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';

import { getStoreWithState } from '../../../fixtures/store';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../OrcidPushSettingMessageContainer' was r... Remove this comment to see the full error message
import OrcidPushSettingMessageContainer from '../OrcidPushSettingMessageContainer';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../components/OrcidPushSettingMessage' ... Remove this comment to see the full error message
import OrcidPushSettingMessage from '../../components/OrcidPushSettingMessage';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('OrcidPushSettingMessageContainer', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('passes state to props', () => {
    const store = getStoreWithState({
      user: fromJS({
        data: {
          allow_orcid_push: false,
          orcid: '0000-0001-8058-0014',
        },
      }),
      authors: fromJS({
        data: {
          metadata: {
            control_number: 1,
            bai: 'Author.1.E',
          },
        },
      }),
    });
    const wrapper = mount(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Provider store={store}>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <OrcidPushSettingMessageContainer />
      </Provider>
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.find(OrcidPushSettingMessage)).toHaveProp({
      orcid: '0000-0001-8058-0014',
      enabled: false,
    });
  });
});
