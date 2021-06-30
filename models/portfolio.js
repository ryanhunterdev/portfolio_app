const { Pool } = require('pg')

const db = new Pool({
  database: 'placebase'
}) 

const Portfolio = {

    findAll() {
      const sql = 'select * from users;'
      return db.query(sql)
    },

    createUser(email, name, password) {
      const sql = `insert into placetable (email, name, password) 
      values ($1, $2, $3) returning *;`

    return db.query(sql, [email, name, password])
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