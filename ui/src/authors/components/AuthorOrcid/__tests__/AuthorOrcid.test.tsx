import React from 'react';
import { shallow } from 'enzyme';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../AuthorOrcid' was resolved to '/Users/ka... Remove this comment to see the full error message
import AuthorOrcid from '../AuthorOrcid';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('AuthorOrcid', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('renders with orcid', () => {
    const orcid = '0000-0001-8058-0014';
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const wrapper = shallow(<AuthorOrcid orcid={orcid} />);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper).toMatchSnapshot();
  });
});
