import React from 'react';
import { DatePicker, Select, Space, Button } from 'antd';

const AttendanceFilter = () => {
  const { Option } = Select;
  return (
    <div className='contentHeader'>
      From:
      <DatePicker
        dateRender={(current) => {
          return <div className='ant-picker-cell-inner'>{current.date()}</div>;
        }}
      />
      To:
      <DatePicker
        dateRender={(current) => {
          return <div className='ant-picker-cell-inner'>{current.date()}</div>;
        }}
      />
      <label>Department:</label>
      <Select
        showSearch
        style={{ width: 150 }}
        placeholder='Select a department'
        optionFilterProp='children'
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        <Option value='Accounting'>ACCOUNTING</Option>
        <Option value='HR'>HR</Option>
        <Option value='Marketing'>MARKETING</Option>
        <Option value='IOT'>IOT</Option>
        <Option value='CRM'>CRM</Option>
        <Option value='Datascience'>DATASCIENCE</Option>
        <Option value='Cybersecurity'>CYBERSECURITY</Option>
      </Select>
      <Button className='vewButton'>View</Button>
    </div>
  );
};

export default AttendanceFilter;
