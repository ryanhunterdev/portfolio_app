const express = require('express')
const router = express.Router();
const Portfolio = require('../models/portfolio.js');

router.get('/api/portfolios', (req, res) => {
  Portfolio
    .findAll()
    .then(dbRes => {
      console.log(dbRes.rows);

      res.status(201).json({
        message: "succussfully got",
        results: dbRes.rows
      })
      
    })
})

router.get('/api/portfolios/:id', (req, res) => {
  let user_id = Number(req.params.id)

  Portfolio
    .findOne(user_id)
    .then(dbRes => {
      console.log(dbRes.rows);

      res.status(201).json({
        message: `Successfully gotten one user`,
        results: dbRes.rows
      })
      
    })
})

router.put('/api/portfolios/:id', (req, res) =>{
  let user_id = Number(req.params.id)
  Portfolio
    .addProject(req.body.project_year, req.body.project_heading, req.body.project_description, req.body.project_url, user_id)
    .then(dbRes => {
      console.log(dbRes)

      res.status(201).json({
        message: "project was successfully added"
      })
    })
})

// update according to the final db structure
router.post('/', (req, res) => {
    Portfolio
    .createUser(req.body.email, req.body.name, req.body.password)
    .then(dbRes => {
      
      console.log(dbRes.rows);

      res.status(201).json({ 
        message: "new user created",
        user: dbRes.rows[0] })
    })
})

// router.post('/', (req, res) => {
//   Portfolio

// })

module.exports = router