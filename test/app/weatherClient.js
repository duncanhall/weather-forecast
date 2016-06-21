var assert = require('assert');
var path = require('path');


describe('forecast', function() {

    var forecast;
    var cannedData;

    beforeEach(function() {
        forecast = require(path.resolve('app/forecast'));
        cannedData = require(path.resolve('test/data/response.json'));
    });

    describe('format', function() {

        var result;

        beforeEach(function() {
            result = forecast.format(cannedData);
        });

        it('Should convert the timestamp to milliseconds', function() {
            assert.equal(result.timestamp, cannedData.dt * 1000);
        });

        it('Should create a friendly time string', function() {
            assert.equal(result.time, '10:00 PM');
        });

        it('Should set the temperature value', function() {
            assert.equal(result.temp, cannedData.main.temp);
        });

        it('Should set the humidity value', function() {
            assert.equal(result.humidity, cannedData.main.humidity);
        });

        it('Should extract a title value', function() {
            assert.equal(result.title, cannedData.weather[0].main);
        });

        it('Should extract a description value', function() {
            assert.equal(result.description, cannedData.weather[0].description);
        });

        it('Should set the icon URl', function() {
            assert.equal(result.icon, 'http://openweathermap.org/img/w/' + cannedData.weather[0].icon + '.png');
        });
    });
});

