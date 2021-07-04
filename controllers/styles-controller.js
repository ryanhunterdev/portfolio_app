const express = require('express')
const router = express.Router();
const Portfolio = require('../models/portfolio.js');

router.patch('/left-background/:id', (req, res) =>{
    // let user_id = Number(req.params.id)
    // Portfolio
    //     .addProject(req.body.project_year, req.body.project_heading, req.body.project_description, req.body.project_url, user_id)
    //     .then(dbRes => {
    //     res.status(201).json({
    //         message: "project was successfully added",
    //         project: dbRes.rows[0].project_list
    //     })
    //     })
})

  module.exports = router