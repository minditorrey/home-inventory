'use strict';

var express = require('express');
var router = express.Router();

//individual api controller routes
router.use('/items', require('./items'));


module.exports = router;