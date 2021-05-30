import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect ,useLocation, useHistory} from 'react-router-dom'
import LoginPage from './components/Login'
import SignupPage from './components/Signup'
import HomePage from './components/Home'
import { useSelector , useDispatch} from 'react-redux'
import PendingPage from './components/PendingPage';
import AdminPage from './components/AdminPage';
import UserEdit from './components/UserEdit';
import userData from './userDatabase'
import {login} from './actions/login'

function App() {
    const history = useHistory()
    const  dispatch = useDispatch()
    // const location = useLocation()
    // useEffect(() => {
    //     console.log(location.pathname)
    //     history.push(location.pathname)
       
    // }, [location.pathname])

    const localUser = localStorage.getItem('userId')
    if(localUser === !null){
        const validUser = userData.filter(user => user.id ===localUser)[0]
        dispatch(login(validUser))
    }

    const user = useSelector(state => state.auth)
    return (
        <>
            <div className="topBar"> Reesby HR
            </div>
            <div className="main">

                <Switch>
                    <Route exact path='/'>
                        {user.isAuthenticated ? <Redirect to="/dashboard" /> : <LoginPage />}
                    </Route>
                    <Route path='/signup'>
                        {user.isAuthenticated ? <Redirect to="/dashboard" /> : <SignupPage />}
                    </Route>
                    <Route path='/dashboard'>
                        {user.isAuthenticated ? <HomePage /> : <Redirect to='/' />}
                    </Route>
                    <Route path='/pending'>
                        <PendingPage />
                    </Route>
                    <Route exact path='/admin'>
                        {!user.isAdmin ? <Redirect to="/dashboard" /> : <AdminPage />}
                    </Route>
                    <Route exact path='/admin/user-edit/:id'>
                        {!user.isAdmin ? <Redirect to="/dashboard" /> : <UserEdit />}
                    </Route>
                    {/* <Route exact path='/admin/user-edit/:id' component={<UserEdit />}></Route> */}
                </Switch>
            </div>
        </>
    );
}
export default App;