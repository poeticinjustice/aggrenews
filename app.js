const express           = require('express');
const logger            = require('morgan');
const bodyParser        = require('body-parser');
const path              = require('path');

const app               = express();
const port              = process.env.PORT || 3000;

// setting our view engine and views directory
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

// setting out static assets directory
app.use(express.static(path.join(__dirname,'public')));

app.use(logger('dev'));
app.use(bodyParser.json());

app.listen(port, function() {
  console.log('Listening on ', port);
})
