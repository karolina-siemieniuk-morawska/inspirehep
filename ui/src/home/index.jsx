import React from 'react';
import { Row, Col, Card } from 'antd';

import SearchBoxContainer from '../common/containers/SearchBoxContainer';
import HowToSearch from './components/HowToSearch';
import './index.scss';
import DocumentHead from '../common/components/DocumentHead';
import HomePageSection from './components/HomePageSection';
import HowToSubmit from './components/HowToSubmit';
import CollaborationLogos from './components/CollaborationLogos';

const INSPIRE_DESCRIPTION =
  'INSPIRE is a trusted community hub that helps researchers to share and find accurate scholarly information in high energy physics.';
const META_DESCRIPTION =
  'INSPIRE is the leading information platform for High Energy Physics (HEP) literature which provides users with high quality, curated content covering the entire corpus of HEP literature, authors, data, jobs, conferences, institutions and experiments.';
const TITLE = 'Home';

function Home() {
  return (
    <>
      <DocumentHead title={TITLE} description={META_DESCRIPTION} />
      <Row className="__Home__" type="flex" justify="center" align="middle">
        <Col span={24}>
          <HomePageSection
            title="Discover High-Energy Physics Content"
            description={INSPIRE_DESCRIPTION}
          >
            <SearchBoxContainer />
          </HomePageSection>
          <HomePageSection className="bg-white">
            <CollaborationLogos />
          </HomePageSection>
          <HomePageSection>
            <Row justify="center">
              <Col className="pa3" span={6}>
                <Card
                  title='ATLAS Experiment releases 13 TeV Open Data for Science Education'
                >
                  The ATLAS Collaboration at CERN has just released the first open dataset from the Large Hadron Collider’s (LHC) highest-energy run at 13 teraelectronvolts (TeV). The new release is specially developed for science education, underlining the Collaboration’s long-standing commitment to students and teachers using open-access ATLAS data and related tools.
                </Card>
              </Col>
              <Col className="pa3" span={6}>
                <Card
                  title='ATLAS Experiment releases 13 TeV Open Data for Science Education'
                >
                  The ATLAS Collaboration at CERN has just released the first open dataset from the Large Hadron Collider’s (LHC) highest-energy run at 13 teraelectronvolts (TeV). The new release is specially developed for science education, underlining the Collaboration’s long-standing commitment to students and teachers using open-access ATLAS data and related tools.
                </Card>
              </Col>
              <Col className="pa3" span={6}>
                <Card
                  title='ATLAS Experiment releases 13 TeV Open Data for Science Education'
                >
                  The ATLAS Collaboration at CERN has just released the first open dataset from the Large Hadron Collider’s (LHC) highest-energy run at 13 teraelectronvolts (TeV). The new release is specially developed for science education, underlining the Collaboration’s long-standing commitment to students and teachers using open-access ATLAS data and related tools.
                </Card>
              </Col>
            </Row>
            <Row justify="center">
              <a className="tc f5 mt3" href="https://opendata.cern.ch/">View all</a>
            </Row>
          </HomePageSection>
          <HomePageSection
            title="How to Search"
            id="how-to-search"
            className="bg-white"
            description="INSPIRE supports the most popular SPIRES syntax operators and free text searches for searching papers."
          >
            <HowToSearch />
          </HomePageSection>
          <HomePageSection
            title="How to Submit"
            description="INSPIRE systematically adds content from various sources. Anyone can also submit new content by logging in with their ORCID."
          >
            <HowToSubmit />
          </HomePageSection>
        </Col>
      </Row>
    </>
  );
}

export default Home;
