const express = require('express');
const app = express();
const port = 8080;

const logger = require('./middlewares/logger');
const pagesController = require('./controllers/pages-controller.js')
const portfolioController = require('./controllers/portfolios-controller.js')

app.set('view engine', 'ejs')
app.set('views', './templates')

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})

app.use(logger)

app.use(express.static('client'))

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

// app.use('', apiController)

app.use('/', pagesController)

app.use('/', portfolioController)