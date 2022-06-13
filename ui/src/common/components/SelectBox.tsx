import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';
import { SelectOptionsPropType } from '../propTypes';

function SelectBox({
  options,
  virtualScroll = false,
  ...selectProps
}: any) {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Select dropdownMatchSelectWidth={virtualScroll} showArrow {...selectProps}>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      {options.map((option: any) => <Select.Option key={option.value} value={option.value}>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <span
          data-test-id={
            selectProps['data-test-id'] &&
            `${selectProps['data-test-id']}-option-${option.value}`
          }
        >
          {option.display || option.value}
        </span>
      </Select.Option>)}
    </Select>
  );
}

SelectBox.propTypes = {
  options: SelectOptionsPropType.isRequired,
  virtualScroll: PropTypes.bool,
};

export default SelectBox;
