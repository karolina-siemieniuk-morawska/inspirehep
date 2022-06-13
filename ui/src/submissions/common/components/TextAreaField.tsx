import { Input } from 'antd';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../withFormItem' was resolved to '/Users/k... Remove this comment to see the full error message
import withFormItem from '../withFormItem';

export default withFormItem(Input.TextArea);
