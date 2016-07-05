const router  = require('express').Router();
const request  = require('request');

// Keys saved in ~/.bash_profile as:
// export KEY_NAME=KEY_NUMBER  with no spaces or quotes
// then source ~/.bash_profile is run in shell
// tested by using console.log to show keys
// used magical commands like:
// env | grep KEY
// and
// env | grep NYT
// and
// env | grep GUARDIAN
// then did source ~/.bash_profile
// then it worked

const gKey    = process.env.GUARDIAN_KEY;
const nKey    = process.env.NYT_KEY;


router.get('/guardian', function(req, res) {
  request('http://content.guardianapis.com/search?api-key='+gKey+'&format=json&q='+req.query.term, function (error, response, body) {
      res.send(body);
  })
})


router.get('/nyt', function(req, res) {
  request('http://api.nytimes.com/svc/search/v2/articlesearch.json?api-key='+nKey+'&q='+req.query.term, function (error, response, body) {
      res.send(body);
  })
})


module.exports = router;

//
