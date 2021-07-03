const express = require('express')
const router = express.Router();
const Portfolio = require('../models/portfolio.js');

router.patch('/api/portfolios/delete/projects/:id/:index', (req, res) =>{
    let user_id = Number(req.params.id)
    let index = Number(req.params.index)
    Portfolio
      .deleteProject(index, user_id)
      .then(dbRes => {
        res.status(201).json({
          message: "project was successfully deleted",
          remainingProjects: dbRes.rows[0]
        })
      })
})

router.patch('/api/portfolios/delete/skills/:id/:index', (req, res) =>{
  let user_id = Number(req.params.id)
  let index = Number(req.params.index)
  Portfolio
    .deleteSkills(index, user_id)
    .then(dbRes => {
      res.status(201).json({
        message: "skills list was successfully deleted",
        remainingSkillsList: dbRes.rows[0]
      })
    })
})

module.exports = router


