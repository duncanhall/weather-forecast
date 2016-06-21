'use strict';

var path = require('path');
var express = require('express');
var router = express.Router();
var weatherClient = require('./weatherClient');

router.use('/', express.static(path.resolve('public')));
router.get('/forecast/:locationId', weatherClient.getForecast);

module.exports = router;
