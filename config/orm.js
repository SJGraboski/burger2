// require connection file
var connection = require('./connection.js');

// make orm object
var orm = {
	// get all non-devoured burgers
	getUneaten : function(callback) {
		// get uneaten starting with the earliest
		s = "SELECT * FROM burgers WHERE devoured = FALSE ORDER BY date ASC";
		// make query
		connection.query(s, function(err, result){
			if (err) throw err;
			// callback
			callback(result);
		}) 
	},
	// get all devoured burgers
	getEaten : function(callback) {
		// get eaten starting with the latest
		s = "SELECT * FROM burgers WHERE devoured = TRUE ORDER BY date DESC";
		// make query
		connection.query(s, function(err, result){
			if (err) throw err;
			// calback
			callback(result);
		}) 
	},
	// add a burger
	addBurger : function(burger) {
		// add a burger with the appropos values
		s = "INSERT INTO burgers " +
					"VALUES " +
						"(null, ?, FALSE, CURRENT_TIMESTAMP)";
		// make query
		connection.query(s, [burger], function(err, result){
			if (err) throw err;
		})
	},

	// devour a burger
	eatBurger : function(burger) {
		// eat the burger matching the param
		s = "UPDATE burgers " + 
				"SET devoured=TRUE " +
				'WHERE burger_name=?';
		// make query
		connection.query(s, [burger], function(err, result){
			if (err) throw err;
		})
	}
}

// export the object relational mapper
module.exports = orm;