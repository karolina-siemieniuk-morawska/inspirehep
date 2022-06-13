import React from 'react';
import { shallow } from 'enzyme';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../ExportToCdsModal' was resolved to '/Use... Remove this comment to see the full error message
import ExportToCdsModal from '../ExportToCdsModal';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('ExportToCdsModal', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('renders modal for one paper', () => {
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <ExportToCdsModal
        // @ts-expect-error ts-migrate(2708) FIXME: Cannot use namespace 'jest' as a value.
        onOk={jest.fn()}
        // @ts-expect-error ts-migrate(2708) FIXME: Cannot use namespace 'jest' as a value.
        onCancel={jest.fn()}
        visible
        selectionSize={1}
      />
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper).toMatchSnapshot();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('renders not visible', () => {
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <ExportToCdsModal
        // @ts-expect-error ts-migrate(2708) FIXME: Cannot use namespace 'jest' as a value.
        onOk={jest.fn()}
        // @ts-expect-error ts-migrate(2708) FIXME: Cannot use namespace 'jest' as a value.
        onCancel={jest.fn()}
        selectionSize={1}
      />
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper).toMatchSnapshot();
  });
});
