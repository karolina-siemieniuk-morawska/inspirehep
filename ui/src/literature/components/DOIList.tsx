import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';

// @ts-expect-error ts-migrate(6142) FIXME: Module './DOILink' was resolved to '/Users/karolin... Remove this comment to see the full error message
import DOILink from './DOILink';
import InlineList from '../../common/components/InlineList';
// @ts-expect-error ts-migrate(6142) FIXME: Module './DOIMaterial' was resolved to '/Users/kar... Remove this comment to see the full error message
import DOIMaterial from './DOIMaterial';

class DOIList extends Component {
  static renderDoiItem(doi: any) {
    const material = doi.get('material');
    const value = doi.get('value');
    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <span>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <DOILink doi={value}>{value}</DOILink>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <DOIMaterial material={material} />
      </span>
    );
  }

  render() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'dois' does not exist on type 'Readonly<{... Remove this comment to see the full error message
    const { dois } = this.props;

    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <InlineList
        // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
        label="DOI"
        items={dois}
        extractKey={(doi: any) => doi.get('value')}
        renderItem={DOIList.renderDoiItem}
      />
    );
  }
}

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
DOIList.propTypes = {
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'typeof List' is not assignable t... Remove this comment to see the full error message
  dois: PropTypes.instanceOf(List),
};

// @ts-expect-error ts-migrate(2339) FIXME: Property 'defaultProps' does not exist on type 'ty... Remove this comment to see the full error message
DOIList.defaultProps = {
  dois: null,
};

export default DOIList;
