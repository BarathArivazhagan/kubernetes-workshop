var express = require('express')
  , http = require('http')
  , path = require('path')
  , bodyParser = require('body-parser');

var app = express();
app.get('/', function(req, res){
    res.send('hello world');
  });
  
app.listen(8080);