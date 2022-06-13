import React, { Component } from 'react';
import QuillEditor, { Quill } from 'react-quill';

import 'react-quill/dist/quill.snow.css';
import './RichTextEditor.scss';
// @ts-expect-error ts-migrate(6142) FIXME: Module './EditorToolbar' was resolved to '/Users/k... Remove this comment to see the full error message
import EditorToolbar from './EditorToolbar';

// change default text default (`P`)
const Block = Quill.import('blots/block');
Block.tagName = 'DIV';
Quill.register(Block, true);

const QUILL_MODULES = {
  toolbar: '#toolbar',
};

const QUILL_FORMATS = ['bold', 'italic', 'list', 'bullet', 'link'];

class RichTextEditor extends Component {
  render() {
    const {
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'data-test-type' does not exist on type '... Remove this comment to see the full error message
      'data-test-type': dataTestType,
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'data-test-id' does not exist on type 'Re... Remove this comment to see the full error message
      'data-test-id': dataTestId,
      ...quillProps
    } = this.props;
    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div
        className="__RichTextEditor__ ant-input"
        data-test-type={dataTestType}
        data-test-id={dataTestId}
      >
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div id="toolbar">
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <EditorToolbar />
        </div>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <QuillEditor
          theme="snow"
          modules={QUILL_MODULES}
          formats={QUILL_FORMATS}
          {...quillProps}
        />
      </div>
    );
  }
}

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
RichTextEditor.propTypes = QuillEditor.propTypes;

export default RichTextEditor;
