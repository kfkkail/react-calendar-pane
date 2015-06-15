import React from 'react';
import Calendar from '../';


var Example = React.createClass({

    onSelect: function (date) {
        console.info('onSelect', date);
    },

    render: function() {
        return (
            <Calendar onSelect={this.onSelect} />
        );
    }

});

React.render(<Example />, document.body);