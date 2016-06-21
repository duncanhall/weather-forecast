'use strict';

var bluebird = require('bluebird');
var request = bluebird.promisify(require('request'));
var API_KEY = '856add1ae87b1ec3d33a90ab024c61c0';
var forecast = require('./forecast');
var currentDay = -1;

/**
 *
 * @param req
 * @param res
 */
function getForecast(req, res) {
    var location = req.params.locationId;
    request({
        url: 'http://api.openweathermap.org/data/2.5/forecast?mode=json&units=metric&appid=' + API_KEY + '&id=' + location,
        json: true,
        method: 'GET'
    }).then(function(result) {
        if (result.body.cod !== "200") {
            res.send(500);
        } else {
            var data = result.body;
            var days = data.list.map(forecast.format).reduce(listItemByDay, []);
            res.json(days)
        }
    });
}

/**
 *
 * @param currentList
 * @param nextItem
 * @returns {*}
 */
function listItemByDay(currentList, nextItem) {
    var date = new Date(nextItem.timestamp);
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
