import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';
import { DownloadOutlined } from '@ant-design/icons';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../UrlsAction' was resolved to '/Users/kar... Remove this comment to see the full error message
import UrlsAction from '../UrlsAction';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('UrlsAction', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('renders multiple, with and without description', () => {
    const links = fromJS([
      {
        description: 'Whatever',
        value: 'https://www.whatever.com/pdfs/fulltext.pdf',
      },
      { value: 'www.descriptionless.com/fulltext.pdf' },
    ]);
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <UrlsAction
        urls={links}
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        icon={<DownloadOutlined />}
        text="download"
        trackerEventId="PdfDownload"
      />
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.dive()).toMatchSnapshot();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('renders single', () => {
    const links = fromJS([
      {
        description: 'Whatever',
        value: 'https://www.whatever.com/pdfs/fulltext.pdf',
      },
    ]);
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <UrlsAction
        urls={links}
        text="pdf"
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        icon={<DownloadOutlined />}
        trackerEventId="PdfDownload"
      />
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.dive()).toMatchSnapshot();
  });
});
