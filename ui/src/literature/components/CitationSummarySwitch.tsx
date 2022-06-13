import React, { useEffect } from 'react';
import { BarChartOutlined } from '@ant-design/icons';
import { Switch, Tooltip } from 'antd';
import PropTypes from 'prop-types';

// @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
const CHART_ICON = <BarChartOutlined />;

function CitationSummarySwitch({
  checked,
  onCitationSummaryUserPreferenceChange,
  onChange,
  citationSummaryEnablingPreference
}: any) {
  useEffect(
    () => {
      onCitationSummaryUserPreferenceChange(citationSummaryEnablingPreference);
    },
    [onCitationSummaryUserPreferenceChange, citationSummaryEnablingPreference]
  );
  const actionName = checked ? 'Hide' : 'Show';
  const tooltipHelp = `${actionName} Citation Summary`;
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Tooltip title={tooltipHelp}>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Switch
        checkedChildren={CHART_ICON}
        unCheckedChildren={CHART_ICON}
        checked={checked}
        onChange={onChange}
      />
    </Tooltip>
  );
}

CitationSummarySwitch.propTypes = {
  checked: PropTypes.bool.isRequired,
  onCitationSummaryUserPreferenceChange: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  citationSummaryEnablingPreference: PropTypes.bool.isRequired,
};

export default CitationSummarySwitch;
