const express = require('express')
const router = express.Router();
const Portfolio = require('../models/portfolio.js');

router.post('/api/portfolios/signup', (req, res) => {
  const invalidEmail = "That email is already in use"
  const passwordError = ""
  Portfolio
  .checkUser(req.body.email)
  .then(dbRes => {
    if (dbRes.rows.length && dbRes.rows[0].email === req.body.email) {
      res.render('signup', { loginEmailError: "", signupEmailError: invalidEmail, passwordError: ""})
    } else {
      Portfolio
      .createUser(req.body.email, req.body.password)
      .then(dbRes => {
        
        res.status(201).redirect(`/portfolios/edit/${dbRes.rows[0].id}`)
      })
    }
  })
})

router.post('/portfolios/login', (req, res) => {

  const invalidEmail = "No user exists with that email"
  const passwordError = "Password is incorrect"
  Portfolio
  .checkUser(req.body.email)
  .then(dbRes => {
    if (dbRes.rows.length && dbRes.rows[0].email === req.body.email && dbRes.rows[0].password === req.body.password) {
      Portfolio
      .loginUser(req.body.email, req.body.password)
      .then(dbRes => {
    
        sess = req.session;
        sess.userID = dbRes.rows[0].id

        res.status(201).redirect(`/portfolios/edit/${dbRes.rows[0].id}`)
      })
    } else if (dbRes.rows.length && dbRes.rows[0].password !== req.body.password){
      res.render('index', { loginEmailError: passwordError, signupEmailError: "", passwordError: "" })
    } else {
      res.render('index', { loginEmailError: invalidEmail, signupEmailError: "", passwordError: "" })
    }
  })
})

module.exports = router

