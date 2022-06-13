import React, { useCallback, useMemo } from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../withFormItem' was resolved to '/Users/k... Remove this comment to see the full error message
import withFormItem from '../withFormItem';

const BOTH_TRUE = [true, true];

function DateRangeField({ value = [], ...props }) {
  const { form, name, format } = props;

  const [startDate, endDate] = value;
  const valueAsMoment = useMemo(
    () => [
      startDate && moment(startDate, format),
      endDate && moment(endDate, format),
    ],
    [startDate, endDate, format]
  );

  const onChange = useCallback(
    (_, range) => {
      form.setFieldValue(name, range);
    },
    [form, name]
  );

  const onBlur = useCallback(
    () => {
      form.setFieldTouched(name, true);
    },
    [form, name]
  );

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <DatePicker.RangePicker
      {...props}
      // set BOTH_TRUE for e2e, it is validate via schema any case.
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'boolean[]' is not assignable to type '[boole... Remove this comment to see the full error message
      allowEmpty={BOTH_TRUE}
      data-test-type="date-range-picker"
      data-test-format={format}
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'never[]' is not assignable to type '[EventVa... Remove this comment to see the full error message
      value={valueAsMoment}
      onBlur={onBlur}
      onChange={onChange}
      className="w-100"
    />
  );
}

export default withFormItem(DateRangeField);
