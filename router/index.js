const Router = require('koa-router')
const router = new Router()
const user = require('./user')
const login = require('./login')

router.get('/', ctx => ctx.render('index', { foo: 'index' }))

// login
router.use('/login', login.routes())

// user
router.use('/user', user.routes())

module.exports = router