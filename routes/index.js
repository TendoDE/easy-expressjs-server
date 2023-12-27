var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Application' });
});

router.use((req, res, next) => {
  res.status(404).send("Diese Seite existiert nicht.")
})

module.exports = router;