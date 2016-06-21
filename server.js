'use strict';

var express = require('express');
var app = express();
var path = require('path');
var routes = require(path.resolve('app/routes'));
var PORT = (process.env.PORT || 3000);

app.use(routes);

app.listen(PORT, function() {
    console.log('Server started on 3000');
});
