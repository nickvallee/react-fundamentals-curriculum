var React = require('react');
var Link = require('react-router-dom').Link;
var WeatherSearch = require('./WeatherSearch');

class WelcomePage extends React.Component {
    render() {
        return (
            <div className='home-container'>
                <h1> Enter a City and State </h1>

                <WeatherSearch />


            </div>
            )
    }
}

module.exports = WelcomePage;