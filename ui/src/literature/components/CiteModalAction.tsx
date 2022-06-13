import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  CopyOutlined,
  DownloadOutlined,
  ExportOutlined,
} from '@ant-design/icons';
import { Modal, Button, Row, Alert } from 'antd';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { CopyToClipboard } from 'react-copy-to-clipboard';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/SelectBox' was res... Remove this comment to see the full error message
import SelectBox from '../../common/components/SelectBox';
import ListItemAction from '../../common/components/ListItemAction';
import IconText from '../../common/components/IconText';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/EventTracker' was ... Remove this comment to see the full error message
import EventTracker from '../../common/components/EventTracker';
import {
  CITE_FORMAT_OPTIONS,
  CITE_FORMAT_VALUES,
  CITE_FILE_FORMAT,
  CV,
} from '../constants';
import citeArticle from '../citeArticle';
import { downloadTextAsFile } from '../../common/utils';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/RichDescription' w... Remove this comment to see the full error message
import RichDescription from '../../common/components/RichDescription';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/LoadingOrChildren'... Remove this comment to see the full error message
import LoadingOrChildren from '../../common/components/LoadingOrChildren';

class CiteModalAction extends Component {
  citeContentCacheByFormat: any;

  constructor(props: any) {
    super(props);
    this.onCiteClick = this.onCiteClick.bind(this);
    this.onModalCancel = this.onModalCancel.bind(this);
    this.onFormatChange = this.onFormatChange.bind(this);
    this.onDownloadClick = this.onDownloadClick.bind(this);

    this.state = {
      modalVisible: false,
      errorMessage: null,
      loading: false,
    };
    this.citeContentCacheByFormat = {};
  }

  onCiteClick() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'citeContent' does not exist on type 'Rea... Remove this comment to see the full error message
    const { citeContent } = this.state;
    this.setState({ modalVisible: true });

    // initial modal open
    if (!citeContent) {
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'initialCiteFormat' does not exist on typ... Remove this comment to see the full error message
      const { initialCiteFormat } = this.props;
      this.setCiteContentFor(initialCiteFormat);
    }
  }

  onDownloadClick() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'citeContent' does not exist on type 'Rea... Remove this comment to see the full error message
    const { citeContent, format } = this.state;
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'recordId' does not exist on type 'Readon... Remove this comment to see the full error message
    const { recordId } = this.props;
    downloadTextAsFile(
      citeContent,
      // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
      `INSPIRE-Cite-${recordId}.${CITE_FILE_FORMAT[format].extension}`,
      // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
      CITE_FILE_FORMAT[format].mimetype
    );
  }

  onModalCancel() {
    this.setState({ modalVisible: false });
  }

  onFormatChange(format: any) {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'onCiteFormatChange' does not exist on ty... Remove this comment to see the full error message
    const { onCiteFormatChange } = this.props;
    onCiteFormatChange(format);
    this.setCiteContentFor(format);
  }

  async setCiteContentFor(format: any) {
    // TODO: remove this cache and rely on the browser http caching
    let citeContent = this.citeContentCacheByFormat[format];
    if (!citeContent) {
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'recordId' does not exist on type 'Readon... Remove this comment to see the full error message
      const { recordId } = this.props;
      this.setState({ loading: true });
      try {
        citeContent = await citeArticle(format, recordId);
        this.citeContentCacheByFormat[format] = citeContent;
        this.setState({ errorMessage: null, loading: false });
      } catch (error) {
        this.setState({
          errorMessage: `Could not create cite text for the selected format. Caused by: ${
            // @ts-expect-error ts-migrate(2571) FIXME: Object is of type 'unknown'.
            error.message
          }`,
          loading: false,
        });
      }
    }

    this.setState({ citeContent, format });
  }

  render() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'initialCiteFormat' does not exist on typ... Remove this comment to see the full error message
    const { initialCiteFormat } = this.props;
    const {
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'modalVisible' does not exist on type 'Re... Remove this comment to see the full error message
      modalVisible,
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'citeContent' does not exist on type 'Rea... Remove this comment to see the full error message
      citeContent,
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'errorMessage' does not exist on type 'Re... Remove this comment to see the full error message
      errorMessage,
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'format' does not exist on type 'Readonly... Remove this comment to see the full error message
      format,
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'loading' does not exist on type 'Readonl... Remove this comment to see the full error message
      loading,
    } = this.state;
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return <>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <ListItemAction>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <EventTracker eventId="Cite">
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Button onClick={this.onCiteClick}>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <IconText text="cite" icon={<ExportOutlined />} />
          </Button>
        </EventTracker>
      </ListItemAction>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Modal
        title="Cite Article"
        visible={modalVisible}
        footer={null}
        onCancel={this.onModalCancel}
      >
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <LoadingOrChildren loading={loading}>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <div>
            {errorMessage && (
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <div className="mb3">
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Alert type="error" showIcon description={errorMessage} />
              </div>
            )}
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Row>
              {format === CV ? (
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <RichDescription>{citeContent}</RichDescription>
              ) : (
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <pre>{citeContent}</pre>
              )}
            </Row>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Row type="flex" justify="space-between">
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <div>
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <CopyToClipboard
                  text={citeContent}
                  onCopy={this.onModalCancel}
                >
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <Button style={{ marginRight: 12 }}>
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <CopyOutlined /> Copy to Clipboard
                  </Button>
                </CopyToClipboard>
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Button onClick={this.onDownloadClick}>
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <DownloadOutlined /> Download
                </Button>
              </div>
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <EventTracker
                // @ts-expect-error ts-migrate(2322) FIXME: Type '{ children: Element; eventId: string; eventP... Remove this comment to see the full error message
                eventId="CiteFormatSelection"
                eventPropName="onChange"
                extractEventArgsToForward={(args: any) => [args[0]]}
              >
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <SelectBox
                  // @ts-expect-error ts-migrate(2322) FIXME: Type '{ style: { width: number; }; defaultValue: a... Remove this comment to see the full error message
                  style={{ width: 140 }}
                  defaultValue={initialCiteFormat}
                  onChange={this.onFormatChange}
                  options={CITE_FORMAT_OPTIONS}
                />
              </EventTracker>
            </Row>
          </div>
        </LoadingOrChildren>
      </Modal>
    </>;
  }
}

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
CiteModalAction.propTypes = {
  recordId: PropTypes.number.isRequired,
  initialCiteFormat: PropTypes.oneOf(CITE_FORMAT_VALUES).isRequired,
  onCiteFormatChange: PropTypes.func.isRequired,
};

export default CiteModalAction;
