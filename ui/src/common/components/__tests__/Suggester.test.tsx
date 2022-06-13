import React from 'react';
import { shallow } from 'enzyme';
import MockAdapter from 'axios-mock-adapter';
import { AutoComplete } from 'antd';

// @ts-expect-error ts-migrate(2691) FIXME: An import path cannot end with a '.ts' extension. ... Remove this comment to see the full error message
import http from '../../http.ts';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../Suggester' was resolved to '/Users/karo... Remove this comment to see the full error message
import Suggester, { REQUEST_DEBOUNCE_MS } from '../Suggester';

const mockHttp = new MockAdapter(http.httpClient);

// TODO: use fake timers after https://github.com/facebook/jest/pull/7776
function wait(milisec = REQUEST_DEBOUNCE_MS + 25) {
  return new Promise(resolve => {
    // @ts-expect-error ts-migrate(2794) FIXME: Expected 1 arguments, but got 0. Did you forget to... Remove this comment to see the full error message
    setTimeout(() => resolve(), milisec);
  });
}

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('Suggester', () => {
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'afterEach'.
  afterEach(() => {
    mockHttp.reset();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('renders results onSearch', async () => {
    const suggesterQueryUrl = '/literature/_suggest?abstract_source=test';
    const responseData = {
      abstract_source: [
        {
          options: [
            {
              text: 'Result 1',
            },
            {
              text: 'Result 2',
            },
          ],
        },
      ],
    };
    mockHttp.onGet(suggesterQueryUrl).replyOnce(200, responseData);
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Suggester pidType="literature" suggesterName="abstract_source" />
    );
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'onSearch' does not exist on type 'Compon... Remove this comment to see the full error message
    await wrapper.instance().onSearch('test');
    await wait();
    wrapper.update();
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper).toMatchSnapshot();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('renders results with custom extractUniqueItemValue', async () => {
    const suggesterQueryUrl = '/literature/_suggest?abstract_source=test';
    const responseData = {
      abstract_source: [
        {
          options: [
            {
              text: 'Result 1',
              extra: 'Extra 1',
            },
            {
              text: 'Result 2',
              extra: 'Extra 2',
            },
          ],
        },
      ],
    };
    mockHttp.onGet(suggesterQueryUrl).replyOnce(200, responseData);
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Suggester
        // @ts-expect-error ts-migrate(2322) FIXME: Type '{ pidType: string; suggesterName: string; ex... Remove this comment to see the full error message
        pidType="literature"
        suggesterName="abstract_source"
        extractUniqueItemValue={(result: any) => `${result.text} - ${result.extra}`}
      />
    );
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'onSearch' does not exist on type 'Compon... Remove this comment to see the full error message
    await wrapper.instance().onSearch('test');
    await wait();
    wrapper.update();
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper).toMatchSnapshot();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('renders results with custom extractItemCompletionValue', async () => {
    const suggesterQueryUrl = '/literature/_suggest?abstract_source=test';
    const responseData = {
      abstract_source: [
        {
          options: [
            {
              id: '1',
              name: 'Result',
            },
          ],
        },
      ],
    };
    mockHttp.onGet(suggesterQueryUrl).replyOnce(200, responseData);
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Suggester
        // @ts-expect-error ts-migrate(2322) FIXME: Type '{ pidType: string; suggesterName: string; ex... Remove this comment to see the full error message
        pidType="literature"
        suggesterName="abstract_source"
        extractItemCompletionValue={(suggestion: any) => suggestion.name}
        extractUniqueItemValue={(suggestion: any) => suggestion.id}
      />
    );
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'onSearch' does not exist on type 'Compon... Remove this comment to see the full error message
    await wrapper.instance().onSearch('test');
    await wait();
    wrapper.update();
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper).toMatchSnapshot();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('does not render results onSearch without waiting for debounce', async () => {
    const suggesterQueryUrl = '/literature/_suggest?abstract_source=test';
    const responseData = {
      abstract_source: [
        {
          options: [
            {
              text: 'Result 1',
            },
          ],
        },
      ],
    };
    mockHttp.onGet(suggesterQueryUrl).replyOnce(200, responseData);
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Suggester pidType="literature" suggesterName="abstract_source" />
    );
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'onSearch' does not exist on type 'Compon... Remove this comment to see the full error message
    await wrapper.instance().onSearch('test');
    await wait(REQUEST_DEBOUNCE_MS - 25);
    wrapper.update();
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper).toMatchSnapshot();
    await wait(30); // TODO: investigate how this effects the next one without waiting here
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('renders results with custom result template', async () => {
    const suggesterQueryUrl = '/literature/_suggest?abstract_source=test';
    const responseData = {
      abstract_source: [
        {
          options: [
            {
              text: 'Result 1',
              extra: 'Extra 1',
            },
            {
              text: 'Result 2',
              extra: 'Extra 2',
            },
          ],
        },
      ],
    };
    mockHttp.onGet(suggesterQueryUrl).replyOnce(200, responseData);
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Suggester
        // @ts-expect-error ts-migrate(2322) FIXME: Type '{ pidType: string; suggesterName: string; re... Remove this comment to see the full error message
        pidType="literature"
        suggesterName="abstract_source"
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        renderResultItem={(result: any) => <span>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          {result.text} <em>{result.extra}</em>
        </span>}
      />
    );
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'onSearch' does not exist on type 'Compon... Remove this comment to see the full error message
    await wrapper.instance().onSearch('test');
    await wait();
    wrapper.update();
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper).toMatchSnapshot();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('calls onSelect with unique item value and whole suggestion', async () => {
    const suggesterQueryUrl = '/literature/_suggest?abstract_source=test';
    const responseData = {
      abstract_source: [
        {
          options: [
            {
              id: '1',
              name: 'Result',
            },
          ],
        },
      ],
    };
    mockHttp.onGet(suggesterQueryUrl).replyOnce(200, responseData);
    // @ts-expect-error ts-migrate(2708) FIXME: Cannot use namespace 'jest' as a value.
    const onChange = jest.fn();
    // @ts-expect-error ts-migrate(2708) FIXME: Cannot use namespace 'jest' as a value.
    const onSelect = jest.fn();
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Suggester
        // @ts-expect-error ts-migrate(2322) FIXME: Type '{ onChange: any; onSelect: any; pidType: str... Remove this comment to see the full error message
        onChange={onChange}
        onSelect={onSelect}
        pidType="literature"
        extractUniqueItemValue={(suggestion: any) => suggestion.id}
        suggesterName="abstract_source"
      />
    );
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'onSearch' does not exist on type 'Compon... Remove this comment to see the full error message
    await wrapper.instance().onSearch('test');
    await wait();
    wrapper.update();
    const suggestionWrapper = wrapper.find(AutoComplete.Option);
    wrapper
      .find(AutoComplete)
      .simulate('select', null, suggestionWrapper.props());
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(onSelect).toHaveBeenCalledWith('1', {
      id: '1',
      name: 'Result',
    });
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(onChange).not.toHaveBeenCalled();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('calls onSelect with unique item value and whole suggestion and onChange if extractItemCompletionValue prop is present', async () => {
    const suggesterQueryUrl = '/literature/_suggest?abstract_source=test';
    const responseData = {
      abstract_source: [
        {
          options: [
            {
              id: '1',
              name: 'Result',
            },
          ],
        },
      ],
    };
    mockHttp.onGet(suggesterQueryUrl).replyOnce(200, responseData);
    // @ts-expect-error ts-migrate(2708) FIXME: Cannot use namespace 'jest' as a value.
    const onChange = jest.fn();
    // @ts-expect-error ts-migrate(2708) FIXME: Cannot use namespace 'jest' as a value.
    const onSelect = jest.fn();
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Suggester
        // @ts-expect-error ts-migrate(2322) FIXME: Type '{ onChange: any; onSelect: any; pidType: str... Remove this comment to see the full error message
        onChange={onChange}
        onSelect={onSelect}
        pidType="literature"
        extractItemCompletionValue={(suggestion: any) => suggestion.name}
        extractUniqueItemValue={(suggestion: any) => suggestion.id}
        suggesterName="abstract_source"
      />
    );
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'onSearch' does not exist on type 'Compon... Remove this comment to see the full error message
    await wrapper.instance().onSearch('test');
    await wait();
    wrapper.update();
    const suggestionWrapper = wrapper.find(AutoComplete.Option);
    wrapper
      .find(AutoComplete)
      .simulate('select', null, suggestionWrapper.props());
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(onSelect).toHaveBeenCalledWith('1', {
      id: '1',
      name: 'Result',
    });
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(onChange).toHaveBeenCalledWith('Result');
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('calls only onChange if extractItemCompletionValue prop is present and onSelect is not when an option is selected', async () => {
    const suggesterQueryUrl = '/literature/_suggest?abstract_source=test';
    const responseData = {
      abstract_source: [
        {
          options: [
            {
              id: '1',
              name: 'Result',
            },
          ],
        },
      ],
    };
    mockHttp.onGet(suggesterQueryUrl).replyOnce(200, responseData);
    // @ts-expect-error ts-migrate(2708) FIXME: Cannot use namespace 'jest' as a value.
    const onChange = jest.fn();
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Suggester
        // @ts-expect-error ts-migrate(2322) FIXME: Type '{ onChange: any; pidType: string; extractIte... Remove this comment to see the full error message
        onChange={onChange}
        pidType="literature"
        extractItemCompletionValue={(suggestion: any) => suggestion.name}
        extractUniqueItemValue={(suggestion: any) => suggestion.id}
        suggesterName="abstract_source"
      />
    );
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'onSearch' does not exist on type 'Compon... Remove this comment to see the full error message
    await wrapper.instance().onSearch('test');
    await wait();
    wrapper.update();
    const suggestionWrapper = wrapper.find(AutoComplete.Option);
    wrapper
      .find(AutoComplete)
      .simulate('select', null, suggestionWrapper.props());
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(onChange).toHaveBeenCalledWith('Result');
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('renders empty if request fails', async () => {
    const suggesterQueryUrl = '/literature/_suggest?abstract_source=test';
    mockHttp.onGet(suggesterQueryUrl).replyOnce(404);
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Suggester pidType="literature" suggesterName="abstract_source" />
    );
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'onSearch' does not exist on type 'Compon... Remove this comment to see the full error message
    await wrapper.instance().onSearch('test');
    wrapper.update();
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper).toMatchSnapshot();
  });
});
