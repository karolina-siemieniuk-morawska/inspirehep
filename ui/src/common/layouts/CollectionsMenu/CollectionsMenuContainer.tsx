// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { connect } from 'react-redux';

// @ts-expect-error ts-migrate(6142) FIXME: Module './CollectionsMenu' was resolved to '/Users... Remove this comment to see the full error message
import CollectionsMenu from './CollectionsMenu';

const stateToProps = (state: any) => ({
  currentPathname: state.router.location.pathname,
  currentHash: state.router.location.hash
});

export default connect(stateToProps)(CollectionsMenu);
