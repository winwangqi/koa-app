const mysql = require('mysql')
const { db } = require('../config')

const { host, user, password, database } = db

const connection = mysql.createConnection({
  host,
  user,
  password,
  database
})

module.exports = connection