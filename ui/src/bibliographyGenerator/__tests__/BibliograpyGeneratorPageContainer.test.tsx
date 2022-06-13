import React from 'react';
import { mount } from 'enzyme';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../BibliographyGeneratorPageContainer' was... Remove this comment to see the full error message
import BibliographyGeneratorPageContainer from '../BibliographyGeneratorPageContainer';
import { getStoreWithState } from '../../fixtures/store';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../BibliographyGenerator' was resolved to ... Remove this comment to see the full error message
import BibliographyGenerator from '../BibliographyGenerator';
import { BIBLIOGRAPHY_GENERATOR_REQUEST } from '../../actions/actionTypes';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('BibliographyGeneratorPageContainer', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('passes props down', () => {
    const store = getStoreWithState({
      bibliographyGenerator: fromJS({
        data: { download_url: 'https://google.com' },
        citationErrors: [
          {
            message: 'Citation error 1',
          },
        ],
        error: { message: 'Error' },
        loading: false,
      }),
    });
    const wrapper = mount(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Provider store={store}>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <BibliographyGeneratorPageContainer />
      </Provider>
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.find(BibliographyGenerator)).toHaveProp({
      data: fromJS({ download_url: 'https://google.com' }),
      citationErrors: fromJS([{ message: 'Citation error 1' }]),
      error: fromJS({ message: 'Error' }),
      loading: false,
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('dispatches BIBLIOGRAPHY_GENERATOR_REQUEST on submission', () => {
    const store = getStoreWithState({
      bibliographyGenerator: fromJS({
        data: { download_url: 'https://google.com' },
        citationErrors: [
          {
            message: 'Citation error 1',
          },
        ],
        error: { message: 'Error' },
        loading: false,
      }),
    });
    const data = {
      format: 'bibtex',
      fileupload: {
        file: 'this is a file',
      },
    };
    const wrapper = mount(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Provider store={store}>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <BibliographyGeneratorPageContainer />
      </Provider>
    );
    const onSubmit = wrapper.find(BibliographyGenerator).prop('onSubmit');
    onSubmit(data);
    const expectedActions = [
      {
        type: BIBLIOGRAPHY_GENERATOR_REQUEST,
      },
    ];
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(store.getActions()).toEqual(expectedActions);
  });
});
