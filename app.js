'use strict';

const PORT = process.env.PORT || 3000;

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var Item = require('./models/item');
var Room = require('./models/room');

var app = express();

//plug in middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'ejs')

//plug in router
app.use('/api', require('./routes/api'));

app.get('/', (req, res) => {
	
	Item.get((err, items) => {

		if(err) {
		console.log("error", err);
		res.render('error', {error: err});
		} else {
			console.log("items", items);
		res.render('home', {items: items});
		}
	})

	// Room.get((err, rooms) => {
	// 	if(err) {
	// 	res.render('error', {error: err});
	// 	} else {
	// 	res.render('home', {rooms: rooms});
	// 	}
	// })
})

app.listen(PORT, err => {
	console.log(err || `Server listening on port ${PORT}`);
});