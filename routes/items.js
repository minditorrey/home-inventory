'use strict';

var express = require('express');
var router = express.Router();

var Item = require('../models/item');



// actual routes to get & send
router.route('/')
	.get((req, res) => {
	//db.run was be calling this??
		Item.get((err, items) => {
			if(err) {
				return res.status(400).send(err);
			}
			res.send(items);
		});
	})

	.post((req, res) => {
	//db.run will be calling this
	// req.body (data object)
	console.log('POST');
		console.log(req.body);
		Item.create(req.body, (err, result) => {
			if(err) {
				console.log(err)
				return res.status(400).send(err);
			}
			console.log('result', result);
			res.send();
		});
	});

	
module.exports = router;