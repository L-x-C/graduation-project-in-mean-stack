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
	dataModel.find(function(err,docs) {
		console.log(err,docs);
	})
}
exports.save = function(req,res) {
	var data = new dataModel({
		number: req.body.data
	});

	data.save();
}