const router      = require('express').Router();
const reqmod      = require('request');
const bodyParser  = require('body-parser');
const nKey        = process.env.NYT_KEY;


router.get('/', function(req, res) {
  res.render('nyt');
});


// router.get('/nyt', function(req, res) {
//   reqmod('http://api.nytimes.com/svc/search/v2/articlesearch.json?api-key='+nKey+'&fq='+req.query.term, function (error, response, body) {
//       res.send(body);
//   })
// })

module.exports = router;
