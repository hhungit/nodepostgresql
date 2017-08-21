 var express = require('express');
 var router = express.Router();
 var UserController = require('../api/controller/users.js');
 router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/getItems',UserController.getItems)
module.exports = router;