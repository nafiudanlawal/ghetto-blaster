const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.render('index', { title: 'Express' });
});

/* GET Login page. */
router.get('/login', function(req, res, next) {
  res.render('index', { title: 'Login' });
});

/* POST home page. */
router.post('/login', function(req, res, next) {
  console.log(req.body);
  
  //res.render('index', { title: 'Express' });
});

module.exports = router;
