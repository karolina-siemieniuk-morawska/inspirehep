import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../AuthorWebsitesAction' was resolved to '... Remove this comment to see the full error message
import AuthorWebsitesAction from '../AuthorWebsitesAction';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('AuthorWebsitesAction', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('renders with a blog and urls in a dropdown', () => {
    const websites = fromJS([
      { description: 'Whatever', value: 'https://www.whatever.com/author' },
      { description: 'BLOG', value: 'https://author.wordpress.com' },
      { value: 'www.descriptionless.com/url' },
    ]);
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const wrapper = shallow(<AuthorWebsitesAction websites={websites} />);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.dive()).toMatchSnapshot();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('renders only blog', () => {
    const websites = fromJS([
      { description: 'blog', value: 'https://author.wordpress.com' },
    ]);
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const wrapper = shallow(<AuthorWebsitesAction websites={websites} />);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.dive()).toMatchSnapshot();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('renders only a url', () => {
    const websites = fromJS([{ value: 'www.descriptionless.com/url' }]);
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const wrapper = shallow(<AuthorWebsitesAction websites={websites} />);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.dive()).toMatchSnapshot();
  });
});
