'use strict';

/**
 *
 * @param data
 * @returns {{timestamp: number, time: string, temp: *, humidity: *, title: *, icon: string}}
 */
function format(data) {

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

module.exports = {
    format: format
};
