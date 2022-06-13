import React from 'react';
import { shallow } from 'enzyme';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../InstitutionPeople' was resolved to '/Us... Remove this comment to see the full error message
import InstitutionPeople from '../InstitutionPeople';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('InstitutionPeople', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('renders', () => {
    const recordId = 123;
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const wrapper = shallow(<InstitutionPeople recordId={recordId} />);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper).toMatchSnapshot();
  });
});
