import React, { useCallback, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Input, AutoComplete } from 'antd';
import { HistoryOutlined } from '@ant-design/icons';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'clas... Remove this comment to see the full error message
import classNames from 'classnames';
import './SearchBox.scss';
import SearchScopeSelectContainer from '../../containers/SearchScopeSelectContainer';
import { readHistory, persistHistory } from './searchHistory';
import IconText from '../IconText';

let HISTORY_BY_NAMESPACE = {};
readHistory((history: any) => {
  HISTORY_BY_NAMESPACE = history;
});

function SearchBox({
  value,
  placeholder,
  onSearch,
  namespace,
  className
}: any) {
  const [inputValue, setInputValue] = useState(value);
  const [autoCompleteOptions, setAutoCompleteOptions] = useState([]);
  const [shouldSearch, setShouldSearch] = useState(false);

  // always override inputValue when `value` prop is changed
  useEffect(
    () => {
      // set empty string if `value` is null to force clearing text value of internal Input field.
      const valueOrEmpty = value != null ? value : '';
      setInputValue(valueOrEmpty);
    },
    [value]
  );
  const onInputChange = useCallback(
    event => {
      const newValue = event.target.value;
      setInputValue(newValue);
      // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
      const namespaceHistory = HISTORY_BY_NAMESPACE[namespace];
      // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
      if (newValue && HISTORY_BY_NAMESPACE[namespace]) {
        const options = namespaceHistory
          .filter((searchQuery: any) => searchQuery.includes(newValue))
          .map((searchQuery: any) => ({
          value: searchQuery,
          // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
          label: <IconText icon={<HistoryOutlined />} text={searchQuery} />
        }));
        setAutoCompleteOptions(options);
      } else {
        setAutoCompleteOptions([]);
      }
    },
    [namespace]
  );
  const onInputSearch = useCallback(() => {
    setShouldSearch(true);
  }, []);

  const onAutoCompleteSelect = useCallback(selectedValue => {
    setInputValue(selectedValue);
    setShouldSearch(true);
  }, []);

  useEffect(
    () => {
      // FIXME: do it without an effect.
      // HACK: to perform a search only once after `Input.Search.onSearch` or `AutoComplete.onSelect`
      // since `onSelect` is called after `onSearch`, we can't do this `onSearch`.
      if (shouldSearch) {
        onSearch(namespace, inputValue);

        if (inputValue) {
          // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
          HISTORY_BY_NAMESPACE[namespace].add(inputValue.trim());
          persistHistory(HISTORY_BY_NAMESPACE);
        }
        setShouldSearch(false);
        setAutoCompleteOptions([]);
      }
    },
    [shouldSearch] // eslint-disable-line react-hooks/exhaustive-deps
  );

  return (
    // HACK: autocomplete select and scope select interferes with each other
    // when search scope is rendered using `Input.addonBefore` prop, inside autocomplete
    // that's why it's pulled out, and classNames are set manually to make it look like an addon
    <span className={classNames('__SearchBox__ ant-input-group', className)}>
      <span className="ant-input-group-addon">
        <SearchScopeSelectContainer />
      </span>
      <AutoComplete
        autoFocus
        dropdownClassName="header-dropdown"
        className="autocomplete"
        value={inputValue}
        dropdownMatchSelectWidth
        options={autoCompleteOptions}
        onSelect={onAutoCompleteSelect}
      >
        <Input.Search
          data-test-id="search-box-input"
          placeholder={placeholder}
          size="large"
          enterButton
          onChange={onInputChange}
          onSearch={onInputSearch}
        />
      </AutoComplete>
    </span>
  );
}

SearchBox.propTypes = {
  namespace: PropTypes.string.isRequired,
  className: PropTypes.string,
  onSearch: PropTypes.func.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
};

export default SearchBox;
