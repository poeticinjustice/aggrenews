'use strict'
// building app
const express           = require('express');
const logger            = require('morgan');
const bodyParser        = require('body-parser');
const path              = require('path');

// required to create and authenticate users
const session           = require('express-session');
const methodOverride    = require('method-override')

// creating controllers for routing
const homeController    = require('./controllers/home');
const keyController     = require('./controllers/key');
const guardController   = require('./controllers/guard');
const nytController     = require('./controllers/nyt');
const userController    = require('./controllers/user.js');

// declare app and port
const app               = express();
const port              = process.env.PORT || 3000;

// adding a session as middleware
app.use(session( {
  saveUninitialized: true,
  resave: true,
  secret: 'supaDupa',
  cookie: {maxAge: 60000}
}))

// adding method override to allow form to delete
app.use(methodOverride('_method'));

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
app.use('/user', userController);

app.use(logger('dev'));

// doing it this way because it was in Express Auth
// will figure out what this means for write up
app.use(bodyParser.urlencoded({extended: false}));
//app.use(bodyParser.json());

app.listen(port, function() {
  console.log('Listening on ', port);
})


// lots pulled directly from Express Auth With Students and other exercises
// But written and not copied/pasted in hopes I will absorb better
