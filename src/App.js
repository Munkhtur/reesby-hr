import React from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import LoginPage from './components/Login';
import SignupPage from './components/Signup';
import HomePage from './components/Home';
import { useSelector, useDispatch } from 'react-redux';
import PendingPage from './components/PendingPage';
import AdminPage from './components/AdminPage';
import UserEdit from './components/UserEdit';
import userData from './userDatabase';
import { login } from './actions/login';
import WelcomePage from './components/WelcomePage';

function App() {
  const history = useHistory();
  const dispatch = useDispatch();
  // const location = useLocation()
  // useEffect(() => {
  //     console.log(location.pathname)
  //     history.push(location.pathname)

  // }, [location.pathname])

  const localUser = localStorage.getItem('userId');

  const user = useSelector((state) => state.auth);
  if (localUser !== null && !user.isAuthenticated) {
    const validUser = userData.filter((user) => user.id === localUser)[0];
    dispatch(login(validUser));
  }

  return (
    <>
      <div className='topBar'> Reesby HR</div>
      <div className='main'>
        <Switch>
          <Route exact path='/'>
            {user.isAuthenticated ? (
              <Redirect to='/dashboard' />
            ) : (
              <LoginPage />
            )}
          </Route>
          <Route path='/signup'>
            {user.isAuthenticated ? (
              <Redirect to='/dashboard' />
            ) : (
              <SignupPage />
            )}
          </Route>
          <Route path='/dashboard'>
            {user.isAuthenticated ? <HomePage /> : <Redirect to='/' />}
          </Route>
          <Route path='/pending'>
            <PendingPage />
          </Route>
          <Route exact path='/admin'>
            {!user.isAdmin ? <Redirect to='/dashboard' /> : <AdminPage />}
          </Route>
          <Route exact path='/admin/user-edit/:id'>
            {!user.isAdmin ? <Redirect to='/dashboard' /> : <UserEdit />}
          </Route>
          <Route path='/welcome'>
            <WelcomePage />
          </Route>
          {/* <Route exact path='/admin/user-edit/:id' component={<UserEdit />}></Route> */}
        </Switch>
      </div>
    </>
  );
}
export default App;
