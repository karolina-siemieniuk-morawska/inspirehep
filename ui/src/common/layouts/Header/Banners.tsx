import React from 'react';

import { getConfigFor } from '../../config';
// @ts-expect-error ts-migrate(6142) FIXME: Module './BannerContainer' was resolved to '/Users... Remove this comment to see the full error message
import BannerContainer from './BannerContainer';

function Banners() {
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'never[]' is not assignable to pa... Remove this comment to see the full error message
  const banners = getConfigFor('BANNERS', []);
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return <>
    {banners.map(({
      id,
      ...rest
    }: any) => (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <BannerContainer key={id} id={id} {...rest} />
    ))}
  </>;
}

export default Banners;
