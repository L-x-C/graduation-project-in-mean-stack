var express = require('express');
var path = require('path');
var mongoose = require('mongoose')
var port = process.env.PORT || 3000;
var app = express();

var dbUrl = 'mongodb://localhost/lxc';
mongoose.connect(dbUrl);

app.set('view engine', 'html');
app.engine('html', require('ejs').__express);

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));


require('./config/routes')(app)

app.listen(port)

