const express = require('express')
const router = express.Router();
const Portfolio = require('../models/portfolio.js');


router.get('/', (req, res) => {
    res.render('index', { loginEmailError: "", signupEmailError: "", passwordError: ""})
    console.log(req.session)
})

router.get('/portfolios/edit/:id', (req, res) => {
    let user_id = Number(req.params.id)
    console.log(req.session)
    res.render('edit-portfolio', { user_id: user_id})
})

router.get('/portfolios/:id', (req, res) => {
    let user_id = Number(req.params.id)
    console.log(req.session)
    res.render('finished_portfolio', { user_id: user_id})
})


module.exports = router