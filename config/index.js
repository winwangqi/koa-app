const devConfig = require('./dev.conf')
const prodConfig = require('./prod.conf')

console.log('environment :: ' + process.env.NODE_ENV)

switch (process.env.NODE_ENV) {
  case 'development':
    module.exports = devConfig
    break;
  case 'production':
    module.exports = prodConfig
    break;
  default:
    module.exports = prodConfig
}