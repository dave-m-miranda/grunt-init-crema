'use strict';

var port = 3000;
var express = require('express');
var bar = require('../client/js/shared/bar');
var app = express();

app.get('/api/bar', function (req, res) {
	res.send(bar.bar(req.query.str));
});

app.use(express.static(__dirname + '/../client'));

app.listen(port);
console.log('Server started: http://localhost:%s', port);