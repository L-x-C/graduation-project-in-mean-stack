var mongoose = require('mongoose');
var House = mongoose.model('House');

exports.publish = function(req, res) {
	var _house = req.body.house;
	house = new House(_house);
	house.save(function(err) {
		if (err) {
			console.log(err);
		} else {
			res.send('suc');
		}
	});
};
exports.get = function(req, res) {
	House.find({}, function(err, data) {
		res.send(data);
	})
};
exports.getDetail = function(req, res) {
	var houseId = req.body.id;
	House.findById(houseId, function(err, data) {
		res.send(data);
	})
};
exports.saveImg = function(req, res) {
	res.send(req.files);
};
exports.search = function(req, res) {
	var city = req.body.city;
	House.find({address: {city: '上海市','state':'杨浦区','road':'国定东路200号'}}, function(err, data) {
		console.log(data);
	})
};