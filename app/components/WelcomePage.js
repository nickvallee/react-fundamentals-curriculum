var React = require('react');
var Link = require('react-router-dom').Link;
var WeatherSearch = require('./WeatherSearch');

class WelcomePage extends React.Component {
    render() {
        return (
            <div className='welcome-page'>
                <h1 className='welcome-page__header'> Enter a City and State </h1>

                <div className='welcome-page__search'>
                 <WeatherSearch />
                </div>


            </div>
            )
    }
}

module.exports = WelcomePage;