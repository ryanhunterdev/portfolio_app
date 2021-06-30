const express = require('express');
const app = express();
const port = 8080;

const logger = require('./middlewares/logger.js');
const apiController = require()
const pagesController = require()

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})

app.use(logger)

app.use(express.static('client'))

app.use(express.json())

app.use('', apiController)

// app.use('', pagesController)
