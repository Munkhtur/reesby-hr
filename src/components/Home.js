import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from './../actions/logout'
import userData from './../userDatabase'



const Home = () => {

    const auth = useSelector(state => state.auth)
    const { user } = auth
    const dispatch = useDispatch()
    const handleLogout = (e) => {
        e.preventDefault()
        localStorage.removeItem('userId')
        dispatch(logout())
    }
    
    return (
        <div>
            Welcome, {user.name}
            <p>{user.email}</p>
            <button onClick={handleLogout}>Logout</button>
            {auth.isAdmin && <Link to="/admin"> admin page</Link>}
        </div>
    )
}

export default Home
