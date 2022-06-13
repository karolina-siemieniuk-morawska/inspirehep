import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';

import {
  convertAllImmutablePropsToJS,
  convertSomeImmutablePropsToJS,
// @ts-expect-error ts-migrate(6142) FIXME: Module '../immutableToJS' was resolved to '/Users/... Remove this comment to see the full error message
} from '../immutableToJS';

function MutableDummy(props: any) {
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return <span {...props} />;
}

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('immutableToJS', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('convertAllImmutablePropsToJS', () => {
    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('converts all immutable props to built in js', () => {
      const ImmutableDummy = convertAllImmutablePropsToJS(MutableDummy);
      const immutableProp = fromJS({
        list: [{ foo: 'bar1' }, { foo: 'bar2' }],
      });
      const primitiveProp = 'string';
      const mutableProp = {
        array: [{ foo: 'bar' }],
      };
      const wrapper = shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <ImmutableDummy
          immutableProp={immutableProp}
          mutableProp={mutableProp}
          primitiveProp={primitiveProp}
        />
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper).toMatchSnapshot();
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('convertSomeImmutablePropsToJS', () => {
    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('converts some immutable props to built in js', () => {
      const ImmutableDummy = convertSomeImmutablePropsToJS(MutableDummy, [
        'immutableProp1',
      ]);

      const immutableProp1 = fromJS({
        list: [{ foo: 'bar1' }, { foo: 'bar2' }],
      });
      const immutableProp2 = fromJS({
        foo: 'bar',
      });
      const primitiveProp = 'string';
      const mutableProp = {
        array: [{ foo: 'bar' }],
      };
      const wrapper = shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <ImmutableDummy
          immutableProp1={immutableProp1}
          immutableProp2={immutableProp2}
          mutableProp={mutableProp}
          primitiveProp={primitiveProp}
        />
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper).toMatchSnapshot();
    });
  });
});
