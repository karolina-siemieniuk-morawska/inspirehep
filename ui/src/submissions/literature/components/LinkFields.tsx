import React, { Component } from 'react';
import { Field } from 'formik';
import { Tooltip } from 'antd';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/TextField' was res... Remove this comment to see the full error message
import TextField from '../../common/components/TextField';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../../common/components/LabelWithHelp' ... Remove this comment to see the full error message
import LabelWithHelp from '../../../common/components/LabelWithHelp';

class LinkFields extends Component {
  render() {
    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Field
          name="pdf_link"
          label={
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <LabelWithHelp
              // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
              label={
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Tooltip title="Where can we find a PDF to check the references?">
                  Link to PDF
                </Tooltip>
              }
              help="Where can we find a PDF to check the references?"
            />
          }
          placeholder="https://example.com/document.pdf"
          component={TextField}
        />
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Field
          name="additional_link"
          label={
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <LabelWithHelp
              // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
              label={
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Tooltip title="Link to additional information (eg. abstract): Which page should we link from INSPIRE?">
                  Link to additional info
                </Tooltip>
              }
              help="Link to additional information (eg. abstract): Which page should we link from INSPIRE?"
            />
          }
          placeholder="https://example.com/page.html"
          component={TextField}
        />
      </>
    );
  }
}

export default LinkFields;
