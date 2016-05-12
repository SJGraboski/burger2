// require the orm
var orm = require('../config/orm.js');

// make burger functions
var burger = {
	// code populates left side with uneaten burger info
	uneatenDis: function (callback) {
		orm.getUneaten(function(data){
			callback(data);
		})
	},

	// code populates right side with uneaten burger info
	eatenDis: function(callback) {
		orm.getEaten(function(data){
			callback(data);
		})
	},

	// code makes a burger
	addNew: function(burger) {
		orm.addBurger(burger);
	},

	// code sets burger to eaten
	eatOne: function(burger) {
		orm.eatBurger(burger);
	}
}

// export burger functions
module.exports = burger;