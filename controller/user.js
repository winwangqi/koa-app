const { user: userModel } = require('../model')


module.exports = {
  // list all user
  async list(ctx) {
    try {
      const users = await userModel.getAllUser()
      return ctx.render('user', { users })
    }
    catch (err) {
      console.log('err', err)
    }
  }
}