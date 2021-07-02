const express = require('express')
const router = express.Router();
const Portfolio = require('../models/portfolio.js');

router.patch('/api/portfolios/:id/:index', (req, res) =>{
    let user_id = Number(req.params.id)
    let index = Number(req.params.index)
    Portfolio
      .deleteProject(req.body.project_year, req.body.project_heading, req.body.project_description, req.body.project_url, user_id, index)
      .then(dbRes => {
        res.status(201).json({
          message: "project was successfully edited",
          updatedProject: dbRes.rows[0].project_list[index],
          allProjects: dbRes.rows[0]

        })
      })
})

router.patch('/api/skills/:id/:index', (req, res) =>{
    let user_id = Number(req.params.id)
    let index = Number(req.params.index)

    let skills_array = req.body.skills_list.split(", ")
    let JSONskills = JSON.stringify(skills_array)

    Portfolio
      .deleteSkills(req.body.skills_heading, JSONskills, user_id, index)
      .then(dbRes => {
        res.status(201).json({
          message: "project was successfully edited",
          updatedSkill: dbRes.rows[0].skills[index],
          allSkillss: dbRes.rows[0]
        })
      })
})

module.exports = router