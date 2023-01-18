//
//
const asyncHandler = require('express-async-handler')

const CF = require('../config/default')
const User = require('../model/User')
const {
    passwordHash,
    comparePassword,
    createToken
} = require('../util/auth')


const register = asyncHandler( async (req, res) => {
    const { email, password, username } = req.body
    if (!email || !password || !username ) {
        res.status(400)
        throw new Error('Please add all fields')
    }

    const userExist = await User.findOne({ email: email })
    if (userExist) {
        res.status(401)
        throw new Error('email already registered')
    }

    const user = await User.create({
        email: email,
        password: await passwordHash(password),
        username: username
    })
    if (!user) {
        res.status(401)
        throw new Error('invalid user data')
    }
    const accessToken = createToken(user._id)
    const { hashPassword, __v, ...others } = user._doc
    return res.status(201).json({
        ...others,
        accessToken: accessToken
    })
})

const login = asyncHandler( async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        res.status(400)
        throw new Error('Please add all fields')
    }

    const user = await User.findOne({ email: email })
    if (!user || !(await comparePassword(password, user.password))) {
        res.status(401)
        throw new Error('invalid credentials')
    }

    const accessToken = createToken(user._id)
    const { hashPassword, __v, ...others } = user._doc
    return res.status(200).json({
        ...others,
        accessToken: accessToken
    })
})


module.exports = {
    register,
    login
}
