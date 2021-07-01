const express = require('express')
const router = express.Router();
const Portfolio = require('../models/portfolio.js');


router.get('/', (req, res) => {
    res.render('index')
})

router.get('/edit-portfolio/:id', (req, res) => {
    let user_id = Number(req.params.id)
    res.render('edit-portfolio', { user_id: user_id})
})

router.get('/portfolio/:id', (req, res) => {
    let user_id = Number(req.params.id)
    res.render('finished-portfolio', { user_id: user_id})
})


module.exports = router