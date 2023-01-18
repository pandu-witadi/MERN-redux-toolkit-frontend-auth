//
//
import axios from 'axios'


const register = async (userData) => {
    const config = {
        headers: { 'Content-Type': 'application/json' }
    }
    const response = await axios.post('/api/auth/register', userData, config)
    return response.data
}

const logout = () => {
    localStorage.removeItem('user')
}

const login = async (userData) => {
    const config = {
        headers: { 'Content-Type': 'application/json' }
    }
    const response = await axios.post('/api/auth/login', userData, config)
    return response.data
}

const authService = {
    register,
    logout,
    login
}

export default authService
