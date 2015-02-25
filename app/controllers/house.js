var mongoose = require('mongoose');
var House = mongoose.model('House');

exports.publish = function(req, res) {
	console.log(req.body);
}