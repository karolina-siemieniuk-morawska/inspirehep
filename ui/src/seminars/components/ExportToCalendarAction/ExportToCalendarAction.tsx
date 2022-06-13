import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import { Button, Menu } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';

import ListItemAction from '../../../common/components/ListItemAction';
import IconText from '../../../common/components/IconText';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../../common/components/DropdownMenu' w... Remove this comment to see the full error message
import DropdownMenu from '../../../common/components/DropdownMenu';
// @ts-expect-error ts-migrate(2691) FIXME: An import path cannot end with a '.tsx' extension.... Remove this comment to see the full error message
import ExternalLink from '../../../common/components/ExternalLink.tsx';
import getIcsFileContent from './ics';
import { downloadTextAsFile } from '../../../common/utils';
import getGoogleCalendarUrl from './google';

// @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
const TITLE = <IconText icon={<CalendarOutlined />} text="export" />;

function ExportToCalendarAction({
  seminar
}: any) {
  const onDownloadClick = useCallback(
    () => {
      const fileContent = getIcsFileContent(seminar);
      const controlNumber = seminar.get('control_number');
      downloadTextAsFile(
        fileContent,
        `INSPIRE-Seminar-${controlNumber}.ics`,
        'text/calendar'
      );
    },
    [seminar]
  );
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <ListItemAction>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <DropdownMenu title={<Button>{TITLE}</Button>}>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Menu.Item onClick={onDownloadClick}>Download .ics</Menu.Item>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Menu.Item>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <ExternalLink href={getGoogleCalendarUrl(seminar)}>
            Google Calendar
          </ExternalLink>
        </Menu.Item>
      </DropdownMenu>
    </ListItemAction>
  );
}

ExportToCalendarAction.propTypes = {
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'typeof Map' is not assignable to... Remove this comment to see the full error message
  seminar: PropTypes.instanceOf(Map).isRequired,
};

export default ExportToCalendarAction;
