const express = require('express')
const router = express.Router();
const Portfolio = require('../models/portfolio.js');

router.post('/api/portfolios/signup', (req, res) => {
  const invalidEmail = "That email is already being used"
  Portfolio
  .checkUser(req.body.email)
  .then(dbRes => {
    if (dbRes.rows.length && dbRes.rows[0].email === req.body.email) {
      prompt(`${req.body.email} is already being used`)
    } else {
      Portfolio
      .createUser(req.body.email, req.body.name, req.body.password)
      .then(dbRes => {
        res.render('index', { error: invalidEmail })
      })
    }
  })
})

router.post('/portfolios/login', (req, res) => {

  const invalidEmail = "That email does not exist"
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

