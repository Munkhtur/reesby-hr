import React from 'react';
import { useSelector } from 'react-redux';

import Controller from './Controller';
import CalendarComponent from './CalendarComponent';

const Home = () => {
  const auth = useSelector((state) => state.auth);

  return (
    <div className='contentHome'>
      <Controller auth={auth} />
      <CalendarComponent auth={auth} />
    </div>
  );
};

export default Home;
