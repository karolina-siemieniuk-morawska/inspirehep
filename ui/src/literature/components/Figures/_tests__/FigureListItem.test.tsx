import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../FigureListItem' was resolved to '/Users... Remove this comment to see the full error message
import FigureListItem from '../FigureListItem';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../Figure' was resolved to '/Users/karolin... Remove this comment to see the full error message
import Figure from '../Figure';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('FigureListItem', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('renders figure list item', () => {
    const figure = fromJS({
      url: 'https://picsum.photos/200/300',
      key: 'test_FigureListItem_1',
    });
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <FigureListItem figure={figure} onClick={jest.fn()} />
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper).toMatchSnapshot();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('sets onClick to Figure.onClick', () => {
    const figure = fromJS({
      url: 'https://picsum.photos/200/300',
      key: 'test_FigureListItem_1',
    });
    // @ts-expect-error ts-migrate(2708) FIXME: Cannot use namespace 'jest' as a value.
    const onClick = jest.fn();
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <FigureListItem figure={figure} onClick={onClick} />
    );
    const onFigureClick = wrapper.find(Figure).prop('onClick');
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(onFigureClick).toEqual(onClick);
  });
});
