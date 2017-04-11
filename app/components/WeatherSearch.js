var React = require('react');
var Link = require('react-router-dom').Link;

class WeatherSearch extends React.Component {
        render() {
            return (
            <div className='weather-search'>
                <form>
                    <input
                        className='weather-search__input'
                        id='location'
                        placeholder='enter city and state'
                        type='text'
                    />
                    <Link className='button' to='/weatherdisplay'>
                    Get Weather
                </Link>
                </form>
            </div>
            )
        }
}

module.exports = WeatherSearch;