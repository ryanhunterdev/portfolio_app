const express = require('express')
const router = express.Router();
const Portfolio = require('../models/portfolio.js');

router.patch('/api/portfolios/add/projects/:id', (req, res) =>{
  let user_id = Number(req.params.id)
  Portfolio
    .addProject(req.body.project_year, req.body.project_heading, req.body.project_description, req.body.project_url, user_id)
    .then(dbRes => {
      res.status(201).json({
        message: "project was successfully added",
        project: dbRes.rows[0].project_list
      })
    })
})

router.patch('/api/portfolios/add/skills/:id', (req, res) =>{
  let user_id = Number(req.params.id)
  let skills_array = req.body.skills_list.split(", ")
  let JSONskills = JSON.stringify(skills_array)
  Portfolio
    .addSkill(req.body.skills_heading, JSONskills, user_id)
    .then(dbRes => {
      res.status(201).json({
        message: "skills set was successfully added",
        skill: dbRes.rows[0].skills[dbRes.rows[0].skills.length-1]
      })
    })
})

module.exports = router