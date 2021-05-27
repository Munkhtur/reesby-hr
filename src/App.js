import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import LoginPage from './components/Login'
import SignupPage from './components/Signup'
import HomePage from './components/Home'
import { useSelector } from 'react-redux'

function App() {
    const user = useSelector(state => state.auth)
    return (
        <Router>
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
                </Switch>
            </div>
        </Router>
    );
}
export default App;