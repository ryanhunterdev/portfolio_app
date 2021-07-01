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

module.exports = router