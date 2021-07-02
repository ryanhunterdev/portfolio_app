const express = require('express')
const router = express.Router();
const Portfolio = require('../models/portfolio.js');

router.post('/api/portfolios/signup', (req, res) => {
  const invalidEmail = "That email is already in use"
  Portfolio
  .checkUser(req.body.email)
  .then(dbRes => {
    if (dbRes.rows.length && dbRes.rows[0].email === req.body.email) {
      res.render('index', { error: invalidEmail })
    } else {
      Portfolio
      .createUser(req.body.email, req.body.name, req.body.password)
      .then(dbRes => {
        res.render('index', { error: invalidEmail })
        res.status(201).redirect(`/edit-portfolio/${dbRes.rows[0].id}`)
      })
    }
  })
})

router.post('/portfolios/login', (req, res) => {

  const invalidEmail = "No user exists with that email"
  Portfolio
  .checkUser(req.body.email)
  .then(dbRes => {
    if (dbRes.rows.length && dbRes.rows[0].email === req.body.email) {
      Portfolio
      .loginUser(req.body.email, req.body.password)
      .then(dbRes => {
    
        sess = req.session;
        sess.userID = dbRes.rows[0].id

        res.status(201).redirect(`/edit-portfolio/${dbRes.rows[0].id}`)
      })
    } else {
      res.render('index', { error: invalidEmail })
    }
  })
})

module.exports = router

