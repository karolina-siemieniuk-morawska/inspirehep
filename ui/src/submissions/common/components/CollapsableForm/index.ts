// @ts-expect-error ts-migrate(6142) FIXME: Module './CollapsableForm' was resolved to '/Users... Remove this comment to see the full error message
import CollapsableForm from './CollapsableForm';
// @ts-expect-error ts-migrate(6142) FIXME: Module './CollapseFormSection' was resolved to '/U... Remove this comment to see the full error message
import CollapsableFormSection from './CollapseFormSection';

// @ts-expect-error ts-migrate(2339) FIXME: Property 'Section' does not exist on type 'typeof ... Remove this comment to see the full error message
CollapsableForm.Section = CollapsableFormSection;

export default CollapsableForm;
