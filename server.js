var express = require('express');
var path = require('path');
// var bodyParser = require('body-parser');
var app = express();

app.use(express.static(path.join(__dirname, './client')));
app.listen(8000, function() {
	console.log('calculations on 8000');
});