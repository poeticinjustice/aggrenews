const router      = require('express').Router();
const reqmod      = require('request');
const bodyParser  = require('body-parser');
const gKey        = process.env.GUARDIAN_KEY;

let content_search = 'clinton';

router.get('/', function(req, res) {
  reqmod('http://content.guardianapis.com/search?q='+req.bod.content_search+'&api-key='+gKey+'&format=json', function (error, response, body) {
      res.send(body);
  })
})

module.exports = router;
