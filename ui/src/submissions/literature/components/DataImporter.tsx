import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import { Input, Button, Alert, Row, Col, Tooltip, Form } from 'antd';
// @ts-expect-error ts-migrate(2691) FIXME: An import path cannot end with a '.tsx' extension.... Remove this comment to see the full error message
import ExternalLink from '../../../common/components/ExternalLink.tsx';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../../../common/components/LinkLikeButton'... Remove this comment to see the full error message
import LinkLikeButton from '../../../common/components/LinkLikeButton';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/withFormItem' was resolved to... Remove this comment to see the full error message
import { LABEL_COL, WRAPPER_COL } from '../../common/withFormItem';

const DEFAULT_ERROR_MESSAGE = 'Something went wrong during the import';

class DataImporter extends Component {
  importValue: any;

  constructor(props: any) {
    super(props);
    this.onImportChange = this.onImportChange.bind(this);
    this.onImportClick = this.onImportClick.bind(this);
  }

  async onImportChange(event: any) {
    const { value } = event.target;
    this.importValue = value;
  }

  onImportClick() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'onImportClick' does not exist on type 'R... Remove this comment to see the full error message
    const { onImportClick } = this.props;
    onImportClick(this.importValue);
  }

  renderAlertMessage() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'error' does not exist on type 'Readonly<... Remove this comment to see the full error message
    const { error } = this.props;
    const recordId = error.get('recid');
    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <>
        {error.get('message', DEFAULT_ERROR_MESSAGE)}
        {recordId && (
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <>
            {'. '}{' '}
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <ExternalLink href={`http://inspirehep.net/record/${recordId}`}>
              See the record
            </ExternalLink>
          </>
        )}
      </>
    );
  }

  render() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'onSkipClick' does not exist on type 'Rea... Remove this comment to see the full error message
    const { onSkipClick, isImporting, error } = this.props;
    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Row className="mb3">
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Col span={24}>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Alert
              message="Fill in the field to automatically import more data from arXiv or DOI"
              type="info"
            />
          </Col>
        </Row>
        {error && (
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Row className="mb3">
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Col>
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Alert
                message={this.renderAlertMessage()}
                type="error"
                showIcon
                closable
              />
            </Col>
          </Row>
        )}
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Form.Item
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          label={<Tooltip title="From arXiv or DOI">From arXiv or DOI</Tooltip>}
          labelCol={LABEL_COL}
          wrapperCol={WRAPPER_COL}
        >
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Input
            data-test-id="import-input"
            placeholder="hep-th/9711200 or 1207.7235 or arXiv:1001.4538 or 10.1086/305772 or doi:10.1086/305772"
            onChange={this.onImportChange}
            onPressEnter={this.onImportClick}
          />
        </Form.Item>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Row type="flex" justify="space-between" align="middle">
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Col>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <LinkLikeButton
              // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
              dataTestId="skip-import-button"
              onClick={onSkipClick}
            >
              Skip and fill the form manually
            </LinkLikeButton>
          </Col>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Col>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Button
              data-test-id="import-button"
              type="primary"
              onClick={this.onImportClick}
              loading={isImporting}
            >
              Import
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
DataImporter.propTypes = {
  // TODO: maybe use portal to put this future directly into SubmissionPage or remove this component fully since it's not used anywhere else, or use redux
  onSkipClick: PropTypes.func.isRequired,
  onImportClick: PropTypes.func.isRequired,
  isImporting: PropTypes.bool.isRequired,
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'typeof Map' is not assignable to... Remove this comment to see the full error message
  error: PropTypes.instanceOf(Map),
};

export default DataImporter;
