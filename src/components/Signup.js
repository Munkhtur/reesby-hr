import React from 'react'
import useForm from './../useForm'
import validate from './../validateInfo'
import userData from './../userDatabase'
import { useHistory } from 'react-router-dom'
import {v4 as uuid} from 'uuid'

const Signup = () => {
    const history = useHistory()
    const { handleChange, details, errors, setErrors } = useForm()

    const handleSubmit = e => {
        e.preventDefault()
        const newErrors = validate(details)
        setErrors(newErrors)
        console.log(newErrors)

        if (Object.keys(newErrors).length === 0) {
            const newUser = {
                id: uuid(),
                email: details.email,
                password: details.password,
                approved: false
            }
            console.log(newUser)
            userData.push(newUser)
            history.push('/pending')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="heading">Create your account</h2>

            <div className="form-group">
                <input type="email" name='email' placeholder="Email" value={details.email} onChange={handleChange} />
                {errors.email && <p>{errors.email}</p>}
            </div>
            <div className="form-group">
                <input type="password" name='password' placeholder="Password" value={details.password} onChange={handleChange} />
                {errors.password && <p>{errors.password}</p>}
            </div>
            <div className="form-group">
                <input type="password" name='password2' placeholder="Confirm your password" value={details.password2} onChange={handleChange} />
                {errors.password2 && <p>{errors.password2}</p>}
            </div>
            <div className="form-group submitBtn">
                <input type="submit" value="Submit" />
            </div>


        </form>
    )
}

export default Signup
