import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { login } from './../actions/login'
import { setError, clearError } from './../actions/errorsAction'
import { useDispatch, useSelector } from 'react-redux'
import usersData from '../userDatabase'

const Login = () => {
    const dispatch = useDispatch()
    const errors = useSelector(state => state.error)
    const [details, setDetails] = useState({
        username: '',
        password: ''
    })

    const onLogin = (e) => {
        e.preventDefault()
        const validUser = usersData.filter(user => user.name === details.username)[0]
        if (!validUser || validUser.password !== details.password) {
            setDetails({ ...details, username: '', password: '' })
            dispatch(setError('Username or password is invalid'))
            return
        }
        dispatch(login(validUser))
        dispatch(clearError())
    }

    return (
        <form onSubmit={onLogin}>
            <h2>Login</h2>

            <div className="form-group">
                <input type="text" name='name' placeholder="Username" value={details.username} onChange={e => setDetails({ ...details, username: e.target.value })} />
            </div>
            <div className="form-group">
                <input type="password" name='password' placeholder="Password" value={details.password} onChange={e => setDetails({ ...details, password: e.target.value })} />
            </div>
            <div className="form-group submitBtn">
                <input type="submit" value="Login" />
            </div>
            {errors && <p className="errorMessage">{errors.msg}</p>}
            <Link to="/signup"> Create an account</Link>
        </form>
    )
}

export default Login
