//
//
const router = require('express').Router()

// -----------------------------------------------------------------------------
const test = require('./test')
router.get('/test', test.test_get)


// -----------------------------------------------------------------------------
const auth = require('./auth')
router.post('/auth/register', auth.register)
router.post('/auth/login', auth.login)




// -----------------------------------------------------------------------------
module.exports = router
