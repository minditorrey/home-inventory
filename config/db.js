'use strict';

var mysql = require('mysql');

var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'something',
  database: 'home_inventory_database'
})

db.connect();

module.exports = db;
