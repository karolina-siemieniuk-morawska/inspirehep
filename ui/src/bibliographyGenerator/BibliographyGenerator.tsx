import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Upload, Button, Form, Alert } from 'antd';
import { Map, List } from 'immutable';
import { InboxOutlined } from '@ant-design/icons';
import CollapsableForm from '../submissions/common/components/CollapsableForm';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../common/components/SelectBox' was resolv... Remove this comment to see the full error message
import SelectBox from '../common/components/SelectBox';

import './BibliographyGenerator.scss';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../common/components/ErrorAlert' was resol... Remove this comment to see the full error message
import ErrorAlert from '../common/components/ErrorAlert';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../common/components/DocumentHead' was res... Remove this comment to see the full error message
import DocumentHead from '../common/components/DocumentHead';

const { Dragger } = Upload;

const BIBLIOGRAPHY_GENERATOR_FORMATS = [
  { value: 'bibtex', display: 'BibTeX' },
  { value: 'latex_us', display: 'LaTeX (US)' },
  { value: 'latex_eu', display: 'LaTeX (EU)' },
];
const META_DESCRIPTION =
  'Generate a LaTeX/BibTeX bibliography from citations in a LaTeX file.';
const TITLE = 'Bibliography Generator';

function Cite({
  children
}: any) {
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return <code>\cite{`{${children}}`}</code>;
}

Cite.propTypes = {
  children: PropTypes.node,
};

function BibliographyGenerator({
  onSubmit,
  loading,
  data,
  citationErrors,
  error
}: any) {
  const [fileList, setFileList] = useState();

  const uploadProps = {
    onRemove: () => {
      // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'null' is not assignable to param... Remove this comment to see the full error message
      setFileList(null);
    },
    beforeUpload: (f: any) => {
      // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'any[]' is not assignable to para... Remove this comment to see the full error message
      setFileList([f]);
      return false;
    },
  };

  useEffect(
    () => {
      if (data) {
        window.open(data.get('download_url'), '_self');
      }
    },
    [data]
  );

  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return <>
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <DocumentHead title={TITLE} description={META_DESCRIPTION} />
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Row type="flex" justify="center" className="overflow-x-auto">
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Col className="mt3 mb3" xs={24} md={21} lg={16} xl={15} xxl={14}>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Row className="mb3 pa3 bg-white">
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Col>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <h2>Bibliography generator</h2>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <p>
              Generate a LaTeX/BibTeX bibliography from citations in a LaTeX
              file.
            </p>
          </Col>
        </Row>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Form
          name="bibliography-generator-form"
          onFinish={onSubmit}
          initialValues={{
            format: BIBLIOGRAPHY_GENERATOR_FORMATS[0].value,
          }}
        >
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Row>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Col>
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <CollapsableForm>
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <CollapsableForm.Section header="Example" key="example">
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <p>
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <strong>
                      Here is an example of a LaTeX file that could be sent to
                      our bibliography service, the output as LaTeX is shown
                      below.
                    </strong>
                  </p>
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <pre className="latex-example">
                    {`
\\documentclass[12pt]{article}

\\begin {document}
\\begin{flushright}
{\\small
SLAC--PUB--10812\\\\
October 2012\\\\}
\\end{flushright}
                                                                            
\\title{A Really Great Paper with Excellent Bibliography}
\\author{Jane Q. Physicist \\\\
Stanford Linear Accelerator Center \\\\
Stanford University, Stanford, California 94309 \\\\
}

\\maketitle

This paper is pretty eclectic, since it cites a buch of diverse
things.  Of course, since it has no content, that is perhaps not so
difficult.

Primarily I want to refer the reader to Brodsky and Wu's recent work on the renormalization 
group\\cite{Brodsky:2012ms}, which is relatively unrelated to the recent
work by Beacom, Bell, and Dodelson \\cite{Beacom:2004yd}.  I should also point out that
the paper by Kreitz and Brooks \\cite{physics/0309027} is being cited here in a
purely self-serving manner.  

There are many papers by Dixon and others that I'd like to point out here
\\cite{hep-th/0501240,hep-th/0412210,JHEP.0412.015}. 
In particular I wish to point out that the work done in
\\cite{JHEP.0412.015} is irrelevant to this paper.  

There are some items in the paper \\cite{Akimov:2012vv} which I would like
to draw your attention to, but it is likely that as above, I may be citing
this for the wrong reasons.


I had better cite the most recent Review of Particle Properties
\\cite{Nakamura:2010zzi}, since that
gets quite a lot of cites, while citing a few papers about stringy topics
\\cite{hep-th/9711200} is also worthwhile.  No paper is complete without a cite to
some extra-dimensional papers like \\cite{hep-ph/9803315,hep-ph/9905221}.
Finally, let me make a mistake citing this paper \\cite{hep-scifi/0101001}.

\\begin{thebibliography}{99}


\\end{thebibliography}


\\end{document}
                  `}
                  </pre>

                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <p>
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <strong>
                      This will warn about the unknown reference to{' '}
                      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <code>hep-scifi/0101001</code> and generate a file
                      containing:
                    </strong>
                  </p>
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <pre className="latex-example">
                    {`
%\\cite{Brodsky:2012ms}
\\bibitem{Brodsky:2012ms}
S.~J.~Brodsky and X.~G.~Wu,
%\`\`Self-Consistency Requirements of the Renormalization Group for Setting the Renormalization Scale,''
Phys. Rev. D \\textbf{86} (2012), 054018
doi:10.1103/PhysRevD.86.054018
[arXiv:1208.0700 [hep-ph]].
%53 citations counted in INSPIRE as of 24 Jun 2020

%\\cite{Beacom:2004yd}
\\bibitem{Beacom:2004yd}
J.~F.~Beacom, N.~F.~Bell and S.~Dodelson,
%\`\`Neutrinoless universe,''
Phys. Rev. Lett. \\textbf{93} (2004), 121302
doi:10.1103/PhysRevLett.93.121302
[arXiv:astro-ph/0404585 [astro-ph]].
%143 citations counted in INSPIRE as of 24 Jun 2020

%\\cite{physics/0309027}
\\bibitem{physics/0309027}
P.~A.~Kreitz and T.~C.~Brooks,
%\`\`Subject access through community partnerships: A Case study,''
Sci. Tech. Libraries \\textbf{24} (2003), 153-172
doi:10.1300/J122v24n01_10
[arXiv:physics/0309027 [physics.hist-ph]].
%4 citations counted in INSPIRE as of 24 Jun 2020

%\\cite{hep-th/0501240}
\\bibitem{hep-th/0501240}
Z.~Bern, L.~J.~Dixon and D.~A.~Kosower,
%\`\`On-shell recurrence relations for one-loop QCD amplitudes,''
Phys. Rev. D \\textbf{71} (2005), 105013
doi:10.1103/PhysRevD.71.105013
[arXiv:hep-th/0501240 [hep-th]].
%226 citations counted in INSPIRE as of 24 Jun 2020

%\\cite{hep-th/0412210}
\\bibitem{hep-th/0412210}
Z.~Bern, L.~J.~Dixon and D.~A.~Kosower,
%\`\`All Next-to-maximally-helicity-violating one-loop gluon amplitudes in N=4 super-Yang-Mills theory,''
Phys. Rev. D \\textbf{72} (2005), 045014
doi:10.1103/PhysRevD.72.045014
[arXiv:hep-th/0412210 [hep-th]].
%136 citations counted in INSPIRE as of 24 Jun 2020

%\\cite{JHEP.0412.015}
\\bibitem{JHEP.0412.015}
L.~J.~Dixon, E.~Glover and V.~V.~Khoze,
%\`\`MHV rules for Higgs plus multi-gluon amplitudes,''
JHEP \\textbf{12} (2004), 015
doi:10.1088/1126-6708/2004/12/015
[arXiv:hep-th/0411092 [hep-th]].
%192 citations counted in INSPIRE as of 24 Jun 2020

%\\cite{Akimov:2012vv}
\\bibitem{Akimov:2012vv}
T.~Alexander \\textit{et al.} [DarkSide],
%\`\`Light Yield in DarkSide-10: A Prototype Two-Phase Argon TPC for Dark Matter Searches,''
Astropart. Phys. \\textbf{49} (2013), 44-51
doi:10.1016/j.astropartphys.2013.08.004
[arXiv:1204.6218 [astro-ph.IM]].
%69 citations counted in INSPIRE as of 24 Jun 2020

%\\cite{Nakamura:2010zzi}
\\bibitem{Nakamura:2010zzi}
K.~Nakamura \\textit{et al.} [Particle Data Group],
%\`\`Review of particle physics,''
J. Phys. G \\textbf{37} (2010), 075021
doi:10.1088/0954-3899/37/7A/075021
%6467 citations counted in INSPIRE as of 24 Jun 2020

%\\cite{hep-th/9711200}
\\bibitem{hep-th/9711200}
J.~M.~Maldacena,
%\`\`The Large N limit of superconformal field theories and supergravity,''
Int. J. Theor. Phys. \\textbf{38} (1999), 1113-1133
doi:10.1023/A:1026654312961
[arXiv:hep-th/9711200 [hep-th]].
%15702 citations counted in INSPIRE as of 24 Jun 2020

%\\cite{hep-ph/9803315}
\\bibitem{hep-ph/9803315}
N.~Arkani-Hamed, S.~Dimopoulos and G.~Dvali,
%\`\`The Hierarchy problem and new dimensions at a millimeter,''
Phys. Lett. B \\textbf{429} (1998), 263-272
doi:10.1016/S0370-2693(98)00466-3
[arXiv:hep-ph/9803315 [hep-ph]].
%6724 citations counted in INSPIRE as of 24 Jun 2020

%\\cite{hep-ph/9905221}
\\bibitem{hep-ph/9905221}
L.~Randall and R.~Sundrum,
%\`\`A Large mass hierarchy from a small extra dimension,''
Phys. Rev. Lett. \\textbf{83} (1999), 3370-3373
doi:10.1103/PhysRevLett.83.3370
[arXiv:hep-ph/9905221 [hep-ph]].
%8745 citations counted in INSPIRE as of 24 Jun 2020
                  `}
                  </pre>
                // @ts-expect-error ts-migrate(2339) FIXME: Property 'Section' does not exist on type 'typeof ... Remove this comment to see the full error message
                </CollapsableForm.Section>
              </CollapsableForm>

              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Row className="pa3 bg-white">
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Col>
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <Row className="mb3">
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Col>
                      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <h3>Instructions</h3>
                      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <p>
                        Write your paper in LaTeX as usual. Cite papers in
                        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        your LaTeX file using the <Cite>...</Cite> macro. The
                        citation keys will be used to retrieve the
                        bibliographic information for the referenced papers
                        from the INSPIRE database. The following types of
                        citation keys are supported:
                      </p>
                      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <ol>
                        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <li>
                          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                          INSPIRE Texkeys, e.g. <Cite>Beacom:2010kk</Cite>
                        </li>
                        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <li>
                          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                          arXiv eprint numbers, e.g. <Cite>1004.3311</Cite> or{' '}
                          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                          <Cite>hep-th/9711200</Cite>
                        </li>
                        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <li>
                          Journal references as present on INSPIRE, with the
                          spaces and dots removed from the title, and dots
                          used as separator between title, volume and
                          page-number/article ID, e.g.{' '}
                          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                          <Cite>PhysRev.D66.010001</Cite>
                        </li>
                        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <li>
                          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                          ADS bibcodes, e.g. <Cite>1999IJTP...38.1113M</Cite>
                        </li>
                        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <li>
                          Report numbers, e.g.{' '}
                          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                          <Cite>CERN-PH-EP-2012-218</Cite>
                        </li>
                      </ol>
                      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <p>
                        You can then upload your LaTeX file here to generate a
                        list of the references in the order they are cited in
                        your paper. You’ll receive an output file that can be
                        used as a BibTeX database or copy/pasted in the
                        bibliography environment depending on the selected
                        format. In case some citations can’t be found or are
                        ambiguous, you’ll receive an error message (but a
                        bibliography will still be generated for the other
                        citations).
                      </p>
                      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <p>Notes:</p>
                      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <ul>
                        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <li>
                          You can cite multiple papers at once by separating
                          the keys with commas, such as{' '}
                          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                          <Cite>Beacom:2010kk, hep-th/9711200</Cite>. Each of
                          them will appear as a separate entry in the
                          bibliography.
                        </li>
                        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <li>
                          The reference will always appear in the same format
                          regardless of how you cite it so if you have a
                          choice, use the eprint number as the identifier
                          rather than a journal publication note for
                          simplicity.
                        </li>
                        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <li>
                          Do not worry about whether you have cited something
                          before, INSPIRE will get the order right based on
                          when you cited the references in the paper.
                        </li>
                        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <li>
                          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                          The only allowed characters in <Cite>...</Cite>{' '}
                          commands are letters, numbers and the following
                          punctuation characters: &ldquo;-&rdquo;,
                          &ldquo;/&rdquo;, &ldquo;:&rdquo;, &ldquo;,&rdquo;
                          and &ldquo;.&rdquo;. If your citation key contains
                          anything else, it will not be processed.
                        </li>
                        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <li>
                          You have to send a LaTeX file containing citations,
                          you can’t send a BibTeX database.
                        </li>
                      </ul>
                    </Col>
                  </Row>
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <Row>
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Col span={24}>
                      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <Form.Item
                        name="fileupload"
                        rules={[
                          {
                            required: true,
                            message: 'Please select a file',
                          },
                        ]}
                      >
                        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Dragger
                          {...uploadProps}
                          accept=".tex"
                          name="file"
                          fileList={fileList}
                        >
                          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                          <p className="ant-upload-drag-icon">
                            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <InboxOutlined />
                          </p>
                          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                          <p className="ant-upload-text">LaTeX file</p>
                          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                          <p className="ant-upload-hint">
                            Click or drag file to this area to upload
                          </p>
                        </Dragger>
                      </Form.Item>
                      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <Form.Item label="Output format" name="format">
                        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <SelectBox options={BIBLIOGRAPHY_GENERATOR_FORMATS} />
                      </Form.Item>
                    </Col>
                  </Row>
                  {citationErrors && (
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Row className="mb3">
                      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <Col span={24}>
                        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        {citationErrors.map((e: any) => <div className="mb2">
                          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                          <Alert
                            type="warning"
                            message={e.get('message')}
                          />
                        </div>)}
                      </Col>
                    </Row>
                  )}
                  {error && (
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Row className="mb3">
                      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <Col span={24}>
                        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <ErrorAlert message={error.get('message')} />
                      </Col>
                    </Row>
                  )}
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <Row type="flex" justify="end">
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Form.Item className="no-margin-bottom">
                      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <Button
                        type="primary"
                        htmlType="submit"
                        disabled={!fileList}
                        loading={loading}
                      >
                        Submit
                      </Button>
                    </Form.Item>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  </>;
}

BibliographyGenerator.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'typeof Map' is not assignable to... Remove this comment to see the full error message
  data: PropTypes.instanceOf(Map),
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'typeof List' is not assignable t... Remove this comment to see the full error message
  citationErrors: PropTypes.instanceOf(List),
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'typeof Map' is not assignable to... Remove this comment to see the full error message
  error: PropTypes.instanceOf(Map),
};

export default BibliographyGenerator;
