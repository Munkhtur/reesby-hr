import React from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import LoginPage from './components/Login';
import SignupPage from './components/Signup';
import HomePage from './components/Home';
import { useSelector, useDispatch } from 'react-redux';
import PendingPage from './components/PendingPage';
// import AdminPage from './components/AdminPage';
import AdminPage from './components/AdminPage';
import UserEdit from './components/UserEdit';
import userData from './userDatabase';
import { login } from './actions/login';
import { getEvents } from './actions/getEvents';
import WelcomePage from './components/WelcomePage';
import jwt_decode from 'jwt-decode';
import DefaulLayout from './components/Layouts/DefualtLayout';
import DashboardLayout from './components/Layouts/DashboardLayout';

function App() {
  const history = useHistory();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth);
  console.log(user.user, 'app.js');
  // if (localStorage.token && !user.isAuthenticated) {
  //   const details = jwt_decode(localStorage.token);
  //   console.log(details);
  //   dispatch(login(details));
  //   dispatch(getEvents());
  // }

  return (
    <>
      <Switch>
        <Route path={['/admin', '/admin/user-edit/:id']}>
          <DashboardLayout>
            <Switch>
              <Route exact path='/admin'>
                {user.user && !user.user.is_superuser ? (
                  <Redirect to='/dashboard' />
                ) : (
                  <AdminPage />
                )}
              </Route>
              <Route exact path='/admin/user-edit/:id'>
                {user.user && !user.user.is_superuser ? (
                  <Redirect to='/dashboard' />
                ) : (
                  <UserEdit />
                )}
              </Route>
              {/* <Route exact path='/admin/user-edit/:id' component={<UserEdit />}></Route> */}
            </Switch>
          </DashboardLayout>
        </Route>
        <Route path={['/signup', '/welcome', '/dashboard', '/pending', '/']}>
          <DefaulLayout>
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
                {user.user && user.user.is_active ? (
                  <HomePage />
                ) : user.user && !user.user.is_active ? (
                  <Redirect to='/pending' />
                ) : (
                  <Redirect to='/' />
                )}
              </Route>
              <Route path='/pending'>
                <PendingPage />
              </Route>

              <Route path='/welcome'>
                <WelcomePage />
              </Route>
            </Switch>
          </DefaulLayout>
        </Route>
      </Switch>
    </>
  );
}
export default App;
