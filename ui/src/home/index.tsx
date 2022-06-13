import React from 'react';
import { Row, Col } from 'antd';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../common/containers/SearchBoxContainer' w... Remove this comment to see the full error message
import SearchBoxContainer from '../common/containers/SearchBoxContainer';
// @ts-expect-error ts-migrate(6142) FIXME: Module './components/HowToSearch' was resolved to ... Remove this comment to see the full error message
import HowToSearch from './components/HowToSearch';
import './index.scss';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../common/components/DocumentHead' was res... Remove this comment to see the full error message
import DocumentHead from '../common/components/DocumentHead';
// @ts-expect-error ts-migrate(6142) FIXME: Module './components/HomePageSection' was resolved... Remove this comment to see the full error message
import HomePageSection from './components/HomePageSection';
// @ts-expect-error ts-migrate(6142) FIXME: Module './components/HowToSubmit' was resolved to ... Remove this comment to see the full error message
import HowToSubmit from './components/HowToSubmit';
import CollaborationLogos from './components/CollaborationLogos';

const INSPIRE_DESCRIPTION =
  'INSPIRE is a trusted community hub that helps researchers to share and find accurate scholarly information in high energy physics.';
const META_DESCRIPTION =
  'INSPIRE is the leading information platform for High Energy Physics (HEP) literature which provides users with high quality, curated content covering the entire corpus of HEP literature, authors, data, jobs, conferences, institutions and experiments.';
const TITLE = 'Home';

function Home() {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <DocumentHead title={TITLE} description={META_DESCRIPTION} />
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Row className="__Home__" type="flex" justify="center" align="middle">
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Col span={24}>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <HomePageSection
            title="Discover High-Energy Physics Content"
            description={INSPIRE_DESCRIPTION}
          >
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <SearchBoxContainer />
          </HomePageSection>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <HomePageSection
            className="bg-white"
            title="How to Search"
            description="INSPIRE supports the most popular SPIRES syntax operators and free text searches for searching papers."
          >
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <HowToSearch />
          </HomePageSection>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <HomePageSection
            title="How to Submit"
            description="INSPIRE systematically adds content from various sources. Anyone can also submit new content by logging in with their ORCID."
          >
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <HowToSubmit />
          </HomePageSection>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <HomePageSection className="bg-white" title="INSPIRE Collaboration">
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <CollaborationLogos />
          </HomePageSection>
        </Col>
      </Row>
    </>
  );
}

export default Home;
