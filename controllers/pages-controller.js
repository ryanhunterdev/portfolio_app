const express = require('express')
const router = express.Router();

// router.set('view engine', 'ejs')
// router.set('views', './templates')

router.get('/', (req, res) => {
    res.render('index')
})

module.exports = router