'use strict';

var express = require('express');
var router = express.Router();

// var Item = require('../models/item');


router.get('/', (req, res) => {
	res.send('all the items');
})
//actual routes to get & send
// router.route('/')
// 	.get((req, res) => {
// 	//db.run will be calling this
// 		Item.get((err, items) => {
// 			if(err) {
// 				return res.status(400).send(err);
// 		}
// 		res.send(items);
// 	});
// })

// 	.post((req, res) => {
// 	//db.run will be calling this
// 	//req.body (data object)
// 		Item.create(req.body, err => {
// 		if(err) {
// 			return res.status(400).send(err);
// 		}
// 		res.send();
// 		});
// 	});

	
module.exports = router;