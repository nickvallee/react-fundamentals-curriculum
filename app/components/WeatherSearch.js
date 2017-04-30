var React = require('react');
var ReactRouter = require('react-router-dom');
var Link = require('react-router-dom').Link;
var NavLink = require('react-router-dom').NavLink;
var api = require('../utils/api');


class WeatherSearch extends React.Component {
        constructor() {
            super();
            this.state = {
                inputedCity: "Montreal",
                weather: null
            };

            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }

        componentDidMount() {
        }

        //fires when input changes
        getWeather(city) {

/*
            this.setState(function () {
                return {
                    inputedCity: city,
                    weather: null
                }
            });

*/

            api.fetchWeather(city)
                        .then(function (weather) {
                    console.log(weather);
            })
        }

        handleChange(event) {
            this.setState({inputedCity: event.target.value});
        }

        handleSubmit(event) {
            this.getWeather(this.state.inputedCity);

            event.preventDefault();
        }

        render() {
            return (
            <div className='weather-search'>
                <form>
                    <input
                        className='weather-search__input'
                        id='location'
                        placeholder='enter city and state'
                        type='text'
                        value={this.state.inputedCity}
                        onChange={this.handleChange}
                        />
                    <Link to='/weatherdisplay' className='button' onClick={this.handleSubmit}>
                    Get Weather
                    </Link>
                </form>
            </div>
            )
        }
}

module.exports = WeatherSearch;