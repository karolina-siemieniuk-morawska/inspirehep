import React from 'react';
import { Col, Row } from 'antd';
import PropTypes from 'prop-types';

import ContentBox from '../../common/components/ContentBox';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/containers/CitationSummaryGra... Remove this comment to see the full error message
import CitationSummaryGraphContainer from '../../common/containers/CitationSummaryGraphContainer';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/containers/CitationSummaryTab... Remove this comment to see the full error message
import CitationSummaryTableContainer from '../../common/containers/CitationSummaryTableContainer';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../containers/ExcludeSelfCitationsContaine... Remove this comment to see the full error message
import ExcludeSelfCitationsContainer from '../containers/ExcludeSelfCitationsContainer';

function CitationSummaryBox({
  namespace
}: any) {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <ContentBox subTitle="Citation Summary">
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <ExcludeSelfCitationsContainer namespace={namespace} />

      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Row gutter={{ xs: 0, lg: 32 }}>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Col span={24}>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <CitationSummaryTableContainer />
        </Col>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Col span={24}>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <CitationSummaryGraphContainer namespace={namespace} />
        </Col>
      </Row>
    </ContentBox>
  );
}

CitationSummaryBox.propTypes = {
  namespace: PropTypes.string.isRequired,
};

export default CitationSummaryBox;
