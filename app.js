var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var fs = require('fs');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var app = express();

var dbUrl = 'mongodb://localhost/lxc';
mongoose.connect(dbUrl);

// models loading
var models_path = __dirname + '/app/models';
var walk = function(path) {
	fs.readdirSync(path)
		.forEach(function(file) {
			var newPath = path + '/' + file;
			var stat = fs.statSync(newPath);

			if (stat.isFile()) {
				if (/(.*)\.(js|coffee)/.test(file)) {
					require(newPath);
				}
			} else if (stat.isDirectory()) {
				walk(newPath);
			}
		});
};
walk(models_path);

app.set('view engine', 'html');
app.engine('html', require('ejs').__express);

app.set('views', path.join(__dirname, '/public/views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded());

require('./config/routes')(app);

app.listen(port);
