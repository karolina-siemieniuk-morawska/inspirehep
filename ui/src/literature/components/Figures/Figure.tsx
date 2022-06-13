import React from 'react';
import PropTypes from 'prop-types';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'clas... Remove this comment to see the full error message
import classNames from 'classnames';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import Image from 'react-image';
import { Spin } from 'antd';
import { FileImageOutlined } from '@ant-design/icons';

import './Figure.scss';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../../common/components/Latex' was reso... Remove this comment to see the full error message
import Latex from '../../../common/components/Latex';

const ICON_STYLE = { margin: 'auto', display: 'block', padding: '2rem 0' };
// @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
const LOADER = <Spin style={ICON_STYLE} />;
// @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
const UNLOADER = <FileImageOutlined className="f2" style={ICON_STYLE} />;

function Figure({
  url,
  className,
  onClick,
  caption
}: any) {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className="__Figure__ bg-white pa3">
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <figure className="mv1">
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Image
          onClick={onClick}
          className={classNames(className, 'ba pa1 db center w-auto h-auto', {
            pointer: onClick,
          })}
          src={url}
          alt="Figure"
          loader={LOADER}
          unloader={UNLOADER}
        />
        {caption && (
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <figcaption className="mt3">
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Latex>{caption}</Latex>
          </figcaption>
        )}
      </figure>
    </div>
  );
}

Figure.propTypes = {
  url: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  caption: PropTypes.string,
};

export default Figure;
