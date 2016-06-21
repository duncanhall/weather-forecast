'use strict';

angular.module('weatherForecast').component('oneDayForecast', {
    templateUrl: 'views/one-day-forecast.html',
    bindings: {
        forecast: '='
    }
});