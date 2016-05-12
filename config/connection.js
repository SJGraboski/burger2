// require mysql
var mysql = require('mysql');
var Sequelize = require('sequelize');

// specify connection
var source = {
	local: {
		port: 3306,
		host: 'localhost',
		database: 'burgers_db',
		user: 'root',
		password: ''
	},
	heroku: {
		port: 3306,
		host: 'l9dwvv6j64hlhpul.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
		database: 'i0iuqapufsqpar1r',
		user: 'xqsognnmdnhkwsod',
		password: 'asqkg3pcf7nf9w7m'
	}
}

// select the connection we'll use
var bonafide = source.heroku;

// connect the source to sequelize
var sequelize = new Sequelize(bonafide.database, bonafide.user, bonafide.password, {
	host: bonafide.host,
	dialect: 'mysql',

	pool: {
		min: 0,
		max: 5,
		idle: 10000
	}

})


// export connection to whatever requires this file
module.exports = sequelize;