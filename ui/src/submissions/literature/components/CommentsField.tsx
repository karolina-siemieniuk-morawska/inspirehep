import React, { Component } from 'react';
import { Field } from 'formik';
import { Tooltip } from 'antd';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/TextAreaField' was... Remove this comment to see the full error message
import TextAreaField from '../../common/components/TextAreaField';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../../common/components/LabelWithHelp' ... Remove this comment to see the full error message
import LabelWithHelp from '../../../common/components/LabelWithHelp';

class CommentsField extends Component {
  render() {
    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Field
        name="comments"
        label={
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <LabelWithHelp
            // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
            label={
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Tooltip title="Why is this content relevant to INSPIRE?">
                Comments
              </Tooltip>
            }
            help="Why is this content relevant to INSPIRE?"
          />
        }
        placeholder="Any extra comments related to your submission"
        rows={6}
        component={TextAreaField}
      />
    );
  }
}

export default CommentsField;
