const Router = require('koa-router')
const router = new Router()

router.get('/', ctx => {
  return ctx.render('login')
})

module.exports = router