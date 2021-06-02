import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from './../actions/logout';
import msToTime from './../utils/msToTime';
import { Button } from 'antd';
import userData from './../userDatabase';

const Controller = ({ auth }) => {
  const dispatch = useDispatch();
  const { user } = auth;
  const [total, setTotal] = useState(user.workedHours);
  const [status, setStatus] = useState('clockedout');
  const [clock, setClock] = useState({ start: null, end: null });

  useEffect(() => {
    let elapsed = clock.end - clock.start;
    // let newTotal = total + elapsed;
    setTotal(total + elapsed);
    const obj = { workedHours: total };
    const edited = { ...user, ...obj };
    // userData.map((el, i) => {
    //   if (el.id === user.id) {
    //     userData.splice(i, 1, edited);
    //   }
    // });
    // console.log(userData);
    console.log('useEff');
  }, [clock.end]);

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem('userId');
    dispatch(logout());
  };

  const clockIn = () => {
    setStatus('clockedin');
    setClock({ ...clock, start: new Date() });
  };
  const clockOut = () => {
    setClock({ ...clock, end: new Date() });
    setStatus('clockedout');
  };

  const takeBreak = () => {
    setStatus('onbreak');
    setClock({ ...clock, end: new Date() });
    console.log(`onbreak`);
  };
  const endBreak = () => {
    setStatus('clockedin');
    setClock({ ...clock, start: new Date() });
  };

  const refresh = () => {
    console.log('refresh');
    clockOut();
    setTimeout(() => {
      clockIn();
    }, 2000);
  };

  return (
    <div className='controllerContainer'>
      <div className='userDetails'>
        <h1>{user.fullName}</h1>
        <p>{user.username}</p>
        <p>{user.department}</p>
      </div>
      <div className='controller'>
        <div className='clockin'>
          <Button
            disabled={status === 'clockedin' || status === 'onbreak'}
            type='primary'
            onClick={clockIn}
            className='controlBtn'
          >
            Clock in
          </Button>
        </div>
        <div className='break'>
          <Button
            disabled={status === 'clockedout'}
            type='dashed'
            className='controlBtn'
            onClick={status === 'onbreak' ? endBreak : takeBreak}
          >
            {status === 'onbreak' ? (
              <span>End Break</span>
            ) : (
              <span>Take Break</span>
            )}
          </Button>
        </div>
        <div className='clockout'>
          <Button
            danger
            disabled={status === 'clockedout' || status === 'onbreak'}
            onClick={clockOut}
            className='controlBtn'
          >
            Clock out
          </Button>
        </div>
        <div className='totalHour'>
          <p>{msToTime(total)}</p>
          <p>Total hours</p>
          <Button type='link' onClick={refresh}>
            Refresh
          </Button>
        </div>
      </div>
      <button onClick={handleLogout}>Logout</button>
      {auth.isAdmin && <Link to='/admin'> admin page</Link>}
    </div>
  );
};

export default Controller;
