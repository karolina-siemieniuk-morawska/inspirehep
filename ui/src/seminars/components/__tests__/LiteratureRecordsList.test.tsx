import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../LiteratureRecordsList' was resolved to ... Remove this comment to see the full error message
import LiteratureRecordsList from '../LiteratureRecordsList';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('LiteratureRecordsList', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('renders with multiple records', () => {
    const literatureRecords = fromJS([
      {
        control_number: 123,
        titles: [{ title: 'Title1' }],
        record: { $ref: 'http://localhost:5000/api/literature/123' },
      },
      {
        control_number: 124,
        titles: [{ title: 'Title2' }],
        record: { $ref: 'http://localhost:5000/api/literature/124' },
      },
    ]);
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <LiteratureRecordsList literatureRecords={literatureRecords} />
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.dive()).toMatchSnapshot();
  });
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('renders with one record', () => {
    const literatureRecords = fromJS([
      {
        control_number: 123,
        titles: [{ title: 'Title1' }],
        record: { $ref: 'http://localhost:5000/api/literature/123' },
      },
    ]);
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <LiteratureRecordsList literatureRecords={literatureRecords} />
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.dive()).toMatchSnapshot();
  });
});
