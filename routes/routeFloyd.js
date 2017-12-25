var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('Floyd', { title: 'Floyd最短路' });
});

module.exports = router;
