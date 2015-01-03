var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var	dataSchema = new Schema({
	_id: String,
	number: Number
});
mongoose.connect('mongodb://localhost/nodejs');
exports.dataModel = mongoose.model('dataModel', dataSchema);