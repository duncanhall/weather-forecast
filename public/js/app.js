'use strict';

var app = angular.module('weatherForecast', []);

app.controller('mainCtrl', function($scope, $http) {
    $http.get('/forecast/2643744').then(function (response) {
        $scope.forecasts = response.data;
    });
});
