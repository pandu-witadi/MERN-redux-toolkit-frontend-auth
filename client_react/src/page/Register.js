//
//
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, Link  } from 'react-router-dom'

import { FaUser } from 'react-icons/fa'
import { toast } from 'react-toastify'

import { reset, register } from '../store/feature/authSlice'
import Spinner from '../component/Spinner'


const Register = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        'email': '',
        'username': '',
        'password': '',
        'confirmPassword': ''
    })

    const { email, username, password, confirmPassword } = formData
    const { user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)

    useEffect(() => {
        if (isError)
            toast.error(message)
        if (isSuccess || user) {
            navigate('/login')
        }
        dispatch( reset() )
    }, [user, isError, isSuccess, message, navigate, dispatch])

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    const onSubmit = (e) => {
        e.preventDefault()
        if (password !== confirmPassword)
            toast.error('password not match')
        else {
            const userData = {
                email,
                password,
                username
            }
            dispatch( register(userData) )
        }
    }

    if (isLoading)
        return <Spinner />

    return (
        <>
            <section className='heading'>
                <h2>
                    <FaUser /> Register
                </h2>
                <p>Please create an account</p>
            </section>
            <section className='form'>
                <form onSubmit={onSubmit}>
                    <div className='form-group'>
                        <input
                            type='email'
                            className='control'
                            id='email'
                            name='email'
                            value={email}
                            placeholder='Enter your email'
                            onChange={onChange}
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            type='text'
                            className='control'
                            id='username'
                            name='username'
                            value={username}
                            placeholder='Enter your username'
                            onChange={onChange}
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            type='password'
                            className='control'
                            id='password'
                            name='password'
                            value={password}
                            placeholder='Enter your password'
                            onChange={onChange}
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            type='password'
                            className='control'
                            id='confirmPassword'
                            name='confirmPassword'
                            value={confirmPassword}
                            placeholder='Re-Enter your password'
                            onChange={onChange}
                        />
                    </div>
                    <div className='form-group'>
                        <button type='submit' className='btn btn-block'>Submit</button>
                    </div>
                </form>
                <Link to='/login'>Already have an account? Login</Link>
            </section>
        </>
    )
}


export default Register
