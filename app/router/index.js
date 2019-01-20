'use strict'

const Router = require('koa-router')
const api = require('./api')

const router = new Router()

// endpoints
router.get('/api/v1/users', api.users.get)

module.exports = router
