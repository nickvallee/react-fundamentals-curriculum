var React = require('react');
var NavLink = require('react-router-dom').NavLink;
var WeatherSearch = require('./WeatherSearch');

function Nav() {
    return (
        <div className="nav">
            <h1 className="nav__header">
                Clever Title
            </h1>
            <ul className='nav__list'>
                <li>
                    <NavLink  exact activeClassName='active' to='/'>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName='active' to='/weatherdisplay'>
                        Weather
                    </NavLink>
                </li>

                <li>
                    <NavLink activeClassName='active' to='/main'>
                        Main
                    </NavLink>
                </li>
            </ul>
            <WeatherSearch />
        </div>
        )

}

module.exports = Nav;