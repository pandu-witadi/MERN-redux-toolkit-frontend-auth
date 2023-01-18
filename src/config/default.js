//
//
require('dotenv').config()

let CF = {
    app: {
        name: "MERN-redux-toolkit-frontend-auth",
        version: "0.0.1"
    },
    server: {
        port: 5154,
        apiPath: '/api'
    },
    // mongodb setting
    mongoose: {
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        // url : 'mongodb+srv://wamoo:wamoo@devconnector.jdg80.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
        url : 'mongodb://127.0.0.1:27017/redux-toolkit-frontend-auth'
    },
    // JWT (JSONWebToken)
    jwt: {
       saltLength: 10,
       secret_str : "this-auth-token",
       token_exp:  60 * 60 // 60 minutes
    },
    // PAYPAL: {
    //     CLIENT_ID : 'AbV4DsXYRoJUeL-qzOyRQAxgdp8hRUgmVeesKbKTCzzPyj1FdvbHnbuYc5sl_1qzF96xRyqqEPF9SiQv'
    // },
    frontEnd: {
        path: '../client_react/build'
    }
}

CF.server.port = process.env.PORT || CF.server.port
CF.jwt.saltLength =  process.env.saltLength || CF.jwt.saltLength
CF.jwt.secret_str =  process.env.secret_str || CF.jwt.secret_str
CF.jwt.token_exp =  process.env.token_exp || CF.jwt.token_exp


module.exports = CF
