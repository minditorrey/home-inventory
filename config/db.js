'use strict';

var mysql = require('mysql');

var db = mysql.createConnection({
  host: 'localhost',
  user: 'your_user',
  password: 'some_secret',
  database: 'home_inventory_database'
})

db.connect(function(err) {
  if (err) throw err
  console.log('You are now connected...')
})

'