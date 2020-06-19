const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema for saving search queries and counting them
const searchSchema = new Schema({
	terms: {
		type: String
	},
	count: {
		type: Number
	},
	route: {
		type: String
	}
},{
	timestamps: true
});

//Schema for counting blog views
const blogcountSchema = new Schema({
	blog: {
		type: String
	},
	count: {
		type: Number
	},
},{
		timestamps: true
});
