/**
 * http://usejsdoc.org/
 */

var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser');
var Product = require('../model/Product');

router.get("/", function(req, res, next) {
	// Non blocking IO i.e load all products from DB
	Product.find(function(err, products) {
		if (err)
			next(err);
		// View
		res.render('pm', {
			products : products
		});
		// 
		// res.json(products);
	});
});

router.get("/delete/:id", function(req, res, next) {
	Product.remove({
		_id : req.params.id
	}, function(err) {
		if (err)
			next(err);
		res.redirect('/products');
	});
});

router.get("/edit/:id", function(req, res, next) {
	Product.findOne({
		_id : req.params.id
	}, function(err, product) {
		if (err)
			next(err);
		res.render('pm', {
			product : product
		});
	});
});

var bp = bodyParser.urlencoded({
	extended : false
})
router.post("/save", bp, function(req, res, next) {
	var productForm = req.body;
	var product = new Product(productForm); // new model with form-data
	product.save(function(err, product) {
		res.redirect('/products');
	}); // Non Blocking IO
});

module.exports = router