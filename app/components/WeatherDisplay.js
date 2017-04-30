var React = require('react');
var DayContainer = require('./DayContainer');
var Day = require('./Day');
var api = require('../utils/api');

class WeatherDisplay extends React.Component {
    constructor() {
        super();
        this.state = {
            inputedCity: "Montreal",
            currentCity: "your butt",
            weather: null
        };

        this.updateWeather = this.updateWeather.bind(this);
    }

    componentDidMount() {
        this.updateWeather(this.state.inputedCity);
    }



    updateWeather(city) {
        this.setState(function () {
            return {
                InputedCity: city,
                weather: null
            }
        });

        api.fetchWeather(city)
            .then(function (weather) {
                console.log(weather);
            })
    }

    render() {
        return (
            <div className="weather-display">
                <h1 className="weather-display__header">
                    Weather forcast for {this.state.currentCity}
                </h1>
                <DayContainer />
            </div>
            )
    }
}

module.exports = WeatherDisplay;