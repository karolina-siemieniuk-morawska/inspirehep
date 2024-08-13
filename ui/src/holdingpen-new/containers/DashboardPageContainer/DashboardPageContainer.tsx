/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import classNames from 'classnames';
import { Card, Input, Select, Tabs } from 'antd';
import { Link } from 'react-router-dom';
import { push } from 'connected-react-router';
import { Action, ActionCreator } from 'redux';
import { connect, RootStateOrAny } from 'react-redux';
import { List, Map } from 'immutable';

import './DashboardPageContainer.less';
import Breadcrumbs from '../../components/Breadcrumbs';
import { HOLDINGPEN_SEARCH_NEW } from '../../../common/routes';
import {
  fetchSearchResults,
  searchQueryReset,
  searchQueryUpdate,
} from '../../../actions/holdingpen';
import EmptyOrChildren from '../../../common/components/EmptyOrChildren';
import LoadingOrChildren from '../../../common/components/LoadingOrChildren';
import { COLLECTIONS, getIcon } from '../../utils/utils';

interface DashboardPageContainerProps {
  dispatch: ActionCreator<Action>;
  facets: Map<string, any>;
  loading: boolean;
}

const TEXT_CENTER: Record<string | number, string & {}> = {
  textAlign: 'center',
};

const { Option } = Select;

const { Search } = Input;

const selectBefore = (
  <Select
    defaultValue={Object.values(COLLECTIONS)[0]}
    className="select-before"
  >
    {Object.values(COLLECTIONS)?.map((item: any) => {
      return (
        <Option value={item} key={item}>
          {item}
        </Option>
      );
    })}
  </Select>
);

const DashboardPageContainer: React.FC<DashboardPageContainerProps> = ({
  dispatch,
  facets,
  loading,
}) => {
  useEffect(() => {
    dispatch(searchQueryReset());
    dispatch(fetchSearchResults());
  }, []);

  const aggregations = facets?.getIn([
    '_filter_workflow_type',
    'workflow_type',
  ]);
  const workflowTypes = (aggregations as Map<string, any>)?.get('buckets');

  const tabItems = [
    {
      label: <h3>Collections</h3>,
      key: '1',
      children: (
        <>
          <Link
            to={HOLDINGPEN_SEARCH_NEW}
            className="db w-100 tc f5 mt4"
            onClick={() => {
              dispatch(searchQueryReset());
            }}
          >
            View all
          </Link>
          <div className="cards-container mt4">
            {workflowTypes?.map((type: Map<string, any>) => {
              return (
                <Card
                  title={
                    <div>
                      <p>{COLLECTIONS[type?.get('key')]}</p>
                      <p className={classNames('f2 mb0 black')}>
                        {type?.get('doc_count')}
                      </p>
                      <Link
                        to={HOLDINGPEN_SEARCH_NEW}
                        className="normal f6"
                        onClick={() => {
                          dispatch(
                            searchQueryUpdate({
                              page: 1,
                              size: 10,
                              workflow_type: type?.get('key'),
                            })
                          );
                        }}
                      >
                        View all
                      </Link>
                    </div>
                  }
                  headStyle={TEXT_CENTER}
                  className={COLLECTIONS[type?.get('key')]
                    .toLowerCase()
                    .replace(/ /g, '-')}
                  key={type?.get('key')}
                >
                  {(type?.getIn(['status', 'buckets']) as List<any>)?.map(
                    (status: any) => (
                      <a
                        href={HOLDINGPEN_SEARCH_NEW}
                        key={status?.get('key')}
                        onClick={() => {
                          dispatch(
                            searchQueryUpdate({
                              page: 1,
                              size: 10,
                              workflow_type: type?.get('key'),
                              status: status?.get('key'),
                            })
                          );
                        }}
                      >
                        <div
                          className={classNames(
                            'flex justify-between',
                            status?.get('key')?.toLowerCase()
                          )}
                        >
                          <p className="ttc">
                            {getIcon(status?.get('key'))}
                            {status?.get('key')}
                          </p>
                          <span className="b">{status?.get('doc_count')}</span>
                        </div>
                      </a>
                    )
                  )}
                </Card>
              );
            })}
          </div>
        </>
      ),
    },
  ];

  return (
    <div
      className="__DashboardPageContainer__"
      data-testid="holdingpen-dashboard-page"
    >
      <Breadcrumbs title1="Dashboard" href1="" dashboardPage />
      <div className="inner-container mt4">
        <h2 className="f2 center">Search Holdingpen</h2>
        <div className="search-container">
          <Search
            addonBefore={selectBefore}
            enterButton
            disabled
            onPressEnter={() => {
              dispatch(push(HOLDINGPEN_SEARCH_NEW));
            }}
            onSearch={() => {
              dispatch(push(HOLDINGPEN_SEARCH_NEW));
            }}
          />
        </div>
        <h2 className="f2 center mb4">Overview</h2>
        <EmptyOrChildren data={facets} title="0 Results">
          <LoadingOrChildren loading={loading}>
            <Tabs centered items={tabItems} />
          </LoadingOrChildren>
        </EmptyOrChildren>
      </div>
    </div>
  );
};

const stateToProps = (state: RootStateOrAny) => ({
  facets: state.holdingpen.get('facets'),
  loading: state.holdingpen.get('loading'),
});

export default connect(stateToProps)(DashboardPageContainer);
