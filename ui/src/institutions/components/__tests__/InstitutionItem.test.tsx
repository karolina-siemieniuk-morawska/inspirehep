import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../InstitutionItem' was resolved to '/User... Remove this comment to see the full error message
import InstitutionItem from '../InstitutionItem';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('InstitutionItem', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('renders with all props set', () => {
    const metadata = fromJS({
      legacyIcn: 'West Virginia U.',
      addresses: [
        {
          cities: ['Liverpool'],
          country_code: 'USA',
          country: 'country',
        },
      ],
      urls: [{ value: 'http://url.com' }],
      control_number: 1234,
      institution_hierarchy: [
        {
          name: 'Department of Physics',
        },
      ],
      number_of_papers: 1,
    });

    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const wrapper = shallow(<InstitutionItem metadata={metadata} />);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper).toMatchSnapshot();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('renders with only needed props', () => {
    const metadata = fromJS({
      legacyIcn: 'West Virginia U.',
      control_number: 123,
    });

    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const wrapper = shallow(<InstitutionItem metadata={metadata} />);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper).toMatchSnapshot();
  });
});
