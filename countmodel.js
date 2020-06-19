const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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



var Blogcounts = mongoose.model('Blogcount', blogcountSchema);

module.exports = Blogcounts;
