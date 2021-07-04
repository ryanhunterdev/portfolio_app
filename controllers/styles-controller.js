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


router.patch('/right-paragraph-color/:id', (req, res) =>{
    let user_id = Number(req.params.id)
    Portfolio
        .updateStyles(req.body.paragraph_color_right, "right_para_color", user_id)
        .then(dbRes => {
            res.status(201).json({
                message: "project was successfully added",
                allStyles: dbRes.rows[0],
                paragraphColorRight: dbRes.rows[0].styles.right_para_color
            })
        })
})

router.patch('/left-paragraph-color/:id', (req, res) =>{
    let user_id = Number(req.params.id)
    Portfolio
        .updateStyles(req.body.paragraph_color_left, "left_para_color", user_id)
        .then(dbRes => {
            res.status(201).json({
                message: "project was successfully added",
                allStyles: dbRes.rows[0],
                paragraphColorLeft: dbRes.rows[0].styles.left_para_color
            })
        })
})

router.patch('/heading-font/:id', (req, res) =>{
    let user_id = Number(req.params.id)
    Portfolio
        .updateStyles(req.body.heading_font, "heading_font", user_id)
        .then(dbRes => {
            res.status(201).json({
                message: "project was successfully added",
                allStyles: dbRes.rows[0],
                headingFont: dbRes.rows[0].styles.heading_font
            })
        })
})

router.patch('/paragraph-font/:id', (req, res) =>{
    let user_id = Number(req.params.id)
    Portfolio
        .updateStyles(req.body.paragraph_font, "paragraph_font", user_id)
        .then(dbRes => {
            res.status(201).json({
                message: "project was successfully added",
                allStyles: dbRes.rows[0],
                paragraphFont: dbRes.rows[0].styles.paragraph_font
            })
        })
})

  module.exports = router