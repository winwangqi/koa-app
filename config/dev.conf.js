/* development configuration */

const { defaultsDeep } = require('lodash')
const baseConfig = require('./base.conf')

const devConfig = defaultsDeep(baseConfig, {
  // db
  db: {
    host: '101.236.26.180',
    user: 'wangqi',
    password: 'wangqi57',
    database: 'secret'
  }
})

module.exports = devConfig