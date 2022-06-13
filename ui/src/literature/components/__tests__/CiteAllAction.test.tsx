import MockAdapter from 'axios-mock-adapter';
import React from 'react';
import { shallow } from 'enzyme';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../CiteAllAction' was resolved to '/Users/... Remove this comment to see the full error message
import CiteAllAction from '../CiteAllAction';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../../common/components/DropdownMenu' w... Remove this comment to see the full error message
import DropdownMenu from '../../../common/components/DropdownMenu';
import { MAX_CITEABLE_RECORDS } from '../../constants';
// @ts-expect-error ts-migrate(2691) FIXME: An import path cannot end with a '.ts' extension. ... Remove this comment to see the full error message
import http from '../../../common/http.ts';
import { downloadTextAsFile } from '../../../common/utils';

// @ts-expect-error ts-migrate(2708) FIXME: Cannot use namespace 'jest' as a value.
jest.mock('../../../common/utils');

const mockHttp = new MockAdapter(http.httpClient);
// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('CiteAllAction', () => {
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'beforeEach'.
  beforeEach(() => {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'mockClear' does not exist on type '(text... Remove this comment to see the full error message
    downloadTextAsFile.mockClear();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('renders with less than max citeable records results', () => {
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <CiteAllAction numberOfResults={12} query={{ q: 'ac>2000' }} />
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper).toMatchSnapshot();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('renders with disabled', () => {
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <CiteAllAction
        // @ts-expect-error ts-migrate(2322) FIXME: Type '{ numberOfResults: number; query: { q: strin... Remove this comment to see the full error message
        numberOfResults={MAX_CITEABLE_RECORDS + 1}
        query={{ q: 'ac>2000' }}
      />
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper).toMatchSnapshot();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('renders with loading', () => {
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <CiteAllAction numberOfResults={12} query={{ q: 'ac>2000' }} />
    );
    wrapper.setState({
      loading: true,
    });
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper).toMatchSnapshot();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('calls downloadTextAsFile with correct data when option is clicked', async () => {
    mockHttp
      .onGet(
        `/literature?sort=mostcited&q=query&page=1&size=${MAX_CITEABLE_RECORDS}`,
        // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'null' is not assignable to param... Remove this comment to see the full error message
        null,
        {
          Accept: 'application/vnd+inspire.latex.eu+x-latex',
        }
      )
      .replyOnce(200, 'Test');
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <CiteAllAction
        // @ts-expect-error ts-migrate(2322) FIXME: Type '{ numberOfResults: number; query: { sort: st... Remove this comment to see the full error message
        numberOfResults={12}
        query={{ sort: 'mostcited', q: 'query' }}
      />
    );
    // @ts-expect-error ts-migrate(2571) FIXME: Object is of type 'unknown'.
    await wrapper.find(DropdownMenu).prop('onClick')({
      key: 'application/vnd+inspire.latex.eu+x-latex',
    });
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(downloadTextAsFile).toHaveBeenCalledWith(
      'Test',
      'INSPIRE-CiteAll.tex',
      'application/x-latex'
    );
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('calls downloadTextAsFile with correct data omitting page and size when option is clicked', async () => {
    mockHttp
      .onGet(
        `/literature?sort=mostrecent&q=query&page=1&size=${MAX_CITEABLE_RECORDS}`,
        // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'null' is not assignable to param... Remove this comment to see the full error message
        null,
        {
          Accept: 'application/vnd+inspire.latex.eu+x-latex',
        }
      )
      .replyOnce(200, 'Test');
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <CiteAllAction
        // @ts-expect-error ts-migrate(2322) FIXME: Type '{ numberOfResults: number; query: { sort: st... Remove this comment to see the full error message
        numberOfResults={12}
        query={{ sort: 'mostrecent', q: 'query', page: 10, size: 100 }}
      />
    );
    // @ts-expect-error ts-migrate(2571) FIXME: Object is of type 'unknown'.
    await wrapper.find(DropdownMenu).prop('onClick')({
      key: 'application/vnd+inspire.latex.eu+x-latex',
    });
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(downloadTextAsFile).toHaveBeenCalledWith(
      'Test',
      'INSPIRE-CiteAll.tex',
      'application/x-latex'
    );
  });
});
