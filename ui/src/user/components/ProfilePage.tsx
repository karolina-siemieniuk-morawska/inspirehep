import React, { Component } from 'react';

class ProfilePage extends Component {
  render() {
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return <div>User Profile</div>;
  }
}

export default ProfilePage;
