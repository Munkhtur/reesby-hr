import React, {useState} from 'react'
import {useLocation, useHistory} from 'react-router-dom'
import userData from './../userDatabase'


const WelcomePage = () => {
    const location = useLocation()
    const history = useHistory()

    const [errors, setErrors] = useState({})

    const validate=(details)=>{
        let errors = {}
        if (!details.email) {
            errors.email= '* Email required'
        } else if (!/\S+@\S+\.\S+/.test(details.email)) {
            errors.email= '* Email address is invalid'
        }
        if (!details.fullName) {
           errors.fullName = '* Full Name is Required'
        } 
    
        if (!details.department) {
           errors.department = '* Please select department'
        }
        return errors

    }

    const [details, setDetails] = useState({
        fullName: '',
        email: location.state.email,
        department:''
    })
    const handleSubmit=(e)=>{
        e.preventDefault()
        const formError = validate(details)
        setErrors(formError)
    
        if(Object.keys(formError).length === 0 ){

            const newUser = {...location.state, ...details}
            userData.push(newUser)
        
            history.push('/pending')
        }
    }

    const handleChange=(e)=>{
        setDetails({...details, [e.target.name]: e.target.value})
    }


    return (
        <div className="welcomeForm">

        <form onSubmit={handleSubmit}>
            <h2 className="heading">Please complete the form</h2>

            <div className="form-group">
            <label htmlFor="fullName">Full Name:</label>
                <input type="text" name='fullName' placeholder="Full name" value={details.fullName} onChange={handleChange} />
                {errors.fullName && <p>{errors.fullName}</p>}
               
            </div>
            <div className="form-group">
            <label htmlFor="email">Email address:</label>
                <input type="email" name='email' placeholder="Email" value={details.email} onChange={handleChange} />
                {errors.email && <p>{errors.email}</p>}
            </div>
            <div className="form-group">
                <label htmlFor="department">Department:</label>
                <div className="select">
                <select name="department" value={details.department} onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="Accounting">ACCOUNTING</option>
                    <option value="HR">HR</option>
                    <option value="Marketing">MARKETING</option>
                    <option value="IOT">IOT</option>
                    <option value="CRM">CRM</option>
                    <option value="Datascience">DATASCIENCE</option>
                    <option value="Cybersecurity">CYBERSECURITY</option>
                </select>
                {errors.department && <p>{errors.department}</p>}

                </div>
            </div>
            <div className="form-group submitBtn">
                <input type="submit" value="Save" />
            </div>
        </form>
        </div>
    )
}

export default WelcomePage
