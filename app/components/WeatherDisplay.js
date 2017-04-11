var React = require('react');
var Day = require('./Day');

class WeatherDisplay extends React.Component {
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