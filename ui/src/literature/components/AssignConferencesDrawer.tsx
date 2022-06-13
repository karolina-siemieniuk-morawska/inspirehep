import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import { Set } from 'immutable';
import { SelectOutlined } from '@ant-design/icons';

import { Drawer, Radio, Row, Col, Button } from 'antd';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/containers/ResultsContainer' ... Remove this comment to see the full error message
import ResultsContainer from '../../common/containers/ResultsContainer';
import { ASSIGN_CONFERENCE_NS } from '../../search/constants';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../conferences/components/ConferenceIte... Remove this comment to see the full error message
import ConferenceItem from '../../conferences/components/ConferenceItem';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/containers/NumberOfResultsCon... Remove this comment to see the full error message
import NumberOfResultsContainer from '../../common/containers/NumberOfResultsContainer';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/containers/EmbeddedSearchBoxC... Remove this comment to see the full error message
import EmbeddedSearchBoxContainer from '../../common/containers/EmbeddedSearchBoxContainer';
import pluralizeUnlessSingle from '../../common/utils';

function renderConferenceItem(result: any) {
  const controlNumber = result.getIn(['metadata', 'control_number']);
  const title = result.getIn(['metadata', 'titles', 0, 'title']);
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Row>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Col flex="0 1 1px">
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Radio value={{ controlNumber, title }} />
      </Col>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Col flex="1 1 1px">
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <ConferenceItem metadata={result.get('metadata')} openDetailInNewTab />
      </Col>
    </Row>
  );
}

function AssignDrawer({
  visible,
  onDrawerClose,
  onAssign,
  selectedPapers
}: any) {
  const [selectedConferenceId, setSelectedConferenceId] = useState();
  const [selectedConferenceTitle, setSelectedConferenceTitle] = useState();

  const onSelectedConferenceChange = useCallback((event) => {
    const { controlNumber, title } = event.target.value;
    setSelectedConferenceId(controlNumber);
    setSelectedConferenceTitle(title);
  }, []);

  const onAssignClick = useCallback(() => {
    onAssign(selectedConferenceId, selectedConferenceTitle);
  }, [selectedConferenceId, selectedConferenceTitle, onAssign]);

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
          conference to assign the selected papers:
        </strong>
      </p>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <EmbeddedSearchBoxContainer namespace={ASSIGN_CONFERENCE_NS} />
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <NumberOfResultsContainer namespace={ASSIGN_CONFERENCE_NS} />
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Radio.Group
        data-test-id="conference-radio-group"
        className="w-100"
        onChange={onSelectedConferenceChange}
      >
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <ResultsContainer
          namespace={ASSIGN_CONFERENCE_NS}
          renderItem={renderConferenceItem}
        />
      </Radio.Group>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Row className="mt2" justify="end">
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Col>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Button
            data-test-id="assign-conference-button"
            disabled={selectedConferenceId == null}
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
