const mongoose = require('mongoose');
const Schema = mongoose.Schema;


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

var Search = mongoose.model('Search', searchSchema);

module.exports = Search;
