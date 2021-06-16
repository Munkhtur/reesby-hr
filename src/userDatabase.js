import moment from 'moment';

const users = [
  {
    id: '1',
    fullName: 'Admin',
    username: 'admin@mail.com',
    password: 'admin123',
    approved: true,
    department: 'HR',
    workedHours: 30,
    events: [
      {
        date: moment('06-01-21 11:40 PM', 'MM-DD-YYYY hh:mm A'),
        type: 'warning',
        content: 'This is warning event.', 
      },
      {
        date: moment('06-05-21 11:40 PM', 'MM-DD-YYYY hh:mm A'),
        type: 'success',
        content: 'This is usual event.',
      },
    ],
  },
  {
    id: '2',
    fullName: 'User One',
    username: 'user1@mail.com',
    password: 'user1123',
    approved: true,
    department: 'IOT',
    workedHours: 0,
    events: [
      {
        date: moment('01-06-20 11:40 PM', 'MM-DD-YYYY hh:mm A'),
        type: 'warning',
        content: 'This is warning event.',
      },
      {
        date: moment('04-06-20 11:40 PM', 'MM-DD-YYYY hh:mm A'),
        type: 'success',
        content: 'This is usual event.',
      },
    ],
  },
  {
    id: '3',
    fullName: 'test user',
    username: 'test@mail.com',
    password: 'test123',
    approved: false,
    department: 'Accounting',
    workedHours: 0,
    events: [
      {
        date: moment('01-06-20 11:40 PM', 'MM-DD-YYYY hh:mm A'),
        type: 'warning',
        content: 'This is warning event.',
      },
      {
        date: moment('06-06-20 11:40 PM', 'MM-DD-YYYY hh:mm A'),
        type: 'success',
        content: 'This is usual event.',
      },
    ],
  },
];

export default users;
