var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('Warshall', { title: 'Warshall可达性检测' });
});

module.exports = router;
