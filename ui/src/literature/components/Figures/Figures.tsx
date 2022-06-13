import React, { useCallback, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../../../common/components/ClientPaginated... Remove this comment to see the full error message
import ClientPaginatedList from '../../../common/components/ClientPaginatedList';
// @ts-expect-error ts-migrate(6142) FIXME: Module './FiguresCarousel' was resolved to '/Users... Remove this comment to see the full error message
import FiguresCarousel from './FiguresCarousel';
// @ts-expect-error ts-migrate(6142) FIXME: Module './FigureListItem' was resolved to '/Users/... Remove this comment to see the full error message
import FigureListItem from './FigureListItem';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../../common/components/EmptyOrChildren... Remove this comment to see the full error message
import EmptyOrChildren from '../../../common/components/EmptyOrChildren';

function Figures({
  figures
}: any) {
  const [isCarouselVisible, setCarouselVisible] = useState(false);
  const carouselRef = useRef();

  const onCarouselCancel = useCallback(() => setCarouselVisible(false), [
    setCarouselVisible,
  ]);

  const renderListItem = useCallback(
    (figure, index) => (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <FigureListItem
        key={figure.get('key')}
        figure={figure}
        onClick={() => {
          setCarouselVisible(true);
          // TODO: setTimeout only if needed
          // wait for the carousel to be in dom
          // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
          setTimeout(() => carouselRef.current.goTo(index, true));
        }}
      />
    ),
    []
  );

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <EmptyOrChildren data={figures} title="0 Figures">
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <ClientPaginatedList
        // @ts-expect-error ts-migrate(2322) FIXME: Type '{ items: any; renderItem: (figure: any, inde... Remove this comment to see the full error message
        items={figures}
        renderItem={renderListItem}
        pageSize={12}
        grid
      />
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <FiguresCarousel
        ref={carouselRef}
        // @ts-expect-error ts-migrate(2322) FIXME: Type '{ ref: MutableRefObject<undefined>; figures:... Remove this comment to see the full error message
        figures={figures}
        visible={isCarouselVisible}
        onCancel={onCarouselCancel}
      />
    </EmptyOrChildren>
  );
}

Figures.propTypes = {
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'typeof List' is not assignable t... Remove this comment to see the full error message
  figures: PropTypes.instanceOf(List),
};

Figures.defaultProps = {
  figures: List(),
};

export default Figures;
