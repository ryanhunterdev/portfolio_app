const express = require('express')
const router = express.Router();
const Portfolio = require('../models/portfolio.js');

router.post('/api/portfolios/signup', (req, res) => {
    Portfolio
    .createUser(req.body.email, req.body.name, req.body.password)
    .then(dbRes => {
      
      console.log(dbRes.rows);

      res.status(201).json({ 
        message: "new user created",
        user: dbRes.rows[0] })
    })
})

router.post('/api/portfolios/login', (req, res) => {
  Portfolio
  .checkUser(req.body.email)
  .then(dbRes => {
    if (dbRes.rows[0].email === req.body.email) {
      console.log('existing user');
    } 
  })

  Portfolio
  .loginUser(req.body.email, req.body.password)
  .then(dbRes => {

    sess = req.session;
    sess.userID = dbRes.rows[0].id
    console.log(req.session)
      
    console.log(dbRes.rows);

    res.status(201).redirect(`/edit-portfolio/${dbRes.rows[0].id}`)
  })
})

module.exports = router

