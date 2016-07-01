'use strict'

// building app
const express           = require('express');
const logger            = require('morgan');
const bodyParser        = require('body-parser');
const path              = require('path');

// creating controllers for routing
const homeController    = require('./controllers/home');
const keyController     = require('./controllers/key');
const guardController   = require('./controllers/guard')
const nytController     = require('./controllers/nyt')

// declare app and port
const app               = express();
const port              = process.env.PORT || 3000;

// setting our view engine and views directory
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

// setting out static assets directory
app.use(express.static(path.join(__dirname,'public')));

// set routes
app.use('/', homeController);
app.use('/key', keyController);
app.use('/nyt', nytController);
app.use('/guardian', guardController);

app.use(logger('dev'));
app.use(bodyParser.json());

app.listen(port, function() {
  console.log('Listening on ', port);
})
