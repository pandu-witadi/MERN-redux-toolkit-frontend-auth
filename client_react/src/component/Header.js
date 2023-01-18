//
//
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'

import { reset, logout } from '../store/feature/authSlice'


const Header = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { user } = useSelector((state) => state.auth)
    const onLogout = () => {
        dispatch( logout() )
        dispatch( reset() )
        navigate('/')
    }

    return (
        <header className='header'>
            <div className='logo'>
                <Link to='/'>Home</Link>
            </div>
            <ul>
                { user ? (
                    <li>
                        <button className='btn' onClick={onLogout}>
                            <FaSignOutAlt /> Logout
                        </button>
                    </li>
                ) :
                    (<>
                        <li>
                            <Link to='/login'>
                                <FaSignInAlt /> Login
                            </Link>
                        </li>
                        <li>
                            <Link to='/register'> Register
                                <FaUser />
                            </Link>
                        </li>
                    </>)
                }

            </ul>
        </header>
    )
}


export default Header
