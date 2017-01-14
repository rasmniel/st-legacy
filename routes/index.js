var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/produkter', function(req, res, next) {
  res.render('produkter');
});

router.get('/info', function(req, res, next) {
  res.render('info');
});

router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;
