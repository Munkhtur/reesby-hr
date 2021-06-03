import React from 'react';
import { Calendar, Badge, Button, Tag } from 'antd';
import moment from 'moment';

const CalendarComponent = ({ auth }) => {
  const { user } = auth;
  let enabled = true;

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
      const title = prompt('Enter event title');

      if (title !== '' && title !== null) {
        const newEvent = { date: v, type: 'success', content: title };
        user.events.push(newEvent);
      }
    }
  }

  return (
    <div className='calendarContainer'>
      <Calendar
        onSelect={onSelectLocal}
        dateCellRender={dateCellRender}
        headerRender={({ value, type, onChange, onTypeChange }) => {
          const current = value.clone();
          const onChangeLocal = (e) => {
            current.month(current.month() - 1);
            onChange(current);
          };

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
