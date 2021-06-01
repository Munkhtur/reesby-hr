import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from './../actions/logout'
import msToTime from './../utils/msToTime'



const Home = () => {
    const [total, setTotal] = useState(1.08e+8)
    const auth = useSelector(state => state.auth)
    const { user } = auth
    const dispatch = useDispatch()
    const handleLogout = (e) => {
        e.preventDefault()
        localStorage.removeItem('userId')
        dispatch(logout())
    }
    let start = 0



    const endTimer =()=>{
        end = new Date()
        elapsed = end - start
        const newTotal = total + elapsed
        setTotal(newTotal)
   
    }

    const clockIn=()=>{
        start = new Date()
        console.log(start, "start")
    }
    const clockOut=()=>{
        const end = new Date()
        console.log(end, 'end')

        const elapsed = end - start
        console.log(elapsed, "elapsed")
        const newTotal = total + elapsed
        setTotal(newTotal)
        console.log(total)
        console.log(msToTime(elapsed))
       
    }

    const refresh =()=>{
        clockOut()
        clockIn()
    
    }
    
    return (
        <div className='contentHome'>
            <div className="userDetails">
            {user.fullName}
                <p>{user.username}</p>
                <p>{user.department}</p>

            </div>
            <div className="controller">
                <div className="clockin">
                    <button onClick={clockIn} className="controlBtn">Clock in</button>
                </div>
                <div className="break">
                    <button className="controlBtn">Take break</button>
                </div>
                <div className="clockout">
                    <button onClick={clockOut} className="controlBtn">Clock out</button>
                </div>
                <div className="totalHour">
                    <p>{msToTime(total)}</p>
                    <p>Total hours</p>
                    <a onClick={refresh} href="#">Refresh</a>
             
                </div>
            </div>
            <button onClick={handleLogout}>Logout</button>
            {auth.isAdmin && <Link to="/admin"> admin page</Link>}
        </div>
    )
}

export default Home
