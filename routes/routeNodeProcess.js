var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('NodeProcess', { title: '网络节点处理' });
});

module.exports = router;
