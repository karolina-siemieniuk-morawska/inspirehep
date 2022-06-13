import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { Row, Card, Button } from 'antd';

import orcidLogo from '../../../common/orcid.svg';
import './LoginPage.scss';
// @ts-expect-error ts-migrate(2691) FIXME: An import path cannot end with a '.tsx' extension.... Remove this comment to see the full error message
import ExternalLink from '../../../common/components/ExternalLink.tsx';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../../common/components/DocumentHead' w... Remove this comment to see the full error message
import DocumentHead from '../../../common/components/DocumentHead';
import { WHAT_IS_ORCID_URL } from '../../../common/constants';

const META_DESCRIPTION = 'Log in to your INSPIRE account. Log in with ORCID';
const TITLE = 'Login';

class LoginPage extends Component {
  render() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'previousUrl' does not exist on type 'Rea... Remove this comment to see the full error message
    const { previousUrl } = this.props;
    const loginHref = `/api/accounts/login?next=${previousUrl}`;
    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <DocumentHead title={TITLE} description={META_DESCRIPTION} />
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Row
          className="__LoginPage__ h-100"
          // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
          type="flex"
          justify="center"
          align="middle"
        >
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Card align="middle">
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <p className="f4">Please sign in to INSPIRE</p>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <p className="pb2">
              To suggest content to INSPIRE, an ORCID is required. Registration
              is free, quick, and open to all! Sign up at{' '}
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <ExternalLink href="https://orcid.org/register!">
                https://orcid.org/register
              </ExternalLink>
            </p>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Button className="login-button h3" href={loginHref}>
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <img className="logo mr2" src={orcidLogo} alt="ORCID" />
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <strong>Login with ORCID</strong>
            </Button>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <ExternalLink href={WHAT_IS_ORCID_URL} className="db pt3">
              What is ORCID?
            </ExternalLink>
          </Card>
        </Row>
      </>
    );
  }
}

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
LoginPage.propTypes = {
  previousUrl: PropTypes.string.isRequired,
};

export default LoginPage;
