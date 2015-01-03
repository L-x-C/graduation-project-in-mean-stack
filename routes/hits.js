var mongoose = require('mongoose');
var model = require('../models/data');
var dataModel = model.dataModel;

var hits = 0;
exports.count = function(req, res) {
	res.send(200, {
		hits: hits
	});
};
exports.registerNew = function(req, res) {
	hits++;
	res.send(200, {
		hits: hits
	});
};
exports.find = function(req,res) {
	console.log(req.body);
	dataModel.findById(req.body.name ,function(err,docs) {
		res.send(200, {
			data: docs
		})
	});
}
exports.save = function(req,res) {
	
	var data = new dataModel({
		_id: req.body.data[0],
		number: req.body.data[1]
	});

	data.save();
}
exports.init = function(req, res) {
	console.log("a");
	dataModel.findByIdAndRemove('lxc');
}