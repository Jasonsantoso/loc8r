var mongoose = require('mongoose');

var reviewSchema = new mongoose.Schema({
	author: String,
	rating: {type: Number, "default": 0, min: 0, max: 5},
	reviewText: String,
	createdOn: {type: Date, default: Date.now}
});

var openingTimeSchema = new mongoose.Schema({
	days: {type: String, required: true},
	opening: String,
	closing: String,
	closed: {type: Boolean, required: true}
});

var locationSchema = new mongoose.Schema({ 
	name: {type: String, required: true},
	rating: {type: Number, "default": 0, min: 0, max: 5},
	address: String,
	facilities: [String],
	coords: {type: [Number], index: '2dsphere', required: true},
	openingTimes: [openingTimeSchema],
	reviews: [reviewSchema]
});

mongoose.model('Location', locationSchema);


