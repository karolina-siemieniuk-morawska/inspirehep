import React from 'react';
import { Table } from 'antd';

// @ts-expect-error ts-migrate(6142) FIXME: Module './LinkWithEncodedLiteratureQuery' was reso... Remove this comment to see the full error message
import LinkWithEncodedLiteratureQuery from './LinkWithEncodedLiteratureQuery';

const TABLE_COLUMNS = [
  {
    title: 'Search by',
    dataIndex: 'searchBy',
  },
  {
    title: 'Use operators',
    dataIndex: 'useOperators',
  },
  {
    title: 'Example',
    dataIndex: 'example',
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    render: (query: any) => <LinkWithEncodedLiteratureQuery query={query} />,
  },
];

const TABLE_DATA = [
  {
    key: 'a',
    searchBy: 'Author name',
    useOperators: 'a, au, author, name',
    example: 'a witten',
  },
  {
    key: 't',
    searchBy: 'Title',
    useOperators: 't, title, ti',
    example: 't A First Course in String Theory',
  },
  {
    key: 'cn',
    searchBy: 'Collaboration',
    useOperators: 'cn, collaboration',
    example: 'cn babar',
  },
  {
    key: 'ac',
    searchBy: 'Number of authors',
    useOperators: 'ac, authorcount',
    example: 'ac 1->10',
  },
  {
    key: 'topcite',
    searchBy: 'Citation number',
    useOperators: 'topcite, topcit, cited',
    example: 'topcite 1000+',
  },
];

function SpiresExamples() {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Table
      bordered
      size="small"
      dataSource={TABLE_DATA}
      columns={TABLE_COLUMNS}
      pagination={false}
    />
  );
}

export default SpiresExamples;
