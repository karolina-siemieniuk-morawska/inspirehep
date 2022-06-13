import React from 'react';
import { Row, Col } from 'antd';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../../common/components/DocumentHead' was ... Remove this comment to see the full error message
import DocumentHead from '../../common/components/DocumentHead';
import { SEMINARS_NS } from '../../search/constants';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../containers/SeminarSearchContainer' was ... Remove this comment to see the full error message
import SeminarSearchContainer from '../containers/SeminarSearchContainer';

const META_DESCRIPTION = 'Find seminars in High Energy Physics';
const TITLE = 'Seminars Search';

function SearchPage() {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <DocumentHead title={TITLE} description={META_DESCRIPTION} />
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Row>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Col xs={24} lg={22} xl={20} xxl={18}>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <SeminarSearchContainer namespace={SEMINARS_NS} enableDateFilter />
        </Col>
      </Row>
    </>
  );
}

export default SearchPage;
