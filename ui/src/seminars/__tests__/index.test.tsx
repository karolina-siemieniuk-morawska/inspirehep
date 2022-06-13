import React from 'react';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Provider } from 'react-redux';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { MemoryRouter } from 'react-router-dom';
import { shallow, mount } from 'enzyme';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import Loadable from 'react-loadable';

import { getStore } from '../../fixtures/store';
// @ts-expect-error ts-migrate(6142) FIXME: Module '..' was resolved to '/Users/karolinasiemie... Remove this comment to see the full error message
import Seminars from '..';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../containers/DetailPageContainer' was res... Remove this comment to see the full error message
import DetailPageContainer from '../containers/DetailPageContainer';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/SearchPage' was resolved to ... Remove this comment to see the full error message
import SearchPage from '../components/SearchPage';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('Seminars', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('renders initial state', () => {
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const component = shallow(<Seminars />);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(component).toMatchSnapshot();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('navigates to SerachPage when /seminars', async (done: any) => {
    const wrapper = mount(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Provider store={getStore()}>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <MemoryRouter initialEntries={['/seminars']} initialIndex={0}>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Seminars />
        </MemoryRouter>
      </Provider>
    );
    await Loadable.preloadAll();
    wrapper.update();

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.find(SearchPage)).toExist();

    done();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('navigates to DetailPageContainer when /seminars/:id', async (done: any) => {
    const wrapper = mount(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Provider store={getStore()}>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <MemoryRouter initialEntries={['/seminars/123']} initialIndex={0}>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Seminars />
        </MemoryRouter>
      </Provider>
    );
    await Loadable.preloadAll();
    wrapper.update();

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.find(DetailPageContainer)).toExist();

    done();
  });
});
