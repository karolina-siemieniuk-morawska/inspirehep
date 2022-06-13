// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { connect } from 'react-redux';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/LinkLikeButton' wa... Remove this comment to see the full error message
import LinkLikeButton from '../../common/components/LinkLikeButton';
import { CITEABLE_QUERY } from '../../common/constants';
import { searchQueryUpdate } from '../../actions/search';
import { AUTHOR_PUBLICATIONS_NS } from '../../search/constants';

export const dispatchToProps = (dispatch: any) => ({
  onClick() {
    dispatch(
      searchQueryUpdate(AUTHOR_PUBLICATIONS_NS, {
        page: '1',
        ...CITEABLE_QUERY,
      })
    );
  }
});

export default connect(null, dispatchToProps)(LinkLikeButton);
