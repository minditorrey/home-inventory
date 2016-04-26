'use strict';

var db = require('../config/db');

db.query(`CREATE TABLE IF NOT EXISTS items (
	itemID INTEGER PRIMARY KEY AUTO_INCREMENT,
	description TEXT,
	category TEXT,
	roomID INTEGER,
	itemValue INTEGER
	)`);

//methods

exports.get = function(cb) {
	db.query('SELECT * FROM items', cb)
};

exports.create = function(item, cb) {
	//validation
	if(!item.itemValue | !item.description | ! item.category | !item.roomID) {
		return cb('Please fill out all fields.')
	}



	db.query("INSERT INTO items SET ?", item, cb);
};
