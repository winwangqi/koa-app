const Koa = require('koa')
const app = new Koa()
const config = require('./config')

// db
const db = require('./db')
app.context.db = db

// static
const staticServe = require('koa-static')
app.use(staticServe(config.public))

// view engine
const views = require('koa-views')
app.use(views(config.view, {
  extension: 'hbs',
  map: { hbs: 'handlebars' }
}))

// router
const router = require('./router')
app.use(router.routes())

app.listen(config.port, () => {
  console.log(`App listening at port :: ${config.port}; Press CTRL + C ternimate it.`)
})
