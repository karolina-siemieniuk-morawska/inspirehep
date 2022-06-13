import React from 'react';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Provider } from 'react-redux';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { MemoryRouter } from 'react-router-dom';
import { shallow, mount } from 'enzyme';
import { fromJS } from 'immutable';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import Loadable from 'react-loadable';

import { getStore, getStoreWithState } from '../../fixtures/store';
// @ts-expect-error ts-migrate(6142) FIXME: Module '..' was resolved to '/Users/karolinasiemie... Remove this comment to see the full error message
import Submissions from '..';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../authors/containers/AuthorSubmissionPage... Remove this comment to see the full error message
import AuthorSubmissionPageContainer from '../authors/containers/AuthorSubmissionPageContainer';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../common/components/SubmissionSuccessPage... Remove this comment to see the full error message
import SubmissionSuccessPage from '../common/components/SubmissionSuccessPage';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../authors/containers/AuthorUpdateSubmissi... Remove this comment to see the full error message
import AuthorUpdateSubmissionPageContainer from '../authors/containers/AuthorUpdateSubmissionPageContainer';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../literature/containers/LiteratureSubmiss... Remove this comment to see the full error message
import LiteratureSubmissionPageContainer from '../literature/containers/LiteratureSubmissionPageContainer';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../jobs/containers/JobUpdateSubmissionPage... Remove this comment to see the full error message
import JobUpdateSubmissionPageContainer from '../jobs/containers/JobUpdateSubmissionPageContainer';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../jobs/containers/JobSubmissionPageContai... Remove this comment to see the full error message
import JobSubmissionPageContainer from '../jobs/containers/JobSubmissionPageContainer';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../jobs/components/JobUpdateSubmissionSucc... Remove this comment to see the full error message
import JobUpdateSubmissionSuccessPage from '../jobs/components/JobUpdateSubmissionSuccessPage';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../conferences/containers/ConferenceSubmis... Remove this comment to see the full error message
import ConferenceSubmissionSuccessPageContainer from '../conferences/containers/ConferenceSubmissionSuccessPageContainer';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../conferences/containers/ConferenceSubmis... Remove this comment to see the full error message
import ConferenceSubmissionPageContainer from '../conferences/containers/ConferenceSubmissionPageContainer';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../seminars/containers/SeminarSubmissionPa... Remove this comment to see the full error message
import SeminarSubmissionPageContainer from '../seminars/containers/SeminarSubmissionPageContainer';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../seminars/containers/SeminarUpdateSubmis... Remove this comment to see the full error message
import SeminarUpdateSubmissionPageContainer from '../seminars/containers/SeminarUpdateSubmissionPageContainer';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../seminars/containers/SeminarSubmissionSu... Remove this comment to see the full error message
import SeminarSubmissionSuccessPageContainer from '../seminars/containers/SeminarSubmissionSuccessPageContainer';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../authors/components/AuthorUpdateSubmissi... Remove this comment to see the full error message
import AuthorUpdateSubmissionSuccessPage from '../authors/components/AuthorUpdateSubmissionSuccessPage';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('Submissions', () => {
  let element: any;

  // This is needed for the custom toolbar for the RichTextEditor in the JobSubmission.
  // Mount only renders components to div element and, in this case, we need to attach it to the DOM
  // because the custom toolbar uses DOM manipulation methods such as getElementById, classList.add and so on
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'beforeAll'.
  beforeAll(() => {
    element = document.createElement('div');
    document.body.appendChild(element);
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('renders initial state', () => {
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const component = shallow(<Submissions />);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(component).toMatchSnapshot();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('navigates to AuthorSubmissionPageContainer when /submissions/authors', async () => {
    const wrapper = mount(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Provider store={getStore()}>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <MemoryRouter
          initialEntries={['/submissions/authors']}
          initialIndex={0}
        >
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Submissions />
        </MemoryRouter>
      </Provider>
    );
    await Loadable.preloadAll();
    wrapper.update();

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.find(AuthorSubmissionPageContainer)).toExist();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('navigates to LiteratureSubmissionPageContainer when /submissions/literature if whatever user', async () => {
    const store = getStoreWithState({
      user: fromJS({
        loggedIn: true,
        data: {
          roles: ['whatever'],
        },
      }),
    });
    const wrapper = mount(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Provider store={store}>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <MemoryRouter
          initialEntries={['/submissions/literature']}
          initialIndex={0}
        >
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Submissions />
        </MemoryRouter>
      </Provider>
    );
    await Loadable.preloadAll();
    wrapper.update();

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.find(LiteratureSubmissionPageContainer)).toExist();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('navigates to AuthorUpdateSubmissionPageContainer when /submissions/authors/:id', async () => {
    const wrapper = mount(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Provider store={getStore()}>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <MemoryRouter
          initialEntries={['/submissions/authors/1']}
          initialIndex={0}
        >
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Submissions />
        </MemoryRouter>
      </Provider>
    );
    await Loadable.preloadAll();
    wrapper.update();

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.find(AuthorUpdateSubmissionPageContainer)).toExist();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('navigates to JobSubmissionPageContainer when /submissions/jobs', async () => {
    const wrapper = mount(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Provider store={getStore()}>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <MemoryRouter initialEntries={['/submissions/jobs']} initialIndex={0}>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Submissions />
        </MemoryRouter>
      </Provider>,
      { attachTo: element }
    );
    await Loadable.preloadAll();
    wrapper.update();

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.find(JobSubmissionPageContainer)).toExist();
    wrapper.detach();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('navigates to ConferenceSubmissionPageContainer when /submissions/conferences', async () => {
    const wrapper = mount(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Provider store={getStore()}>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <MemoryRouter
          initialEntries={['/submissions/conferences']}
          initialIndex={0}
        >
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Submissions />
        </MemoryRouter>
      </Provider>,
      { attachTo: element }
    );
    await Loadable.preloadAll();
    wrapper.update();

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.find(ConferenceSubmissionPageContainer)).toExist();
    wrapper.detach();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('navigates to JobUpdateSubmissionPageContainer when /submissions/jobs/:id', async () => {
    const wrapper = mount(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Provider store={getStore()}>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <MemoryRouter initialEntries={['/submissions/jobs/1']} initialIndex={0}>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Submissions />
        </MemoryRouter>
      </Provider>,
      { attachTo: element }
    );
    await Loadable.preloadAll();
    wrapper.update();

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.find(JobUpdateSubmissionPageContainer)).toExist();
    wrapper.detach();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('navigates to SeminarSubmissionPageContainer when /submissions/seminars', async () => {
    const wrapper = mount(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Provider store={getStore()}>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <MemoryRouter
          initialEntries={['/submissions/seminars']}
          initialIndex={0}
        >
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Submissions />
        </MemoryRouter>
      </Provider>,
      { attachTo: element }
    );
    await Loadable.preloadAll();
    wrapper.update();

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.find(SeminarSubmissionPageContainer)).toExist();
    wrapper.detach();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('navigates to SeminarUpdateSubmissionPageContainer when /submissions/seminars/:id', async () => {
    const wrapper = mount(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Provider store={getStore()}>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <MemoryRouter
          initialEntries={['/submissions/seminars/1']}
          initialIndex={0}
        >
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Submissions />
        </MemoryRouter>
      </Provider>,
      { attachTo: element }
    );
    await Loadable.preloadAll();
    wrapper.update();

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.find(SeminarUpdateSubmissionPageContainer)).toExist();
    wrapper.detach();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('navigates to SubmissionSuccessPage when /submissions/success', async () => {
    const wrapper = mount(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Provider store={getStore()}>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <MemoryRouter
          initialEntries={['/submissions/success']}
          initialIndex={0}
        >
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Submissions />
        </MemoryRouter>
      </Provider>
    );
    await Loadable.preloadAll();
    wrapper.update();

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.find(SubmissionSuccessPage)).toExist();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('navigates to SubmissionSuccessPage when /submissions/literature/new/success', async () => {
    const wrapper = mount(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Provider store={getStore()}>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <MemoryRouter
          initialEntries={['/submissions/literature/new/success']}
          initialIndex={0}
        >
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Submissions />
        </MemoryRouter>
      </Provider>
    );
    await Loadable.preloadAll();
    wrapper.update();

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.find(SubmissionSuccessPage)).toExist();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('navigates to ConferenceSubmissionSuccessPageContainer when /submissions/conferences/new/success', async () => {
    const wrapper = mount(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Provider store={getStore()}>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <MemoryRouter
          initialEntries={['/submissions/conferences/new/success']}
          initialIndex={0}
        >
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Submissions />
        </MemoryRouter>
      </Provider>
    );
    await Loadable.preloadAll();
    wrapper.update();

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.find(ConferenceSubmissionSuccessPageContainer)).toExist();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('navigates to SubmissionSuccessPage when /submissions/athors/new/success', async () => {
    const wrapper = mount(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Provider store={getStore()}>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <MemoryRouter
          initialEntries={['/submissions/authors/new/success']}
          initialIndex={0}
        >
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Submissions />
        </MemoryRouter>
      </Provider>
    );
    await Loadable.preloadAll();
    wrapper.update();

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.find(SubmissionSuccessPage)).toExist();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('navigates to JobUpdateSubmissionSuccessPage when /submissions/jobs/1/success', async () => {
    const wrapper = mount(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Provider store={getStore()}>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <MemoryRouter
          initialEntries={['/submissions/jobs/1/success']}
          initialIndex={0}
        >
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Submissions />
        </MemoryRouter>
      </Provider>
    );
    await Loadable.preloadAll();
    wrapper.update();

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.find(JobUpdateSubmissionSuccessPage)).toExist();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('navigates to SeminarSubmissionSuccessPageContainer when /submissions/seminars/new/success', async () => {
    const wrapper = mount(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Provider store={getStore()}>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <MemoryRouter
          initialEntries={['/submissions/seminars/new/success']}
          initialIndex={0}
        >
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Submissions />
        </MemoryRouter>
      </Provider>
    );
    await Loadable.preloadAll();
    wrapper.update();

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.find(SeminarSubmissionSuccessPageContainer)).toExist();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('navigates to SeminarSubmissionSuccessPageContainer when /submissions/seminars/1/success', async () => {
    const wrapper = mount(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Provider store={getStore()}>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <MemoryRouter
          initialEntries={['/submissions/seminars/1/success']}
          initialIndex={0}
        >
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Submissions />
        </MemoryRouter>
      </Provider>
    );
    await Loadable.preloadAll();
    wrapper.update();

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.find(SeminarSubmissionSuccessPageContainer)).toExist();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('navigates to SubmissionSuccessPage when /submissions/authors/1/success', async () => {
    const wrapper = mount(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Provider store={getStore()}>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <MemoryRouter
          initialEntries={['/submissions/authors/1/success']}
          initialIndex={0}
        >
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Submissions />
        </MemoryRouter>
      </Provider>
    );
    await Loadable.preloadAll();
    wrapper.update();

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.find(AuthorUpdateSubmissionSuccessPage)).toExist();
  });
});
