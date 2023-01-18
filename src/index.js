//
//
const mongoose = require('mongoose')
const { connectMongoDB } = require('./config/mongodb-conn')
const app = require('./app')

const CF = require('./config/default')


connectMongoDB()

let server = app.listen(CF.server.port, () => {
    console.log(`${CF.app.name} ${CF.app.version} server started - listening to port ${CF.server.port}`)
})
