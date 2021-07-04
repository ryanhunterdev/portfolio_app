const express = require('express')
const router = express.Router();
const Portfolio = require('../models/portfolio.js');

router.patch('/left-background/:id', (req, res) =>{
    let user_id = Number(req.params.id)
    Portfolio
        .updateStyles(req.body.background_color_left, "left_background_color", user_id)
        .then(dbRes => {
            res.status(201).json({
                message: "project was successfully added",
                allStyles: dbRes.rows[0],
                bgColorLeft: dbRes.rows[0].styles.left_background_color
            })
        })
})

router.patch('/right-background/:id', (req, res) =>{
    let user_id = Number(req.params.id)
    Portfolio
        .updateStyles(req.body.background_color_right, "right_background_color", user_id)
        .then(dbRes => {
            res.status(201).json({
                message: "project was successfully added",
                allStyles: dbRes.rows[0],
                bgColorRight: dbRes.rows[0].styles.right_background_color
            })
        })
})

  module.exports = router