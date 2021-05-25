import React, { useState } from 'react'
import useForm from './../useForm'
import validate from './../validateInfo'
import userData from './../userDatabase'
import { login } from './../actions/login'
import { useDispatch } from 'react-redux'

const Signup = () => {
    const dispatch = useDispatch()
    const { handleChange, details, errors, setErrors } = useForm()

    const handleSubmit = e => {
        e.preventDefault()
        const newErrors = validate(details)
        setErrors(newErrors)
        console.log(newErrors)

        if (Object.keys(newErrors).length === 0) {
            const newUser = {
                name: details.username,
                email: details.email,
                password: details.password
            }
            userData.push(newUser)
            dispatch(login(newUser))
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create your account</h2>

            <div className="form-group">
                <input type="text" name='username' placeholder="Name" value={details.username} onChange={handleChange} />
                {errors.username && <p>{errors.username}</p>}
            </div>
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
