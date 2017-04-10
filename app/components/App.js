var React = require('react');
var Main = require('./Main');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Nav = require('./Nav');
var WelcomePage = require ('./WelcomePage');
var WeatherDisplay = require ('./WeatherDisplay');

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className='container'>
                <Nav />
                <Switch>
                    <Route exact path='/' component={WelcomePage} />
                    <Route path='/main' component={Main} />
                    <Route path='/weatherdisplay' component ={WeatherDisplay} />
                    <Route render={function () {
                        return <p> Not Found </p>
                    }} />
                </Switch>
                </div>
            </Router>
         )
    }
}

module.exports = App;