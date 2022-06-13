import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../ArxivEprint' was resolved to '/Users/ka... Remove this comment to see the full error message
import ArxivEprint from '../ArxivEprint';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('ArxivEprint', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('renders with arXiv id', () => {
    const eprint = fromJS({
      value: '123.12345',
      categories: ['cat'],
    });
    const wrapper = shallow((
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <ArxivEprint
        // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
        eprint={eprint}
      />
    ));
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper).toMatchSnapshot();
  });
});
