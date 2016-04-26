'use strict';

var express = require('express');
var router = express.Router();

var Room = require('../models/room');


// actual routes to get & send
router.route('/')
	.get((req, res) => {
	//db.run was be calling this??
		Room.get((err, rooms) => {
			if(err) {
				return res.status(400).send(err);
		}
		res.send(rooms);
	});
})

	.post((req, res) => {
	//db.run will be calling this
	//req.body (data object)
		Room.create(req.body, err => {
		if(err) {
			return res.status(400).send(err);
		}
		res.send();
		});
	});

	
module.exports = router;