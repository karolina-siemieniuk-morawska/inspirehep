import React, { Component } from 'react';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../../../common/components/SelectBox' was ... Remove this comment to see the full error message
import SelectBox from '../../../common/components/SelectBox';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../withFormItem' was resolved to '/Users/k... Remove this comment to see the full error message
import withFormItem from '../withFormItem';

class SelectField extends Component {
  constructor(props: any) {
    super(props);
    this.onBlur = this.onBlur.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onBlur() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'form' does not exist on type 'Readonly<{... Remove this comment to see the full error message
    const { form, name } = this.props;
    form.setFieldTouched(name, true);
  }

  onChange(value: any) {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'form' does not exist on type 'Readonly<{... Remove this comment to see the full error message
    const { form, name } = this.props;
    form.setFieldValue(name, value);
    form.setFieldTouched(name, true);
  }

  render() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'value' does not exist on type 'Readonly<... Remove this comment to see the full error message
    const { value, mode, ...otherProps } = this.props;
    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <SelectBox
        {...otherProps}
        // @ts-expect-error ts-migrate(2322) FIXME: Type '{ mode: any; "data-test-type": string; defau... Remove this comment to see the full error message
        mode={mode}
        data-test-type={`${mode || 'single'}-select`}
        defaultValue={value}
        onBlur={this.onBlur}
        onChange={this.onChange}
      />
    );
  }
}

export default withFormItem(SelectField);
