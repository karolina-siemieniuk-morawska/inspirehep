import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../AuthorsAndCollaborations' was resolved ... Remove this comment to see the full error message
import AuthorsAndCollaborations from '../AuthorsAndCollaborations';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('AuthorsAndCollaborations', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('renders only author list if collaborations are missing (default author props)', () => {
    const authors = fromJS([
      {
        full_name: 'Test, Guy 1',
      },
    ]);
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <AuthorsAndCollaborations authors={authors} />
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper).toMatchSnapshot();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('renders only author list if collaborations are missing (extra author props)', () => {
    const authors = fromJS([
      {
        full_name: 'Test, Guy 1',
      },
    ]);
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <AuthorsAndCollaborations
        // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
        authors={authors}
        authorCount={1}
        enableAuthorsShowAll
      />
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper).toMatchSnapshot();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('renders only one collaboration and author for the collaboration', () => {
    const authors = fromJS([
      {
        full_name: 'Test, Guy 1',
      },
    ]);
    const collaborations = fromJS([
      {
        value: 'Test Collab 1',
      },
    ]);
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <AuthorsAndCollaborations
        // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
        enableAuthorsShowAll
        authors={authors}
        authorCount={1}
        collaborations={collaborations}
      />
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper).toMatchSnapshot();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('renders multiple collaborations and author for the collaborations', () => {
    const authors = fromJS([
      {
        full_name: 'Test, Guy 1',
      },
    ]);
    const collaborations = fromJS([
      {
        value: 'Test Collab 1',
      },
      {
        value: 'Test Collab 2',
      },
    ]);
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <AuthorsAndCollaborations
        // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
        enableAuthorsShowAll
        authors={authors}
        authorCount={1}
        collaborations={collaborations}
      />
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper).toMatchSnapshot();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('renders collaboration list with single item and author list with limit 1 if there are multiple authors', () => {
    const authors = fromJS([
      {
        full_name: 'Test, Guy 1',
      },
      {
        full_name: 'Test, Guy 2',
      },
    ]);
    const collaborationsWithSuffix = fromJS([
      {
        value: 'Test 1 Group',
      },
    ]);
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <AuthorsAndCollaborations
        // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
        enableAuthorsShowAll
        authors={authors}
        authorCount={12}
        collaborationsWithSuffix={collaborationsWithSuffix}
      />
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper).toMatchSnapshot();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('renders collaboration list and author list if collaborations and authors have multiple items', () => {
    const authors = fromJS([
      {
        full_name: 'Test, Guy 1',
      },
      {
        full_name: 'Test, Guy 2',
      },
    ]);
    const collaborationsWithSuffix = fromJS([
      {
        value: 'Test 1 Group',
      },
      {
        value: 'Test 2 Group',
      },
    ]);
    const collaborations = fromJS([
      {
        value: 'Test Collab 1',
      },
    ]);
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <AuthorsAndCollaborations
        // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
        enableAuthorsShowAll
        authors={authors}
        authorCount={12}
        collaborations={collaborations}
        collaborationsWithSuffix={collaborationsWithSuffix}
      />
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper).toMatchSnapshot();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('does not render bullet if authors missing', () => {
    const collaborationsWithSuffix = fromJS([
      {
        value: 'Test 1 Group',
      },
      {
        value: 'Test 2 Group',
      },
    ]);
    const collaborations = fromJS([
      {
        value: 'Test Collab 1',
      },
    ]);
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <AuthorsAndCollaborations
        // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
        collaborations={collaborations}
        collaborationsWithSuffix={collaborationsWithSuffix}
      />
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper).toMatchSnapshot();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('does not render bullet if authors missing with single collaboration', () => {
    const collaborations = fromJS([
      {
        value: 'Test Collab 1',
      },
    ]);
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <AuthorsAndCollaborations
        // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
        collaborations={collaborations}
      />
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper).toMatchSnapshot();
  });
});
