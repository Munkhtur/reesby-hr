import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from './../actions/logout';
import { Button } from 'antd';
import decTime from './../utils/decTime';
import { updateUser } from './../actions/updateUser';

const Controller = ({ auth }) => {
  const dispatch = useDispatch();
  const { user } = auth;
  const [total, setTotal] = useState(user.total_hours);
  const [status, setStatus] = useState('clockedout');
  const [clock, setClock] = useState({ start: null, end: null });

  useEffect(() => {
    let elapsed = clock.end - clock.start;
    // let newTotal = total + elapsed;
    console.log(Math.round((total + elapsed / 3600000) * 100) / 100);

    setTotal(Math.round((total + elapsed / 3600000) * 100) / 100);
    const obj = { total_hours: total };
    const edited = { ...user, ...obj };
    // dispatch(updateUser(edited));
  }, [clock.end]);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout(total, user));
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
  };
  const endBreak = () => {
    setStatus('clockedin');
    setClock({ ...clock, start: new Date() });
  };

  const refresh = () => {
    const now = new Date();
    const elapsed = now - clock.start;
    setClock({ ...clock, start: new Date() });
    setTotal(Math.round((total + elapsed / 3600000) * 100) / 100);
  };

  return (
    <div className='controllerContainer'>
      <div className='controlHeader'>
        <div className='userDetails'>
          <h1>{user.full_name}</h1>
          <p>{user.email}</p>
          <p>{user.department}</p>
        </div>
        <div className='userDetailRight'>
          {auth.user.is_superuser && (
            <Button>
              <Link to='/admin'> admin page</Link>
            </Button>
          )}
          <Button onClick={(e) => handleLogout(e)}>Logout</Button>
        </div>
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
          <p className='clock'>{decTime(total)}</p>
          <p>Total hours</p>
          <Button disabled={status === 'onbreak'} type='link' onClick={refresh}>
            Refresh
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Controller;
