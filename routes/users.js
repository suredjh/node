var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({message: 'success', status: 200, data: []});
});

router.get('/list', function(req, res, next) {
  res.json({message: 'success', status: 200, data: [{name: 'xiaoming', age: 23}, {name: 'ab', age: 23}]});
});

router.get('/details/:id', function(req, res, next) {
  res.json({message: 'success', status: 200, data: {name: 'xiaoming', age: 23, address: '上海市徐汇区', phone: 17692829289}});
});


module.exports = router
