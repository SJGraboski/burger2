// require mysql
var mysql = require('mysql');

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

var connection = mysql.createConnection(source.heroku);

// make the connection
connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

// export connection to whatever requires this file
module.exports = connection;