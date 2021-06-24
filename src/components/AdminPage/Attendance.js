import React from 'react';
import AttendanceFilter from './AttendanceFilter';
import { Table, Space, Tag, Button } from 'antd';
import { getAttendance } from './../../actions/getAttendance';
import { useDispatch, useSelector } from 'react-redux';

const Attendance = () => {
  const dispatch = useDispatch();
  dispatch(getAttendance());
  const attendanceData = useSelector((state) => state.attendance);

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
      title: 'Clockin Time',
      dataIndex: 'clockin',
      key: 'clockin',
    },
    {
      title: 'Clockout Time',
      dataIndex: 'clockout',
      key: 'clockout',
    },
    {
      title: 'Work Hours',
      dataIndex: 'workhours',
      key: 'workhours',
    },
    {
      title: 'Break Hours',
      dataIndex: 'breakhours',
      key: 'breakhours',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
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

  const FilterTable = () => {
    return (
      <form>
        <input type='text'></input>
        <input type='submit'></input>
      </form>
    );
  };
  return (
    <>
      {/* <form>
        <input type='text'></input>
        <input type='submit'></input>
      </form> */}
      <AttendanceFilter />
      <Table columns={columns} dataSource={attendanceData} pagination={false} />
    </>
  );
};

export default Attendance;
