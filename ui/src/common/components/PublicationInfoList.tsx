import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';

import InlineList from './InlineList';
// @ts-expect-error ts-migrate(6142) FIXME: Module './PublicationInfo' was resolved to '/Users... Remove this comment to see the full error message
import PublicationInfo from './PublicationInfo';

class PublicationInfoList extends Component {
  render() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'publicationInfo' does not exist on type ... Remove this comment to see the full error message
    const { publicationInfo, labeled } = this.props;
    const label = labeled ? 'Published in' : null;
    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <InlineList
        // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
        label={label}
        items={publicationInfo}
        extractKey={(info: any) => info.get('journal_title') || info.get('pubinfo_freetext')
        }
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        renderItem={(info: any) => <PublicationInfo info={info} />}
      />
    );
  }
}

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
PublicationInfoList.propTypes = {
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'typeof List' is not assignable t... Remove this comment to see the full error message
  publicationInfo: PropTypes.instanceOf(List),
  labeled: PropTypes.bool,
};

// @ts-expect-error ts-migrate(2339) FIXME: Property 'defaultProps' does not exist on type 'ty... Remove this comment to see the full error message
PublicationInfoList.defaultProps = {
  publicationInfo: null,
  labeled: true,
};

export default PublicationInfoList;
