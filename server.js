const express = require('express');
const app = express();
var session = require('express-session')
const port = 8080;

const logger = require('./middlewares/logger');
const pagesController = require('./controllers/pages-controller.js')
const portfolioController = require('./controllers/portfolios-controller.js')
const editPortfolioController = require('./controllers/edit-portfolio-controller.js')
const newPortfolioController = require('./controllers/new-portfolio-controller.js')
const usersController = require('./controllers/users-controller.js')

app.set('view engine', 'ejs')
app.set('views', './templates')

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})

app.use(session({secret: 'ssshhhhh',saveUninitialized: true,resave: true}));

app.use(logger)

app.use(express.static('client'))

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.use('/', pagesController)

app.use('/', portfolioController)

app.use('/', editPortfolioController)

app.use('/', newPortfolioController)

app.use('/', usersController)