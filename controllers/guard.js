const router      = require('express').Router();
const reqmod      = require('request');
const bodyParser  = require('body-parser');
const gKey        = process.env.GUARDIAN_KEY;


router.get('/', function(req, res) {
  res.render('guardian');
});

// router.get('/guardian', function(req, res) {
//   reqmod('http://content.guardianapis.com/search?api-key='+gKey+'&format=json&q='+req.query.term, function (error, response, body) {
//       res.send(body);
//   })
// })

module.exports = router;
