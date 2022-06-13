// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { connect } from 'react-redux';
// @ts-expect-error ts-migrate(6142) FIXME: Module './BibliographyGenerator' was resolved to '... Remove this comment to see the full error message
import BibliographyGenerator from './BibliographyGenerator';
import { submitBibliographyGenerator } from '../actions/bibliographyGenerator';

const stateToProps = (state: any) => ({
  loading: state.bibliographyGenerator.get('loading'),
  data: state.bibliographyGenerator.get('data'),
  citationErrors: state.bibliographyGenerator.get('citationErrors'),
  error: state.bibliographyGenerator.get('error')
});

const dispatchToProps = (dispatch: any) => ({
  async onSubmit(formData: any) {
    const data = new FormData();
    data.append('file', formData.fileupload.file);
    await dispatch(submitBibliographyGenerator(formData.format, data));
  }
});
export default connect(stateToProps, dispatchToProps)(BibliographyGenerator);
