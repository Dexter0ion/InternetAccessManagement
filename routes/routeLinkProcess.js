var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('LinkProcess', { title: '网络连接处理' });
});

module.exports = router;
