var React = require('react');
var api = require ('../utils/api');

//ELEMENTS OF A COMPONENT
//1.state
//2.lifecycle events
//3.ui

class Day extends React.Component {

    render() {
        return (
            <div className='day'>
                <img src={'http://placehold.it/140x100'} />
                <h2> DAY, DATE 1 </h2>
            </div>
        )
    }
}

module.exports = Day;