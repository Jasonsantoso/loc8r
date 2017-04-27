var mongoose = require('mongoose');
var locationSchema = new mongoose.Schema({ 
	name: {type: String, required: true},
	rating: {type: Number, "default": 0, min: 0, max: 5},
	address: String,
	facilities: [String]
});

