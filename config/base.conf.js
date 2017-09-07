const path = require('path')
const resolve = dir => path.resolve(__dirname, dir)

const baseConfig = {
  // view
  view: resolve('../view'),
  // public
  public: resolve('../public'),
  // port
  port: process.PORT || 3000
}

module.exports = baseConfig