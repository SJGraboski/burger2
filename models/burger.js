// require Sequelize
var Sequelize = require('sequelize');
// make sequelize object using connection export
var sequelize = require('../config/connection.js');

// make burger model
var Burger = sequelize.define("burger", {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	burger_name: {
		type: Sequelize.STRING,
	},
	devoured: {
		type: Sequelize.BOOLEAN
	},
	date: {
		type: Sequelize.DATE
	}
}, {
		timestamps: false
})

// sync with DB
Burger.sync();

// export burger functions
module.exports = Burger;