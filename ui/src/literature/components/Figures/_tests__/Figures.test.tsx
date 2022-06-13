import React from 'react';
import { shallow, mount } from 'enzyme';
import { fromJS } from 'immutable';
import { act } from 'react-dom/test-utils';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../Figures' was resolved to '/Users/karoli... Remove this comment to see the full error message
import Figures from '../Figures';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../FigureListItem' was resolved to '/Users... Remove this comment to see the full error message
import FigureListItem from '../FigureListItem';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../FiguresCarousel' was resolved to '/User... Remove this comment to see the full error message
import FiguresCarousel from '../FiguresCarousel';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('Figures', () => {
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'beforeAll'.
  beforeAll(() => {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'CONFIG' does not exist on type 'Window &... Remove this comment to see the full error message
    window.CONFIG = { FIGURES_FEATURE_FLAG: true };
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('renders with figures', () => {
    const figures = fromJS([
      {
        url: 'https://picsum.photos/200/300',
        key: 'test_1',
      },
    ]);
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Figures figures={figures} visible onCancel={jest.fn()} />
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper).toMatchSnapshot();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('sets carousel visible on list item click', () => {
    const figures = fromJS([
      {
        url: 'https://picsum.photos/200/300',
        key: 'test_1',
      },
    ]);
    const wrapper = mount(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Figures figures={figures} visible onCancel={jest.fn()} />
    );
    const isCarouselVisibleBefore = wrapper
      .find(FiguresCarousel)
      .prop('visible');
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(isCarouselVisibleBefore).toBe(false);

    const onListItemClick = wrapper.find(FigureListItem).prop('onClick');
    act(() => {
      onListItemClick();
    });
    wrapper.update();
    const isCarouselVisibleAfter = wrapper
      .find(FiguresCarousel)
      .prop('visible');
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(isCarouselVisibleAfter).toBe(true);
  });
});
