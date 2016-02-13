'use strict';
var
  express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  parser = require('body-parser');

app.use(parser.json());
app.use(express.static(__dirname + '/public'))

app.get('/api/projects', function (req, res, next) {
  res.json('PONG');
  return next();
});

app.post('/api/projects', function (req, res, next) {
  res.status(404).json('NotFound');
  return next();
});

app.get('/api/projects/:id spec', function (req, res, next) {
  res.status(400).json('BadRequest');
  return next();
})

app.delete('/api/projects/:id',function(req,res,next){
	res.status(200).jspm('OK');
	return next();
})


app.listen(port, function () {
  console.log('Server running with port', port);
});
