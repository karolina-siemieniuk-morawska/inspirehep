import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'antd';
import { Map } from 'immutable';

// @ts-expect-error ts-migrate(6142) FIXME: Module './Figure' was resolved to '/Users/karolina... Remove this comment to see the full error message
import Figure from './Figure';

function FigureListItem({
  figure,
  onClick
}: any) {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <List.Item>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Figure className="mhi5" onClick={onClick} url={figure.get('url')} />
    </List.Item>
  );
}

FigureListItem.propTypes = {
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'typeof Map' is not assignable to... Remove this comment to see the full error message
  figure: PropTypes.instanceOf(Map).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FigureListItem;
