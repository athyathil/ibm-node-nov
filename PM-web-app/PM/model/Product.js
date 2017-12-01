/**
 * http://usejsdoc.org/
 */

var mongoose = require('mongoose');

var ProductSchema = mongoose.Schema({
	id : String,
	name : String,
	price : Number,
	makeDate : Date,
	description : String
});

var Product = mongoose.model('Product', ProductSchema, "Product");

module.exports = Product;