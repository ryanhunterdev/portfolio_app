const express = require('express')
const router = express.Router();
const Portfolio = require('../models/portfolio.js');

// for adding new  parts of the portfolio - only projects and skills in here

router.patch('/api/portfolios/add/projects/:id', (req, res) =>{
  let user_id = Number(req.params.id)
  Portfolio
    .addProject(req.body.project_year, req.body.project_heading, req.body.project_description, req.body.project_url, user_id)
    .then(dbRes => {
      res.status(201).json({
        message: "project was successfully added",
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
        skill: dbRes.rows
      })
    })
})

module.exports = router