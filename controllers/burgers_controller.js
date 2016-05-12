// require express
var express = require('express');

// bring in the model
var Burger = require('../models/burger.js');

// Routes
module.exports = function(app) {
	// API ROUTES
	// ===========
	// uneaten burgers
	app.get("/api/uneaten", function(req, res) {
		Burger.findAll({
			where: {
				devoured: {
					$not: true
				}
			}
		}).then(function(result){
			res.json(result);
		})
	}),

	// eaten burger
	app.get("/api/eaten", function(req, res) {
		Burger.findAll({
			where: {
				devoured: true
			}
		}).then(function(result){
			res.json(result);
		})
	}),


	// add a burger
	app.post("/api/add", function(req, res) {
		// grab the burger obj from the post
		var newBurger = req.body;
		// make a new burger
		Burger.create({
			burger_name: newBurger.name,
			devoured: false,
			date: new Date()
		}).then(function(result){
			res.end("{'success' : 'Updated Successfully', 'status' : 200}");
		})
	}),

	// eat a burger
	app.put("/api/eat", function(req, res) {
		// grab the burger obj from the put
		var eatBurger = req.body;
		// eat the burger
		Burger.update({
			devoured: true
		},
		{
			where: {
				burger_name: eatBurger.name
			}
		}).then(function(result){
			res.end("{'success' : 'Updated Successfully', 'status' : 200}");
		})
	}),

	// HTML ROUTES
	// ===========

	// when viewing root of local host, show index.html
	app.get('/', function(req, res) {
		res.render("../views/index.html");
	})
}

