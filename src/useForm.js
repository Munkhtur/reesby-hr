import { useState } from 'react'
import userData from './userDatabase'
import { login } from './actions/login'
import { useDispatch } from 'react-redux'



const useForm = () => {
    const dispatch = useDispatch()
    const [details, setDetails] = useState({

        email: '',
        password: '',
        password2: '',
    })

    const [errors, setErrors] = useState({})

    const handleChange = e => {
        setDetails({
            ...details, [e.target.name]: e.target.value
        })
    }

    // const handleSubmit = e => {
    //     e.preventDefault()
    //     setErrors(validate(details))

    //     if (!errors) {
    //         const newUser = {
    //             name: details.username,
    //             email: details.email,
    //             password: details.password
    //         }
    //         userData.push(newUser)
    //         dispatch(login())
    //     }
    // }

    return { handleChange, details, errors, setErrors }
}

export default useForm