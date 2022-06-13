import React from 'react';
import { mount } from 'enzyme';
import { fromJS } from 'immutable';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Provider } from 'react-redux';

import { getStoreWithState, getStore } from '../../../fixtures/store';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../CiteModalActionContainer' was resolved ... Remove this comment to see the full error message
import CiteModalActionContainer from '../CiteModalActionContainer';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../components/CiteModalAction' was reso... Remove this comment to see the full error message
import CiteModalAction from '../../components/CiteModalAction';
import { setPreference } from '../../../actions/user';
import { CITE_FORMAT_PREFERENCE } from '../../../reducers/user';

// @ts-expect-error ts-migrate(2708) FIXME: Cannot use namespace 'jest' as a value.
jest.mock('../../../actions/user');

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('CiteModalActionContainer', () => {
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'beforeAll'.
  beforeAll(() => {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'mockReturnValue' does not exist on type ... Remove this comment to see the full error message
    setPreference.mockReturnValue(async () => {});
  });

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'afterEach'.
  afterEach(() => {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'mockClear' does not exist on type '(name... Remove this comment to see the full error message
    setPreference.mockClear();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('passes user preferred cite format as initialCiteFormat', () => {
    const store = getStoreWithState({
      user: fromJS({
        preferences: {
          [CITE_FORMAT_PREFERENCE]: 'x-bibtex',
        },
      }),
    });
    const wrapper = mount(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Provider store={store}>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CiteModalActionContainer recordId={12345} />
      </Provider>
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.find(CiteModalAction)).toHaveProp({
      initialCiteFormat: 'x-bibtex',
      recordId: 12345,
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('calls setPreferredCiteFormat on CiteModalAction cite format change', () => {
    const store = getStore();
    const wrapper = mount(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Provider store={store}>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CiteModalActionContainer recordId={12345} />
      </Provider>
    );
    const format = 'x-bibtex';
    const onCiteFormatChange = wrapper
      .find(CiteModalAction)
      .prop('onCiteFormatChange');
    // @ts-expect-error ts-migrate(2571) FIXME: Object is of type 'unknown'.
    onCiteFormatChange(format);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(setPreference).toHaveBeenCalledWith(CITE_FORMAT_PREFERENCE, format);
  });
});
