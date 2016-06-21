'use strict';


function getForecast() {
    $.ajax({
        url: '/forecast/2643744',
        dataType: 'json'
    })
    .done(function(data) {
        console.log(data);
    });

}

getForecast();