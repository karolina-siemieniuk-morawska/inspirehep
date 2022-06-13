import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { List, setIn } from 'immutable';
import { Col, Row, Tree } from 'antd';

import UnclickableTag from './UnclickableTag';
// @ts-expect-error ts-migrate(6142) FIXME: Module './AggregationBox' was resolved to '/Users/... Remove this comment to see the full error message
import AggregationBox from './AggregationBox';
import { forceArray } from '../utils';
// @ts-expect-error ts-migrate(2691) FIXME: An import path cannot end with a '.tsx' extension.... Remove this comment to see the full error message
import FormattedNumber from './FormattedNumber.tsx';

function renderTitle(name: any, docCount: any) {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Row className="mv1" justify="space-between" key={name}>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Col>{name}</Col>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Col>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <UnclickableTag>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <FormattedNumber>{docCount}</FormattedNumber>
        </UnclickableTag>
      </Col>
    </Row>
  );
}

function buildTreeData(buckets: any, splitTreeBy: any) {
  let tree = {};
  buckets.forEach((bucket: any) => {
    const docCount = bucket.get('doc_count');
    const key = bucket.get('key');
    // convert to list just for `flatMap`, since Array.prototype.flatMap needs to be polyfilled
    // a|b|c => turns into [children, a, children, b, children, c] (the path of the node)
    const path = List(key.split(splitTreeBy)).flatMap(node => [
      'children',
      node,
    ]);

    tree = setIn(tree, path.push('title'), renderTitle(path.last(), docCount));
    tree = setIn(tree, path.push('key'), key);
  });

  function convertChildrenToArray(node: any) {
    if (node.children) {
      node.children = Object.values(node.children);
      node.children.forEach(convertChildrenToArray);
    }
  }

  // because above needs and builds a tree where node.children is an object
  convertChildrenToArray(tree);
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'children' does not exist on type '{}'.
  return tree.children;
}

function TreeAggregation({
  onChange,
  buckets,
  name,
  selections,
  splitTreeBy
}: any) {
  const [selectedKeys] = useState(forceArray(selections));

  const tree = useMemo(() => buildTreeData(buckets, splitTreeBy), [
    buckets,
    splitTreeBy,
  ]);

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <AggregationBox name={name}>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Tree
        blockNode
        checkable
        checkStrictly
        checkedKeys={selectedKeys}
        // @ts-expect-error ts-migrate(2339) FIXME: Property 'checked' does not exist on type '{ check... Remove this comment to see the full error message
        onCheck={event => onChange(event.checked)}
        selectable={false}
        treeData={tree}
        defaultExpandedKeys={selectedKeys}
      />
    </AggregationBox>
  );
}

TreeAggregation.propTypes = {
  onChange: PropTypes.func.isRequired,
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'typeof List' is not assignable t... Remove this comment to see the full error message
  buckets: PropTypes.instanceOf(List).isRequired,
  name: PropTypes.string.isRequired,
  selections: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),
  splitTreeBy: PropTypes.string.isRequired,
};

TreeAggregation.defaultProps = {
  selections: [],
};

export default TreeAggregation;
