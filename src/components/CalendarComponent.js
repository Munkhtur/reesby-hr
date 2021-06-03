import React, { useState } from 'react';
import { Calendar, Button, Modal } from 'antd';
import moment from 'moment';

const CalendarComponent = ({ auth }) => {
  const { user } = auth;
  let enabled = true;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalInput, setModalInput] = useState('');
  const [inputDate, setInputDate] = useState(null);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);

    if (modalInput !== '') {
      const newEvent = {
        date: inputDate,
        type: 'success',
        content: modalInput,
      };
      user.events.push(newEvent);
      setInputDate(null);
      setModalInput('');
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setInputDate(null);
    setModalInput('');
  };

  const getListData = (value) => {
    return user.events.filter(
      (event) =>
        event.date.year() === value.year() &&
        event.date.month() === value.month() &&
        event.date.date() === value.date()
    );
  };
  function dateCellRender(value) {
    const listData = getListData(value);
    return (
      <ul className='events'>
        {listData.map((item) => (
          <li key={item.content}>
            {/* <Badge status={item.type} text={item.content} /> */}
            <small className='calendarEvent'>
              {'-'} {item.content}
            </small>
          </li>
        ))}
      </ul>
    );
  }

  function onSelectLocal(v) {
    if (enabled) {
      setInputDate(v);
      showModal();
    }
  }

  return (
    <div className='calendarContainer'>
      <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <input
          type='text'
          value={modalInput}
          placeholder='Enter event'
          onChange={(e) => {
            setModalInput(e.target.value);
          }}
        ></input>
      </Modal>
      <Calendar
        onSelect={onSelectLocal}
        dateCellRender={dateCellRender}
        headerRender={({ value, type, onChange, onTypeChange }) => {
          const current = value.clone();

          return (
            <div className='calendarHeader'>
              <div>
                <h1>
                  {current.localeData().monthsShort(current) +
                    ' ' +
                    value.year()}
                </h1>
              </div>
              <div>
                <Button
                  onClick={(e) => {
                    current.month(current.month() - 1);
                    enabled = false;
                    onChange(current);
                    enabled = true;
                  }}
                >
                  <i className='fas fa-chevron-left'></i>
                </Button>
                <Button
                  onClick={(e) => {
                    current.month(current.month() + 1);
                    enabled = false;
                    onChange(current);
                    enabled = true;
                  }}
                >
                  <i className='fas fa-chevron-right'></i>
                </Button>
                <Button
                  onClick={() => {
                    enabled = false;
                    onChange(moment(new Date()));
                    enabled = true;
                  }}
                >
                  Today
                </Button>
              </div>
            </div>
          );
        }}
      />
    </div>
  );
};

export default CalendarComponent;
