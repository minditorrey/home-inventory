'use strict'

var db = require('../config/db');

db.query(`CREATE TABLE IF NOT EXISTS room (
	roomID INTEGER,
	roomName TEXT
	)`);

//methods

exports.get = function(cb) {
	db.query('SELECT * FROM rooms', cb)
};

exports.create = function(room, cb) {
	//validation
	if(!room.roomID | !room.roomName) {
		return cb('Please fill out all fields.')
	}

	console.log('room:', room);


	db.query("INSERT INTO rooms SET ?", room, cb);
};