import React, { useCallback, useState } from 'react';
import { Radio, Button } from 'antd';

// @ts-expect-error ts-migrate(6142) FIXME: Module './SpiresExamples' was resolved to '/Users/... Remove this comment to see the full error message
import SpiresExamples from './SpiresExamples';
// @ts-expect-error ts-migrate(6142) FIXME: Module './FreetextExamples' was resolved to '/User... Remove this comment to see the full error message
import FreetextExamples from './FreetextExamples';
// @ts-expect-error ts-migrate(2691) FIXME: An import path cannot end with a '.tsx' extension.... Remove this comment to see the full error message
import ExternalLink from '../../common/components/ExternalLink.tsx';
import { PAPER_SEARCH_URL } from '../../common/constants';

const SPIRES_RADIO = 'spires';
export const FREETEXT_RADIO = 'freetext';

function HowToSearch() {
  const [selectedRadio, setSelectedRadio] = useState(SPIRES_RADIO);
  const onRadioChange = useCallback(event => {
    setSelectedRadio(event.target.value);
  }, []);

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div className="mb3 tc">
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Radio.Group value={selectedRadio} onChange={onRadioChange}>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Radio.Button value={SPIRES_RADIO}>SPIRES</Radio.Button>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Radio.Button value={FREETEXT_RADIO}>free text</Radio.Button>
        </Radio.Group>
      </div>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div>
        {selectedRadio === SPIRES_RADIO ? (
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <SpiresExamples />
        ) : (
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <FreetextExamples />
        )}
      </div>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div className="tc">
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <ExternalLink
          as={Button}
          href={PAPER_SEARCH_URL}
          type="primary"
          className="mt3"
        >
          Learn more
        </ExternalLink>
      </div>
    </div>
  );
}

export default HowToSearch;
