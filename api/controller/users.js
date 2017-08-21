 var express = require('express');
 var db = require('../config/database.js');

 exports.getItems =  async  function (req, res, next) {
 try {
    const users = await db.any('SELECT * FROM users', [true]);
    // success
    res.status(200)
        .json({
          status: 'success',
          data: users,
          message: 'Retrieved ALL puppies'
        });
} 
catch(e) {
    // error
      res.status(201)
        .json({
          status: 'fail',
          data: e,
          message: 'Retrieved ALL puppies'
        });
}
     
}
