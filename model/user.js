const db = require('../db')

module.exports = {
  // list all users
  getAllUser() {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM user', (err, rst) => {
        err ? reject(err) : resolve(rst)
      })
    })
  }
}