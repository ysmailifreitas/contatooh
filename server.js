var http = require('http');
var express = require('express')
var app  = require('./config/express')();
require('./config/passport')();
require('./config/database.js')('mongodb://localhost/contatooh');

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express Server escutando na porta ' +
      app.get('port'));
});