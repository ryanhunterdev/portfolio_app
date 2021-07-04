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

router.patch('/right-heading-color/:id', (req, res) =>{
    let user_id = Number(req.params.id)
    Portfolio
        .updateStyles(req.body.heading_color_right, "right_heading_color", user_id)
        .then(dbRes => {
            res.status(201).json({
                message: "project was successfully added",
                allStyles: dbRes.rows[0],
                headingColorRight: dbRes.rows[0].styles.right_heading_color
            })
        })
})


router.patch('/left-heading-color/:id', (req, res) =>{
    let user_id = Number(req.params.id)
    Portfolio
        .updateStyles(req.body.heading_color_left, "left_heading_color", user_id)
        .then(dbRes => {
            res.status(201).json({
                message: "project was successfully added",
                allStyles: dbRes.rows[0],
                headingColorLeft: dbRes.rows[0].styles.left_heading_color
            })
        })
})



  module.exports = router