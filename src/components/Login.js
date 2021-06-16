import React, { useState } from 'react';
import { Link, Redirect, useHistory, useLocation } from 'react-router-dom';
import { login } from './../actions/login';
import { setError, clearError } from './../actions/errorsAction';
import { useDispatch, useSelector } from 'react-redux';
import usersData from '../userDatabase';

const Login = () => {
  // const location = useLocation()
  // console.log(location)

  const history = useHistory();
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.error);
  const [details, setDetails] = useState({
    email: 'admin@mail.com',
    password: 'admin',
  });

  const onLogin = (e) => {
    e.preventDefault();
    // const validUser = usersData.filter(user => user.username === details.username)[0]

    // if (!validUser || validUser.password !== details.password) {
    //     setDetails({ ...details, username: '', password: '' })
    //     dispatch(setError('Username or password is invalid'))
    //     return
    // }
    // if (validUser && validUser.password === details.password && !validUser.approved) {
    //     history.push('/pending')
    //     return
    // }
    dispatch(login(details, history));

    // localStorage.setItem('userId', validUser.id);
  };

  return (
    <div className='formDiv'>
      <form onSubmit={onLogin}>
        <h2 className='heading'>Login</h2>

        <div className='form-group'>
          <input
            type='email'
            name='name'
            placeholder='Email'
            value={details.email}
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            name='password'
            placeholder='Password'
            value={details.password}
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
          />
        </div>
        <div className='form-group submitBtn'>
          <input type='submit' value='Login' />
        </div>
        {errors && <p className='errorMessage'>{errors.msg}</p>}
        <Link to='/signup'> Create an account</Link>
      </form>
    </div>
  );
};

export default Login;
