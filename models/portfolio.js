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
      const sql = `insert into users (email, user_name, password) 
      values ($1, $2, $3) returning *;`

      return db.query(sql, [email, name, password])
    },

    checkUser(email) {
      const sql = `SELECT * FROM users WHERE email = '${email}';`
      return db.query(sql)
    },

    loginUser(email, password) {
      const sql = `SELECT * FROM users WHERE email = '${email}';`
      console.log(`login, email: ${email}, PW: ${password}`);
      console.log(db.query(sql));
      return db.query(sql)
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
    },

    addSkill(skillHeading, skillList, user_id){
      const sql = `UPDATE users SET skills = skills || 
      '{
        "skills_heading": "${skillHeading}",
        "skills_list": "${skillList}",
      }'::jsonb
      WHERE id=${user_id};`
      return db.query(sql)
    }
}


module.exports = Portfolio