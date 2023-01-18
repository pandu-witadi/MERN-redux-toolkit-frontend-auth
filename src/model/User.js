//
//

const mongoose = require('mongoose')

const { schemaOption } = require('./modelOption')


const objSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
    },
    accessToken: String
}, schemaOption )

module.exports = mongoose.model('User', objSchema)
