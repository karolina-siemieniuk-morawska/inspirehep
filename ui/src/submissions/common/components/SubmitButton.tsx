import React, { useEffect } from 'react';
import { Button } from 'antd';
import { useFormikContext } from 'formik';

import usePrevious from '../../../common/hooks/usePrevious';

function SubmitButton() {
  const { isSubmitting, isValid, isValidating } = useFormikContext();
  const previousIsSubmitting = usePrevious(isSubmitting);
  useEffect(
    () => {
      const hasTriedToSubmitInvalidForm =
        previousIsSubmitting && !isSubmitting && !isValid;
      if (hasTriedToSubmitInvalidForm) {
        window.scrollTo(0, 0);
      }
    },
    [isSubmitting, isValid, previousIsSubmitting]
  );

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Button
      type="primary"
      htmlType="submit"
      loading={isSubmitting || isValidating}
    >
      Submit
    </Button>
  );
}

export default SubmitButton;
