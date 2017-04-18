var React = require('react');
var Day = require('./Day');
var api = require('../utils/api');

class WeatherDisplay extends React.Component {
    constructor() {
        super();
        this.state = {
            inputedCity: "Montreal",
            weather: null
        };

        this.updateWeather = this.updateWeather.bind(this);
    }

    componentDidMount() {
        api.fetchWeather(this.state.InputedCity)
            .then(function (weather) {
                console.log(weather)
            })
    }

    updateWeather(city) {
        this.setState(function () {
            return {
                InputedCity: city,
            }
        });
    }

    render() {
        return (
            <div className="weather-display">
                <Day />
                <Day />
                <Day />
            </div>
            )
    }
}

module.exports = WeatherDisplay;