import React from 'react';
import { Table, Space, Tag, Input } from 'antd';

const EmployeeList = () => {
  const { Search } = Input;
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
      title: 'Start date',
      dataIndex: 'startdate',
      key: 'startdate',
    },
    {
      title: 'End date',
      dataIndex: 'enddate',
      key: 'enddate',
      render: (date) => (date ? date : 'null'),
    },
    {
      title: 'Employee Type',
      dataIndex: 'type',
      key: 'type',
    },
  ];

  const data = [
    {
      key: '1',
      name: 'John Brown',
      department: 'IOT',
      startdate: '2020-03-01',
      enddate: null,
      type: 'EMPLOYEE',
    },
    {
      key: '2',
      name: 'Jim Green',
      department: 'ACCOUNTING',
      startdate: '2020-03-01',
      enddate: null,
      type: 'SCHOLARSHIP',
    },
    {
      key: '3',
      name: 'Joe Black',
      department: 'CMS',
      startdate: '2020-03-01',
      enddate: '2020-03-01',
      type: 'INTERSHIP',
    },
  ];
  return (
    <>
      <div className='contentHeader'>
        <Search
          placeholder='Enter email or name'
          size='large'
          style={{ width: 200 }}
          // onSearch={onSearch}
        />
      </div>
      <Table columns={columns} dataSource={data} pagination={false} />
    </>
  );
};

export default EmployeeList;
