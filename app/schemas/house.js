var mongoose = require('mongoose');

var HouseSchema = new mongoose.Schema({
	userId: String,
	houseType: String,
	roomType: String,
	peopleNum: Number,
	address: {
		city: String,
		state: String,
		road: String
	},
	area: Number,
	bedroom: Number,
	wc: Number,
	money: Number,
	facilities: {
		necessary: Boolean,
		tv: Boolean,
		airConditioner: Boolean,
		heat: Boolean,
		kitchen: Boolean,
		wifi: Boolean,
		washer: Boolean,
		bathroom: Boolean
	},
	special: {
		smoking: Boolean,
		pets: Boolean,
		party: Boolean,
		bodyBuilder: Boolean,
		fireExtinguisher: Boolean,
		barrierFree: Boolean
	},
	headline: String,
	description: String,
	meta: {
		createAt: {
			type: Date,
			default: Date.now()
		},
		updateAt: {
			type: Date,
			default: Date.now()
		}
	}
});

HouseSchema.pre('save', function(next) {
	var user = this;

	if (this.isNew) {
		this.meta.createAt = this.meta.updateAt = Date.now();
	} else {
		this.meta.updateAt = Date.now();
	}
	next();
});

module.exports = HouseSchema;
