import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { useParams } from 'react-router-dom';
import { Set } from 'immutable';
import { SelectOutlined } from '@ant-design/icons';

import { Drawer, Radio, Row, Col, Button } from 'antd';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../../common/containers/ResultsContaine... Remove this comment to see the full error message
import ResultsContainer from '../../../common/containers/ResultsContainer';
import { ASSIGN_AUTHOR_NS } from '../../../search/constants';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../AuthorResultItem' was resolved to '/Use... Remove this comment to see the full error message
import AuthorResultItem from '../AuthorResultItem';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../../common/containers/NumberOfResults... Remove this comment to see the full error message
import NumberOfResultsContainer from '../../../common/containers/NumberOfResultsContainer';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../../common/containers/EmbeddedSearchB... Remove this comment to see the full error message
import EmbeddedSearchBoxContainer from '../../../common/containers/EmbeddedSearchBoxContainer';
import pluralizeUnlessSingle from '../../../common/utils';

function renderAuthorItem(result: any) {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Row>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Col flex="0 1 1px">
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Radio value={result.getIn(['metadata', 'control_number'])} />
      </Col>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Col flex="1 1 1px">
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <AuthorResultItem
          // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
          metadata={result.get('metadata')}
          openDetailInNewTab
        />
      </Col>
    </Row>
  );
}

function AssignDrawer({
  visible,
  onDrawerClose,
  selectedPapers,
  onAssign
}: any) {
  const currentAuthorId = Number(useParams().id);
  const [selectedAuthorId, setSelectedAuthorId] = useState();
  const onSelectedAuthorChange = useCallback(event => {
    setSelectedAuthorId(event.target.value);
  }, []);
  const onAssignClick = useCallback(
    () => {
      onAssign({
        from: currentAuthorId,
        to: selectedAuthorId === 'new' ? undefined : selectedAuthorId,
      });
    },
    [currentAuthorId, selectedAuthorId, onAssign]
  );
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Drawer
      className="search-drawer"
      placement="right"
      onClose={onDrawerClose}
      visible={visible}
    >
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <p>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <strong>
          You have selected {selectedPapers.size}{' '}
          {pluralizeUnlessSingle('paper', selectedPapers.size)}. Select the
          author to assign the selected papers:
        </strong>
      </p>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <EmbeddedSearchBoxContainer namespace={ASSIGN_AUTHOR_NS} />
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <NumberOfResultsContainer namespace={ASSIGN_AUTHOR_NS} />
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Radio.Group
        data-test-id="author-radio-group"
        className="w-100"
        onChange={onSelectedAuthorChange}
      >
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <ResultsContainer
          namespace={ASSIGN_AUTHOR_NS}
          renderItem={renderAuthorItem}
        />
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className="mv2">
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Radio value="new">
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <strong>New author</strong>
          </Radio>
        </div>
      </Radio.Group>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Row className="mt2" justify="end">
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Col>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Button
            data-test-id="assign-button"
            disabled={selectedAuthorId == null}
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            icon={<SelectOutlined />}
            type="primary"
            onClick={onAssignClick}
          >
            Assign
          </Button>
        </Col>
      </Row>
    </Drawer>
  );
}

AssignDrawer.propTypes = {
  visible: PropTypes.bool,
  onDrawerClose: PropTypes.func,
  onAssign: PropTypes.func,
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'typeof Set' is not assignable to... Remove this comment to see the full error message
  selectedPapers: PropTypes.instanceOf(Set),
};

export default AssignDrawer;
