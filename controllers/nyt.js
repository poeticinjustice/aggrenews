const router = require('express').Router();
const reqmod = require('request');
const nKey   = process.env.NYT_KEY;

router.get('/', function(req, res) {
  reqmod('http://api.nytimes.com/svc/search/v2/articlesearch.json?fq=brexit&api-key='+nKey, function (error, response, body) {
      res.send(body);
  })
})

module.exports = router;
