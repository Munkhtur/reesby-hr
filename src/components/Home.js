import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from './../actions/logout'
import userData from './../userDatabase'


const Home = () => {
    console.log(userData)
    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch()
    const handleLogout = (e) => {
        e.preventDefault()
        console.log('logout')
        dispatch(logout())
    }
    return (
        <div>
            Welcome, {user.name}
            <p>{user.email}</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Home
