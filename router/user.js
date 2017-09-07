const Router = require('koa-router')
const router = new Router()
const { user: userController } = require('../controller')

router.get('/', userController.list)

module.exports = router