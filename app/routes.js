'use strict';

var express = require('express');
var router = express.Router();
var weatherClient = require('./weatherClient');

router.get('/forecast/:locationId', weatherClient.getForecast);

module.exports = router;
