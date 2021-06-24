import React from 'react';
import { Table, Space, Tag, Button } from 'antd';

const AdminPage = () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Department',
      dataIndex: 'department',
      key: 'department',
    },
    {
      title: '',
      dataIndex: '',
      key: 'x',
      render: () => (
        <div className='action'>
          <Button type='primary'>Approve</Button>{' '}
          <Button danger='true'>Reject</Button>{' '}
        </div>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      name: 'John Brown',
      email: 'john@mail.com',
      department: 'IOT',
      startdate: '2020-03-01',
      enddate: null,
      type: 'EMPLOYEE',
    },
    {
      key: '2',
      name: 'Jim Green',
      email: 'jim@mail.com',

      department: 'ACCOUNTING',
      startdate: '2020-03-01',
      enddate: null,
      type: 'SCHOLARSHIP',
    },
    {
      key: '3',
      name: 'Joe Black',
      email: 'joe@mail.com',

      department: 'CMS',
      startdate: '2020-03-01',
      enddate: '2020-03-01',
      type: 'INTERSHIP',
    },
  ];
  return <Table columns={columns} dataSource={data} pagination={false} />;
};

export default AdminPage;
