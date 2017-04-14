var React = require('react');
var Day = require('./Day');

class DayContainer extends React.Component {
    render () {
        return (
                <div className="day-container">
                    <Day />
                    <Day />
                    <Day />
                    <Day />
                    <Day />
                </div>
            )
    }
}

module.exports = DayContainer;