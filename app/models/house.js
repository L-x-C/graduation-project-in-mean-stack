var mongoose = require('mongoose');
var HouseSchema = require('../schemas/house');
var House = mongoose.model('House', HouseSchema);

module.exports = House;