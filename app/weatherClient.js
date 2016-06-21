'use strict';

var bluebird = require('bluebird');
var request = bluebird.promisify(require('request'));
var API_KEY = '856add1ae87b1ec3d33a90ab024c61c0';
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
            var forecast = result.body;
            var days = forecast.list.map(toSimpleInfo).reduce(listItemByDay, []);
            res.json(days)
        }
    });
}

/**
 *
 * @param data
 * @returns {{timestamp: number, time: string, temp: *, humidity: *, title: *, icon: string}}
 */
function toSimpleInfo(data) {

    var timestamp = data.dt * 1000;
    var friendlyTime = new Date(timestamp);

    return {
        timestamp: timestamp,
        time: friendlyTime.toLocaleTimeString('en-GB', {hour:'2-digit', minute:'2-digit'}),
        temp: data.main.temp,
        humidity: data.main.humidity,
        title: data.weather[0].main,
        description: data.weather[0].description,
        icon: 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png'
    }
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
