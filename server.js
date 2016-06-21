'use strict';

var express = require('express');
var app = express();
var path = require('path');
var routes = require(path.resolve('app/routes'));

app.use(routes);

app.listen(3000, function() {
    console.log('Server started on 3000');
});
