var mongoose = require('mongoose');
var House = mongoose.model('House');

exports.publish = function(req, res) {
	var _house = req.body.house;
	house = new House(_house);
	house.save(function(err, house) {
		if (err) {
			console.log(err);
		}
		res.redirect('/');
	});
};