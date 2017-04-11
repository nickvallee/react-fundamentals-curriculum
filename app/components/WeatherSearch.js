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
                    <p> This is the noraml button </p>
                    <button
                        className='button weather-search__button'
                        type='submit'
                        >
                        Get Weather
                    </button>

                    <p> this is the Link </p>
                    <Link className='button' to='/weatherdisplay'>
                    Get Weather
                </Link>
                </form>
            </div>
            )
        }
}

module.exports = WeatherSearch;