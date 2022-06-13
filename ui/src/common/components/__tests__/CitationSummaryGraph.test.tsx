import React from 'react';
import { shallow, mount } from 'enzyme';
import CitationSummaryGraph, {
  ORANGE,
  HOVERED_ORANGE,
  BLUE,
  GRAY,
  LABEL_OFFSET_RATIO_TO_GRAPH_WIDTH,
// @ts-expect-error ts-migrate(6142) FIXME: Module '../CitationSummaryGraph/CitationSummaryGra... Remove this comment to see the full error message
} from '../CitationSummaryGraph/CitationSummaryGraph';
import { CITEABLE_BAR_TYPE, PUBLISHED_BAR_TYPE } from '../../constants';

const mockPublishedData = [
  {
    key: '0--0',
    from: 0,
    to: 1,
    doc_count: 1,
  },
  {
    key: '1--50',
    from: 1,
    to: 50,
    doc_count: 2,
  },
  {
    key: '50--250',
    from: 50,
    to: 250,
    doc_count: 3,
  },
  {
    key: '250--500',
    from: 250,
    to: 500,
    doc_count: 4,
  },
  {
    key: '--500',
    from: 500,
    doc_count: 0,
  },
];
const mockCiteableData = [
  {
    key: '0--0',
    from: 0,
    to: 1,
    doc_count: 1,
  },
  {
    key: '1--50',
    from: 1,
    to: 50,
    doc_count: 2,
  },
  {
    key: '50--250',
    from: 50,
    to: 250,
    doc_count: 3,
  },
  {
    key: '250--500',
    from: 250,
    to: 500,
    doc_count: 4,
  },
  {
    key: '500--',
    from: 500,
    doc_count: 0,
  },
];
// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('CitationSummaryGraph', () => {
  const originalUpdateGraphWidth =
    CitationSummaryGraph.prototype.updateGraphWidth;

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'beforeEach'.
  beforeEach(() => {
    // @ts-expect-error ts-migrate(2708) FIXME: Cannot use namespace 'jest' as a value.
    CitationSummaryGraph.prototype.updateGraphWidth = jest.fn();
  });

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'afterEach'.
  afterEach(() => {
    CitationSummaryGraph.prototype.updateGraphWidth = originalUpdateGraphWidth;
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('renders graph without SelectedBar', () => {
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <CitationSummaryGraph
        // @ts-expect-error ts-migrate(2322) FIXME: Type '{ publishedData: ({ key: string; from: numbe... Remove this comment to see the full error message
        publishedData={mockPublishedData}
        citeableData={mockCiteableData}
        loadingCitationSummary={false}
        error={null}
        // @ts-expect-error ts-migrate(2708) FIXME: Cannot use namespace 'jest' as a value.
        onSelectBarChange={jest.fn()}
      />
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper).toMatchSnapshot();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('renders graph with selectedBar', () => {
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <CitationSummaryGraph
        // @ts-expect-error ts-migrate(2322) FIXME: Type '{ publishedData: ({ key: string; from: numbe... Remove this comment to see the full error message
        publishedData={mockPublishedData}
        citeableData={mockCiteableData}
        loadingCitationSummary={false}
        error={null}
        // @ts-expect-error ts-migrate(2708) FIXME: Cannot use namespace 'jest' as a value.
        onSelectBarChange={jest.fn()}
        selectedBar={{ type: CITEABLE_BAR_TYPE, xValue: '500--' }}
      />
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper).toMatchSnapshot();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('renders with hovered bar', () => {
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <CitationSummaryGraph
        // @ts-expect-error ts-migrate(2322) FIXME: Type '{ publishedData: ({ key: string; from: numbe... Remove this comment to see the full error message
        publishedData={mockPublishedData}
        citeableData={mockCiteableData}
        loadingCitationSummary={false}
        error={null}
        // @ts-expect-error ts-migrate(2708) FIXME: Cannot use namespace 'jest' as a value.
        onSelectBarChange={jest.fn()}
      />
    );
    wrapper.setState({
      hoveredBar: { type: CITEABLE_BAR_TYPE, xValue: '500--' },
    });
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper).toMatchSnapshot();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('toSeriesData', () => {
    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('returns series data with correct color', () => {
      const wrapper = shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CitationSummaryGraph
          // @ts-expect-error ts-migrate(2322) FIXME: Type '{ publishedData: ({ key: string; from: numbe... Remove this comment to see the full error message
          publishedData={mockPublishedData}
          citeableData={mockCiteableData}
          loadingCitationSummary={false}
          error={null}
          // @ts-expect-error ts-migrate(2708) FIXME: Cannot use namespace 'jest' as a value.
          onSelectBarChange={jest.fn()}
        />
      );
      const bucket = {
        key: '0--0',
        from: 0,
        to: 1,
        doc_count: 10,
      };
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'toSeriesData' does not exist on type 'Co... Remove this comment to see the full error message
      const data = wrapper.instance().toSeriesData(bucket, PUBLISHED_BAR_TYPE);
      const expectedData = {
        x: '0--0',
        y: 10,
        label: '10',
        color: ORANGE,
        xOffset: 0,
      };
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(data).toEqual(expectedData);
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('returns series data with correct color for hovered bar', () => {
      const wrapper = shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CitationSummaryGraph
          // @ts-expect-error ts-migrate(2322) FIXME: Type '{ publishedData: ({ key: string; from: numbe... Remove this comment to see the full error message
          publishedData={mockPublishedData}
          citeableData={mockCiteableData}
          loadingCitationSummary={false}
          error={null}
          // @ts-expect-error ts-migrate(2708) FIXME: Cannot use namespace 'jest' as a value.
          onSelectBarChange={jest.fn()}
        />
      );
      wrapper.setState({
        hoveredBar: { type: PUBLISHED_BAR_TYPE, xValue: '0--0' },
      });
      const bucket = {
        key: '0--0',
        from: 0,
        to: 1,
        doc_count: 10,
      };
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'toSeriesData' does not exist on type 'Co... Remove this comment to see the full error message
      const data = wrapper.instance().toSeriesData(bucket, PUBLISHED_BAR_TYPE);
      const expectedData = {
        x: '0--0',
        y: 10,
        label: '10',
        color: HOVERED_ORANGE,
        xOffset: 0,
      };
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(data).toEqual(expectedData);
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('returns series data with correct color when selected bar', () => {
      const wrapper = shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CitationSummaryGraph
          // @ts-expect-error ts-migrate(2322) FIXME: Type '{ publishedData: ({ key: string; from: numbe... Remove this comment to see the full error message
          publishedData={mockPublishedData}
          citeableData={mockCiteableData}
          loadingCitationSummary={false}
          error={null}
          // @ts-expect-error ts-migrate(2708) FIXME: Cannot use namespace 'jest' as a value.
          onSelectBarChange={jest.fn()}
          selectedBar={{ type: CITEABLE_BAR_TYPE, xValue: '0--0' }}
        />
      );
      const bucketSelectedBar = {
        key: '0--0',
        from: 0,
        to: 1,
        doc_count: 10,
      };
      const dataSelectedBar = wrapper
        .instance()
        // @ts-expect-error ts-migrate(2339) FIXME: Property 'toSeriesData' does not exist on type 'Co... Remove this comment to see the full error message
        .toSeriesData(bucketSelectedBar, CITEABLE_BAR_TYPE);
      const expectedDataSelectedBar = {
        x: '0--0',
        y: 10,
        label: '10',
        color: BLUE,
        xOffset: -0,
      };
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(dataSelectedBar).toEqual(expectedDataSelectedBar);

      const bucketUnSelectedBar = {
        key: '10--49',
        from: 0,
        to: 1,
        doc_count: 10,
      };
      const dataUnSelectedBar = wrapper
        .instance()
        // @ts-expect-error ts-migrate(2339) FIXME: Property 'toSeriesData' does not exist on type 'Co... Remove this comment to see the full error message
        .toSeriesData(bucketUnSelectedBar, CITEABLE_BAR_TYPE);
      const expectedDataUnSelectedBar = {
        x: '10--49',
        y: 10,
        label: '10',
        color: GRAY,
        xOffset: -0,
      };
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(dataUnSelectedBar).toEqual(expectedDataUnSelectedBar);
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('calls onSelectBarChange when citeable bar clicked', () => {
    // @ts-expect-error ts-migrate(2708) FIXME: Cannot use namespace 'jest' as a value.
    const onSelectBarChange = jest.fn();
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <CitationSummaryGraph
        // @ts-expect-error ts-migrate(2322) FIXME: Type '{ excludeSelfCitations: boolean; publishedDa... Remove this comment to see the full error message
        excludeSelfCitations={false}
        publishedData={mockPublishedData}
        citeableData={mockCiteableData}
        loadingCitationSummary={false}
        error={null}
        onSelectBarChange={onSelectBarChange}
      />
    );
    const onCiteableBarClick = wrapper
      .find('[data-test-id="citeable-bar-series"]')
      .prop('onValueClick');
    // @ts-expect-error ts-migrate(2571) FIXME: Object is of type 'unknown'.
    onCiteableBarClick({ x: '0--0' });
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(onSelectBarChange).toHaveBeenCalledWith(
      {
        type: CITEABLE_BAR_TYPE,
        xValue: '0--0',
      },
      false
    );
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('calls onSelectBarChange with null when selected citeable bar clicked', () => {
    // @ts-expect-error ts-migrate(2708) FIXME: Cannot use namespace 'jest' as a value.
    const onSelectBarChange = jest.fn();
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <CitationSummaryGraph
        // @ts-expect-error ts-migrate(2322) FIXME: Type '{ excludeSelfCitations: true; publishedData:... Remove this comment to see the full error message
        excludeSelfCitations
        publishedData={mockPublishedData}
        citeableData={mockCiteableData}
        loadingCitationSummary={false}
        error={null}
        onSelectBarChange={onSelectBarChange}
        selectedBar={{ type: CITEABLE_BAR_TYPE, xValue: '0--0' }}
      />
    );
    const onCiteableBarClick = wrapper
      .find('[data-test-id="citeable-bar-series"]')
      .prop('onValueClick');
    // @ts-expect-error ts-migrate(2571) FIXME: Object is of type 'unknown'.
    onCiteableBarClick({ x: '0--0' });
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(onSelectBarChange).toHaveBeenCalledWith(null);
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('calls onSelectBarChange when published bar clicked', () => {
    // @ts-expect-error ts-migrate(2708) FIXME: Cannot use namespace 'jest' as a value.
    const onSelectBarChange = jest.fn();
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <CitationSummaryGraph
        // @ts-expect-error ts-migrate(2322) FIXME: Type '{ excludeSelfCitations: true; publishedData:... Remove this comment to see the full error message
        excludeSelfCitations
        publishedData={mockPublishedData}
        citeableData={mockCiteableData}
        loadingCitationSummary={false}
        error={null}
        onSelectBarChange={onSelectBarChange}
      />
    );
    const onPublishedBarClick = wrapper
      .find('[data-test-id="published-bar-series"]')
      .prop('onValueClick');
    // @ts-expect-error ts-migrate(2571) FIXME: Object is of type 'unknown'.
    onPublishedBarClick({ x: '0--0' });
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(onSelectBarChange).toHaveBeenCalledWith(
      {
        type: PUBLISHED_BAR_TYPE,
        xValue: '0--0',
      },
      true
    );
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('adds hoveredBar to state when citeable bar is hovered', () => {
    // @ts-expect-error ts-migrate(2708) FIXME: Cannot use namespace 'jest' as a value.
    const onSelectBarChange = jest.fn();
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <CitationSummaryGraph
        // @ts-expect-error ts-migrate(2322) FIXME: Type '{ publishedData: ({ key: string; from: numbe... Remove this comment to see the full error message
        publishedData={mockPublishedData}
        citeableData={mockCiteableData}
        loadingCitationSummary={false}
        error={null}
        onSelectBarChange={onSelectBarChange}
      />
    );
    const onCiteableBarHover = wrapper
      .find('[data-test-id="citeable-bar-series"]')
      .prop('onValueMouseOver');
    // @ts-expect-error ts-migrate(2571) FIXME: Object is of type 'unknown'.
    onCiteableBarHover({ x: '0--0' });
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.state('hoveredBar')).toEqual({
      type: CITEABLE_BAR_TYPE,
      xValue: '0--0',
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('adds hoveredBar to state when published bar is hovered', () => {
    // @ts-expect-error ts-migrate(2708) FIXME: Cannot use namespace 'jest' as a value.
    const onSelectBarChange = jest.fn();
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <CitationSummaryGraph
        // @ts-expect-error ts-migrate(2322) FIXME: Type '{ publishedData: ({ key: string; from: numbe... Remove this comment to see the full error message
        publishedData={mockPublishedData}
        citeableData={mockCiteableData}
        loadingCitationSummary={false}
        error={null}
        onSelectBarChange={onSelectBarChange}
      />
    );
    const onPublishedBarHover = wrapper
      .find('[data-test-id="published-bar-series"]')
      .prop('onValueMouseOver');
    // @ts-expect-error ts-migrate(2571) FIXME: Object is of type 'unknown'.
    onPublishedBarHover({ x: '0--0' });
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.state('hoveredBar')).toEqual({
      type: PUBLISHED_BAR_TYPE,
      xValue: '0--0',
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('sets hoveredBar in state to null when published bar is not hovered anymore', () => {
    // @ts-expect-error ts-migrate(2708) FIXME: Cannot use namespace 'jest' as a value.
    const onSelectBarChange = jest.fn();
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <CitationSummaryGraph
        // @ts-expect-error ts-migrate(2322) FIXME: Type '{ publishedData: ({ key: string; from: numbe... Remove this comment to see the full error message
        publishedData={mockPublishedData}
        citeableData={mockCiteableData}
        loadingCitationSummary={false}
        error={null}
        onSelectBarChange={onSelectBarChange}
      />
    );
    wrapper.setState({
      hoveredBar: { type: PUBLISHED_BAR_TYPE, xValue: '0--0' },
    });
    const onPublishedBarUnHover = wrapper
      .find('[data-test-id="published-bar-series"]')
      .prop('onValueMouseOut');
    // @ts-expect-error ts-migrate(2571) FIXME: Object is of type 'unknown'.
    onPublishedBarUnHover();
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.state('hoveredBar')).toEqual(null);
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('sets hoveredBar in state to null when citeable bar is not hovered anymore', () => {
    // @ts-expect-error ts-migrate(2708) FIXME: Cannot use namespace 'jest' as a value.
    const onSelectBarChange = jest.fn();
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <CitationSummaryGraph
        // @ts-expect-error ts-migrate(2322) FIXME: Type '{ publishedData: ({ key: string; from: numbe... Remove this comment to see the full error message
        publishedData={mockPublishedData}
        citeableData={mockCiteableData}
        loadingCitationSummary={false}
        error={null}
        onSelectBarChange={onSelectBarChange}
      />
    );
    wrapper.setState({
      hoveredBar: { type: CITEABLE_BAR_TYPE, xValue: '0--0' },
    });
    const onCiteableBarUnHover = wrapper
      .find('[data-test-id="citeable-bar-series"]')
      .prop('onValueMouseOut');
    // @ts-expect-error ts-migrate(2571) FIXME: Object is of type 'unknown'.
    onCiteableBarUnHover();
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.state('hoveredBar')).toEqual(null);
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('sets graphWidth using ref width and recalculates graphWidth after resize event', () => {
    CitationSummaryGraph.prototype.updateGraphWidth = originalUpdateGraphWidth;

    const originalGetBoundingClientRect =
      Element.prototype.getBoundingClientRect;
    // @ts-expect-error ts-migrate(2708) FIXME: Cannot use namespace 'jest' as a value.
    Element.prototype.getBoundingClientRect = jest
      .fn()
      .mockReturnValueOnce({
        width: 120,
      })
      .mockReturnValueOnce({
        width: 150,
      });

    const wrapper = mount(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <CitationSummaryGraph
        // @ts-expect-error ts-migrate(2322) FIXME: Type '{ publishedData: ({ key: string; from: numbe... Remove this comment to see the full error message
        publishedData={mockPublishedData}
        citeableData={mockCiteableData}
        loadingCitationSummary={false}
        error={null}
        // @ts-expect-error ts-migrate(2708) FIXME: Cannot use namespace 'jest' as a value.
        onSelectBarChange={jest.fn()}
      />
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.state().graphWidth).toBe(120);
    window.innerWidth = 500;
    window.dispatchEvent(new Event('resize'));
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.state().graphWidth).toBe(150);
    Element.prototype.getBoundingClientRect = originalGetBoundingClientRect;
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('sets xOffset from state', () => {
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <CitationSummaryGraph
        // @ts-expect-error ts-migrate(2322) FIXME: Type '{ publishedData: ({ key: string; from: numbe... Remove this comment to see the full error message
        publishedData={mockPublishedData}
        citeableData={mockCiteableData}
        loadingCitationSummary={false}
        error={null}
        // @ts-expect-error ts-migrate(2708) FIXME: Cannot use namespace 'jest' as a value.
        onSelectBarChange={jest.fn()}
      />
    );
    wrapper.setState({ graphWidth: 1000 });
    const bucket = {
      key: '0--0',
      from: 0,
      to: 1,
      doc_count: 10,
    };
    const dataPublished = wrapper
      .instance()
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'toSeriesData' does not exist on type 'Co... Remove this comment to see the full error message
      .toSeriesData(bucket, PUBLISHED_BAR_TYPE);
    const expectedOffsetPublished = LABEL_OFFSET_RATIO_TO_GRAPH_WIDTH * 1000;
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(dataPublished.xOffset).toEqual(expectedOffsetPublished);

    const dataCiteable = wrapper
      .instance()
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'toSeriesData' does not exist on type 'Co... Remove this comment to see the full error message
      .toSeriesData(bucket, CITEABLE_BAR_TYPE);
    const expectedOffsetCiteable = -LABEL_OFFSET_RATIO_TO_GRAPH_WIDTH * 1000;
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(dataCiteable.xOffset).toEqual(expectedOffsetCiteable);
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('abbreviates the numbers when they are bigger than 9999', () => {
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <CitationSummaryGraph
        // @ts-expect-error ts-migrate(2322) FIXME: Type '{ publishedData: ({ key: string; from: numbe... Remove this comment to see the full error message
        publishedData={mockPublishedData}
        citeableData={mockCiteableData}
        loadingCitationSummary={false}
        error={null}
        // @ts-expect-error ts-migrate(2708) FIXME: Cannot use namespace 'jest' as a value.
        onSelectBarChange={jest.fn()}
      />
    );
    const bucketLower = {
      key: '0--0',
      from: 0,
      to: 1,
      doc_count: 9999,
    };
    const bucketHigher = {
      key: '0--0',
      from: 0,
      to: 1,
      doc_count: 12769,
    };
    const dataLower = wrapper
      .instance()
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'toSeriesData' does not exist on type 'Co... Remove this comment to see the full error message
      .toSeriesData(bucketLower, PUBLISHED_BAR_TYPE);
    const dataHigher = wrapper
      .instance()
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'toSeriesData' does not exist on type 'Co... Remove this comment to see the full error message
      .toSeriesData(bucketHigher, PUBLISHED_BAR_TYPE);
    const expectedLowerLabel = '9999';
    const expectedHigherLabel = '13K';
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(dataLower.label).toEqual(expectedLowerLabel);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(dataHigher.label).toEqual(expectedHigherLabel);
  });
});
