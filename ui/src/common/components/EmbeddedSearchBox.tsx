import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';

function EmbeddedSearchBox({
  onSearch,
  placeholder
}: any) {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Input.Search enterButton onSearch={onSearch} placeholder={placeholder} />
  );
}

EmbeddedSearchBox.propTypes = {
  onSearch: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default EmbeddedSearchBox;
