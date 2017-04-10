var React = require('react');
var Link = require('react-router-dom').Link;

class WelcomePage extends React.Component {
    render() {
        return (
            <div className='home-container'>
                <h1> Enter a City and State </h1>

                <Link className='button' to='/weatherdisplay'>
                    Get Weather
                </Link>
            </div>
            )
    }
}

module.exports = WelcomePage;