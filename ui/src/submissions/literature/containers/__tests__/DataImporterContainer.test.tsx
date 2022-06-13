import React from 'react';
import { fromJS } from 'immutable';
import { mount } from 'enzyme';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Provider } from 'react-redux';

import { getStoreWithState, getStore } from '../../../../fixtures/store';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../DataImporterContainer' was resolved to ... Remove this comment to see the full error message
import DataImporterContainer from '../DataImporterContainer';
import { INITIAL_FORM_DATA_REQUEST } from '../../../../actions/actionTypes';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../components/DataImporter' was resolve... Remove this comment to see the full error message
import DataImporter from '../../components/DataImporter';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('DataImporterContainer', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('passes props from state', () => {
    const store = getStoreWithState({
      submissions: fromJS({
        loadingInitialData: true,
        initialDataError: { message: 'Import Error' },
      }),
    });
    const wrapper = mount(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Provider store={store}>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <DataImporterContainer onSkipClick={jest.fn()} />
      </Provider>
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.find(DataImporter)).toHaveProp({
      isImporting: true,
      error: fromJS({ message: 'Import Error' }),
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('dispatches initial data request on import click', () => {
    const store = getStore();
    const importValue = 'arXiv:1001.1234';
    const wrapper = mount(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Provider store={store}>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <DataImporterContainer onSkipClick={jest.fn()} />
      </Provider>
    );
    const onImportClick = wrapper.find(DataImporter).prop('onImportClick');
    // @ts-expect-error ts-migrate(2571) FIXME: Object is of type 'unknown'.
    onImportClick(importValue);

    const actions = store.getActions();
    const expectedAction = actions.find(
      (action: any) => action.type === INITIAL_FORM_DATA_REQUEST &&
      action.payload.id === importValue
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(expectedAction).toBeDefined();
  });
});
