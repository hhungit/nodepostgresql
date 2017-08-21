var express = require('express');
var path = require('path');
var users = require('./routes/users');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));
//app.set('views', path.join(__dirname, 'views'));
app.use('/users',users);
module.exports = app;