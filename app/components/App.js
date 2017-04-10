var React = require('react');
var Main = require('./Main');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Nav = require('./Nav');
var Battle = require('./Battle');

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className='container'>
                <Nav />
                    <Route path='/main' component={Main} />
                    <Route path='/battle' component ={Battle} />
                </div>
            </Router>
            )
    }
}

module.exports = App;