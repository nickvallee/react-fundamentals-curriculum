var axios = require('axios');

var apiKey = 'a2602ce3c27ce3d3f5a22ff05e977792';

/*var city = 'Montreal';*/

module.exports = {
    fetchWeather: function (city) {
        var encodedURI = window.encodeURI('http://api.openweathermap.org/data/2.5/weather?q='+ city +'&type=accurate&APPID='+ apiKey);

        return axios.get(encodedURI)
            .then(function(response) {
                return response.data;
            });
    }
};
