const { Pool } = require('pg')

const db = new Pool({
  database: 'jgrs_portfolios'
}) 

const Portfolio = {

    findAll() {
      const sql = 'select * from users;'
      return db.query(sql)
    },

    findOne(id) {
      const sql = 'select * from users where id = $1;'
      return db.query(sql, [id])
    },

    createUser(email, name, password) {
      const sql = `insert into users (email, name, password) 
      values ($1, $2, $3) returning *;`

      return db.query(sql, [email, name, password])
    },

    loginUser(email, password) {
      const sql = `SELECT * FROM users WHERE email = $1`
    },

    addProject(projectYear, projectHeading, projectDescription, projectURL, user_id){
      const sql = `UPDATE users SET project_list = project_list || 
      '{
        "project_year": "${projectYear}",
        "project_heading": "${projectHeading}",
        "project_description": "${projectDescription}",
        "project_url": "${projectURL}"
      }' ::jsonb
      WHERE id=${user_id};`
      return db.query(sql)
    }
}


module.exports = Portfolio