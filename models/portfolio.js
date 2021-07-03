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

    createUser(email, password) {
      const sql = `insert into users (email, password, user_name, user_location, user_welcome, contact_pitch, github_url, linkedin_url, instagram_url, twitter_url, project_list, skills) 
      values (
        $1,
        $2, 
        'your name here', 
        'Your Location', 
        'Say Hi and tell us the role you fill', 
        'Tell us about yourself, where are you coming from, where are you aiming to go?', 'Link your github here', 
        'Link your linkedin here', 
        'Link your insta or other socials here', 
        'Link your twitter or other socials here', 
        '[
          {
            "project_year": "Project Year",
            "project_heading": "Project Name",
            "project_description": "About the project, challenges, lessons learned etc.",
            "project_url": "Link to projects github repo"
          },
          {
            "project_year": "Project Year",
            "project_heading": "Project Name",
            "project_description": "About the project, challenges, lessons learned etc.",
            "project_url": "Link to projects github repo"
          }
        ]',
        '[
          {
            "skills_heading": "(back end)",
            "skills_list": ["sinatra", "node", "express", "ruby"]
          },
          {
            "skills_heading": "(front-end)",
            "skills_list": ["sinatra", "node", "express", "ruby"]
          }
        ]'
        ) returning *;`

      return db.query(sql, [email, password])
    },

    checkUser(email, password) {
      const sql = `SELECT * FROM users WHERE email = '${email}';`
      return db.query(sql)
    },

    loginUser(email, password) {
      const sql = `SELECT * FROM users WHERE email = '${email}';`
      console.log(`login, email: ${email}, PW: ${password}`);
      console.log(db.query(sql));
      return db.query(sql)
    },

    addProject(projectYear, projectHeading, projectDescription, projectURL, userID){
      const sql = `UPDATE users SET project_list = project_list || 
      '{
        "project_year": "${projectYear}",
        "project_heading": "${projectHeading}",
        "project_description": "${projectDescription}",
        "project_url": "${projectURL}"
      }' ::jsonb
      WHERE id=${userID} returning *;`
      return db.query(sql)
    },

    addSkill(skillHeading, skillList, userID){
      const sql = `UPDATE users SET skills = skills || 
      '{
        "skills_heading": "${skillHeading}",
        "skills_list": ${skillList}
      }'::jsonb
      WHERE id=${userID} returning *;`
      return db.query(sql)
    },

    updateAbout(userLocation, userWelcome, userPitch, userId){
      const sql = `UPDATE users SET user_location = $1, user_welcome = $2, contact_pitch = $3 WHERE id = $4 returning user_location, user_welcome, contact_pitch;`
      return db.query(sql, [userLocation, userWelcome, userPitch, userId])
    },

    updateContact(githubURL, linkedinURL, instagramURL, twitterURL, userId){
      const sql = `UPDATE users SET github_url = $1, linkedin_url = $2, instagram_url = $3, twitter_url = $4 WHERE id = $5 returning github_url, linkedin_url, instagram_url, twitter_url;`
      return db.query(sql, [githubURL, linkedinURL, instagramURL, twitterURL, userId])
    },

    updateProject(projectYear, projectHeading, projectDescription, projectURL, userID, index){
      const sql = `UPDATE users SET
      project_list = 
        jsonb_set(
          project_list,
          '{${index}}',  
          '{
              "project_url": "${projectURL}",
              "project_year": "${projectYear}",
              "project_heading": "${projectHeading}",
              "project_description": "${projectDescription}"
          }',
          false
        )
    WHERE id=${userID} returning project_list;`
      return db.query(sql)
    },

    updateSkills(skillsHeading, skillsList, userID, index){
      const sql = `UPDATE users SET
      skills = 
        jsonb_set(
          skills,
          '{${index}}',  
          '{
              "skills_list": ${skillsList},
              "skills_heading": "${skillsHeading}"
          }',
          false
        )
      WHERE id=${userID} returning skills;`
      return db.query(sql)
    },

    deleteProject(index, userID){
      const sql = `UPDATE users SET project_list = (
        SELECT project_list ::jsonb - ${index} FROM users WHERE id = ${userID}
      )
      WHERE id=${userID} returning project_list;`
      return  db.query(sql)
    },

    deleteSkills(index, userID){
      const sql = `UPDATE users SET skills = (
        SELECT skills ::jsonb - ${index} FROM users WHERE id = ${userID}
      )
      WHERE id=${userID} returning skills;`
      return  db.query(sql)
    }

}


module.exports = Portfolio