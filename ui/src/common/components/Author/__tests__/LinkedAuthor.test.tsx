import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../LinkedAuthor' was resolved to '/Users/k... Remove this comment to see the full error message
import LinkedAuthor from '../LinkedAuthor';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('AuthorWithBAI', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('renders', () => {
    const author = fromJS({
      full_name: 'Name, Full',
      record: {
        $ref: 'https://beta.inspirehep.net/api/authors/12345',
      },
      bai: 'Full.Name.1',
    });
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const wrapper = shallow(<LinkedAuthor author={author} />);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper).toMatchSnapshot();
  });
});
