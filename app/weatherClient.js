'use strict';

var bluebird = require('bluebird');
var request = bluebird.promisify(require('request'));

var API_KEY = '856add1ae87b1ec3d33a90ab024c61c0';


function getForecast(req, res) {

    var location = req.params.locationId;

    request({
        url: 'http://api.openweathermap.org/data/2.5/forecast?mode=json&appid=' + API_KEY + '&id=' + location,
        json: true,
        method: 'GET'
    }).then(function(result) {
        if (result.body.cod !== "200") {
            res.send(500);
        } else {
            res.json(result.body)
        }
    });
}

module.exports = {
    getForecast: getForecast
};
