const express = require('express')
const router = express.Router();
const Portfolio = require('../models/portfolio.js');


router.get('/', (req, res) => {
    res.render('index')
})


// router.post('/', (req, res) => {

//     Portfolio
//     .create(req.body.email, req.body.name, req.body.password)
//     .then(dbRes => {
      
//       console.log(dbRes.rows);

//       res.status(201).json({ 
//         message: "new user created",
//         user: dbRes.rows[0] })
//     })

//     console.log('clicked');
//     console.log(req.body);
// })


module.exports = router