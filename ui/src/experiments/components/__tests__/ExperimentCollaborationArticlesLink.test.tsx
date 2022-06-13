import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../ExperimentCollaborationArticlesLink' wa... Remove this comment to see the full error message
import ExperimentCollaborationArticlesLink from '../ExperimentCollaborationArticlesLink';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('ExperimentCollaborationArticlesLink', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('renders', () => {
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <ExperimentCollaborationArticlesLink
        collaboration={fromJS({ value: 'Atlas' })}
      />
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper).toMatchSnapshot();
  });
});
