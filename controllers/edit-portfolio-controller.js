const express = require('express')
const router = express.Router();
const Portfolio = require('../models/portfolio.js');

router.patch('/api/portfolios/about/:id', (req, res) =>{
    let user_id = Number(req.params.id)
    Portfolio
      .updateAbout(req.body.user_location, req.body.user_welcome, req.body.user_pitch, user_id)
      .then(dbRes => {
        res.status(201).json({
          message: "about section was successfully edited",
          aboutUpdate: dbRes.rows 
        })
      })
})

router.patch('/api/portfolios/contact/:id', (req, res) =>{
    let user_id = Number(req.params.id)
    Portfolio
      .updateContact(req.body.github_url, req.body.linkedin_url, req.body.instagram_url, req.body.twitter_url, user_id)
      .then(dbRes => {
        res.status(201).json({
          message: "about section was successfully edited",
          aboutUpdate: dbRes.rows 
        })
      })
})

// index here is the index of the object in the array 
router.patch('/api/portfolios/:id/:index', (req, res) =>{
    let user_id = Number(req.params.id)
    let index = Number(req.params.index)
    Portfolio
      .updateProject(req.body.project_year, req.body.project_heading, req.body.project_description, req.body.project_url, user_id, index)
      .then(dbRes => {
        res.status(201).json({
          message: "project was successfully edited",
          aboutUpdate: dbRes.rows 
        })
      })
})

module.exports = router