'use strict';

var bluebird = require('bluebird');
var request = bluebird.promisify(require('request'));
var API_KEY = '856add1ae87b1ec3d33a90ab024c61c0';

var currentDay = -1;


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
            var forecast = result.body;
            var days = forecast.list.reduce(listItemByDay, []);
            res.json(days)
        }
    });
}


function listItemByDay(currentList, nextItem) {
    var date = new Date(nextItem.dt * 1000);
    if (date.getDay() !== currentDay) {
        currentList.push({day:date.toLocaleDateString('en-GB', {weekday:'long'}), list:[]});
    }
    currentList[currentList.length - 1].list.push(nextItem);
    currentDay = date.getDay();
    return currentList;
}


module.exports = {
    getForecast: getForecast
};
