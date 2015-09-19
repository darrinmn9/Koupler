var http = require('http');
var express = require('express');
var middleware = require('./config/middleware.js');
var sockets = require('./socket_server.js');
var app = express();
var server = http.createServer(app);
var port = process.env.PORT || 3000;


sockets(server);

middleware(app, express);

server.listen(port, function() {
  console.log('Listening on port1 ' + server.address().port);
});

module.exports = app;
