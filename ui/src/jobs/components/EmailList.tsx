import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
// @ts-expect-error ts-migrate(2691) FIXME: An import path cannot end with a '.tsx' extension.... Remove this comment to see the full error message
import ExternalLink from '../../common/components/ExternalLink.tsx';
import InlineList from '../../common/components/InlineList';

class EmailList extends Component {
  static renderEmail(email: any) {
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return <ExternalLink href={`mailto:${email}`}>{email}</ExternalLink>;
  }

  render() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'emails' does not exist on type 'Readonly... Remove this comment to see the full error message
    const { emails } = this.props;

    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return <InlineList items={emails} renderItem={EmailList.renderEmail} />;
  }
}

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
EmailList.propTypes = {
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'typeof List' is not assignable t... Remove this comment to see the full error message
  emails: PropTypes.instanceOf(List),
};

// @ts-expect-error ts-migrate(2339) FIXME: Property 'defaultProps' does not exist on type 'ty... Remove this comment to see the full error message
EmailList.defaultProps = {
  emails: null,
};

export default EmailList;
