import React, { useMemo, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { FlexibleWidthXYPlot, VerticalRectSeries, Hint } from 'react-vis';
import { Slider } from 'antd';
import { List } from 'immutable';
import { MathInterval } from 'math-interval-2';

import { pluckMinMaxPair, toNumbers, addCommasToNumber } from '../../utils';
import AggregationBox from '../AggregationBox';
// @ts-expect-error ts-migrate(2306) FIXME: File '/Users/karolinasiemieniuk-morawska/repos/CER... Remove this comment to see the full error message
import styleVariables from '../../../styleVariables';
import './RangeAggregation.scss';
import { RANGE_AGGREGATION_SELECTION_SEPARATOR } from '../../constants';

export const HALF_BAR_WIDTH = 0.4;
const NO_MARGIN = {
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
};
const KEY_PROP_NAME = 'key_as_string';
const COUNT_PROP_NAME = 'doc_count';
const SELECTED_COLOR = '#91d5ff';
const DESELECTED_COLOR = styleVariables['gray-6'];
const MIN_DISPLAY_RANGE_SIZE = 30;
const HEIGHT = 100;

// @ts-expect-error ts-migrate(7031) FIXME: Binding element 'min' implicitly has an 'any' type... Remove this comment to see the full error message
function getInitialHistogramData(initialBuckets: any, [min, max]) {
  const data = initialBuckets
    .map((item: any) => {
      const key = Number(item.get(KEY_PROP_NAME));
      return {
        x0: key - HALF_BAR_WIDTH,
        x: key + HALF_BAR_WIDTH,
        y: item.get(COUNT_PROP_NAME),
        color: DESELECTED_COLOR,
      };
    })
    .toArray();

  const rangeSize = max - min;
  if (rangeSize < MIN_DISPLAY_RANGE_SIZE) {
    const fakeBucketKey = min + MIN_DISPLAY_RANGE_SIZE;
    data.push({
      x0: fakeBucketKey - HALF_BAR_WIDTH,
      x: fakeBucketKey + HALF_BAR_WIDTH,
      y: 0,
    });
  }
  return data;
}

// @ts-expect-error ts-migrate(7031) FIXME: Binding element 'lower' implicitly has an 'any' ty... Remove this comment to see the full error message
function getHistogramData(initialData: any, keyToCountForBuckets: any, [lower, upper]) {
  const endpointsInterval = MathInterval.closed(lower, upper);
  const data = initialData.map((item: any) => {
    const { x0, x } = item;
    const bucketKey = x - HALF_BAR_WIDTH;
    const color = endpointsInterval.contains(bucketKey)
      ? SELECTED_COLOR
      : DESELECTED_COLOR;
    return {
      x0,
      x,
      y: keyToCountForBuckets[bucketKey] || 0,
      color,
    };
  });
  return data;
}

function pluckMinMaxPairFromBuckets(buckets: any) {
  return pluckMinMaxPair(buckets, (bucket: any) => Number(bucket.get(KEY_PROP_NAME)));
}

function getKeyToCountMapFromBuckets(buckets: any) {
  return buckets.reduce((map: any, item: any) => {
    map[item.get(KEY_PROP_NAME)] = item.get(COUNT_PROP_NAME);
    return map;
  }, {});
}

// @ts-expect-error ts-migrate(7031) FIXME: Binding element 'min' implicitly has an 'any' type... Remove this comment to see the full error message
function sanitizeEndpoints(endpoints: any, [min, max]) {
  let [lower, upper] = endpoints;
  const bounds = MathInterval.closed(min, max);
  if (lower === undefined || !bounds.contains(lower)) {
    lower = min;
  }
  if (upper === undefined || !bounds.contains(upper)) {
    upper = max;
  }
  return [lower, upper];
}

function getSanitizedEndpointsFromSelections(selections: any, minMaxPair: any) {
  const selectionsAsString =
    selections && selections.split(RANGE_AGGREGATION_SELECTION_SEPARATOR);
  const unsafeEndpoints = toNumbers(selectionsAsString) || [];
  return sanitizeEndpoints(unsafeEndpoints, minMaxPair);
}

// @ts-expect-error ts-migrate(7031) FIXME: Binding element 'lower' implicitly has an 'any' ty... Remove this comment to see the full error message
function getSliderMarks([lower, upper], [min, max]) {
  const totalRange = max - min;
  const selectionRange = upper - lower;
  const selectionPercentage = selectionRange / totalRange * 100;
  const areEndpointsTooClose =
    selectionPercentage < 20 && selectionPercentage > 0;

  const isLowerOnTheEdge = lower === min;
  const isUpperOnTheEdge = upper === max;

  return {
    [lower]: {
      label: lower,
      style: {
        transform:
          areEndpointsTooClose && !isLowerOnTheEdge
            ? `translateX(-${100 - selectionPercentage}%)`
            : 'translateX(-50%)',
      },
    },
    [upper]: {
      label: upper,
      style: {
        transform:
          areEndpointsTooClose && !isUpperOnTheEdge
            ? `translateX(-${selectionPercentage}%)`
            : 'translateX(-50%)',
      },
    },
  };
}

function RangeAggregation({
  name,
  initialBuckets,
  buckets,
  selections,
  onChange
}: any) {
  const [hoveredBar, setHoveredBar] = useState(null);

  const [initialMin, initialMax] = useMemo(
    () => pluckMinMaxPairFromBuckets(initialBuckets),
    [initialBuckets]
  );
  const initialFakeMax = Math.max(
    initialMin + MIN_DISPLAY_RANGE_SIZE,
    initialMax
  );
  const initialData = useMemo(
    () => getInitialHistogramData(initialBuckets, [initialMin, initialMax]),
    [initialBuckets, initialMin, initialMax]
  );
  const keyToCountForInitialBuckets = useMemo(
    () => getKeyToCountMapFromBuckets(initialBuckets),
    [initialBuckets]
  );

  const [min, max] = useMemo(() => pluckMinMaxPairFromBuckets(buckets), [
    buckets,
  ]);
  const sliderEndpointsFromProps = useMemo(
    () => getSanitizedEndpointsFromSelections(selections, [min, max]),
    [selections, min, max]
  );
  const [sliderEndpoints, setSliderEndpoints] = useState(
    sliderEndpointsFromProps
  );
  const sliderMarks = useMemo(
    // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'any[]' is not assignable to para... Remove this comment to see the full error message
    () => getSliderMarks(sliderEndpoints, [initialMin, initialFakeMax]),
    [sliderEndpoints, initialMin, initialFakeMax]
  );
  const keyToCountForBuckets = useMemo(
    () => getKeyToCountMapFromBuckets(buckets),
    [buckets]
  );
  const dataFromProps = useMemo(
    // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'any[]' is not assignable to para... Remove this comment to see the full error message
    () => getHistogramData(initialData, keyToCountForBuckets, sliderEndpoints),
    [initialData, keyToCountForBuckets, sliderEndpoints]
  );
  const [data, setData] = useState(dataFromProps); // FIXME: data won't update if props change but component is not destroyed

  const onSliderAfterChange = useCallback(
    (endpoints = sliderEndpoints) => {
      const rangeSelectionString = endpoints.join(
        RANGE_AGGREGATION_SELECTION_SEPARATOR
      );
      onChange(rangeSelectionString);
    },
    [onChange, sliderEndpoints]
  );

  const onSliderChange = useCallback(
    unsafeEndpoints => {
      const sanitizedSliderEndpoints = sanitizeEndpoints(unsafeEndpoints, [
        initialMin,
        initialMax,
      ]);
      setSliderEndpoints(sanitizedSliderEndpoints);
      setData(
        getHistogramData(
          initialData,
          keyToCountForBuckets,
          // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'any[]' is not assignable to para... Remove this comment to see the full error message
          sanitizedSliderEndpoints
        )
      );
    },
    [initialData, keyToCountForBuckets, initialMin, initialMax]
  );

  const onBarMouseOut = useCallback(() => {
    setHoveredBar(null);
  }, []);

  const onBarMouseHover = useCallback(bar => setHoveredBar(bar), []);

  const onBarClick = useCallback(
    ({ x }) => {
      const bucketKey = x - HALF_BAR_WIDTH;
      const endpoints = [bucketKey, bucketKey];
      onSliderChange(endpoints);
      onSliderAfterChange(endpoints);
    },
    [onSliderChange, onSliderAfterChange]
  );

  return (
    // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
    <AggregationBox name={name}>
      <div className="__RangeAggregation__">
        <FlexibleWidthXYPlot height={HEIGHT} margin={NO_MARGIN}>
          <VerticalRectSeries
            className="pointer"
            colorType="literal"
            data={initialData}
            onValueClick={onBarClick}
            onValueMouseOver={onBarMouseHover}
            onValueMouseOut={onBarMouseOut}
          />
          {hoveredBar && (
            <Hint
              value={hoveredBar}
              align={{ vertical: 'top', horizontal: 'auto' }}
              format={({
                x
              }: any) => {
                const bucketKey = x - HALF_BAR_WIDTH;
                const count = keyToCountForBuckets[bucketKey] || 0;
                const initialCount =
                  keyToCountForInitialBuckets[bucketKey] || 0;
                return [
                  // FIXME: awkward x, y titles for a generic range filter
                  {
                    title: 'Selected Papers',
                    value: addCommasToNumber(count),
                  },
                  {
                    title: 'Total Papers',
                    value: addCommasToNumber(initialCount),
                  },
                  { title: 'Year', value: bucketKey },
                ];
              }}
            />
          )}
          <VerticalRectSeries
            className="pointer highlight-bar-on-hover"
            colorType="literal"
            data={data}
            onValueClick={onBarClick}
            onValueMouseOver={onBarMouseHover}
            onValueMouseOut={onBarMouseOut}
          />
        </FlexibleWidthXYPlot>
        <Slider
          range
          onChange={onSliderChange}
          onAfterChange={onSliderAfterChange}
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'any[]' is not assignable to type 'SliderValu... Remove this comment to see the full error message
          value={sliderEndpoints}
          min={initialMin}
          max={initialFakeMax}
          marks={sliderMarks}
          included
          tooltipVisible={false}
        />
      </div>
    </AggregationBox>
  );
}

RangeAggregation.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  selections: PropTypes.string,
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'typeof List' is not assignable t... Remove this comment to see the full error message
  buckets: PropTypes.instanceOf(List),
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'typeof List' is not assignable t... Remove this comment to see the full error message
  initialBuckets: PropTypes.instanceOf(List),
};

RangeAggregation.defaultProps = {
  selections: null,
  buckets: List(),
  initialBuckets: List(),
};

export default RangeAggregation;
