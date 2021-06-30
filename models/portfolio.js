const { Pool } = require('pg')

const db = new Pool({
  database: 'placebase'
}) 

const Portfolio = {

    findAll() {
      const sql = 'select * from placetable;'
      return db.query(sql)
    },

    createUser(email, name, password) {
        const sql = `
      insert into placetable (email, name, password) 
      values ($1, $2, $3) returning *;
    `

    return db.query(sql, [email, name, password])
    }
}


module.exports = Portfolio