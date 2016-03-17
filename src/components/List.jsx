/**
 * Created by eakbaba on 3/17/16.
 */
var React = require('react');
var ListItem = require('./ListItem.jsx');

var ingredients = [{"id":1, "text":"bus"}, {"id":2, "text":"car"},{"id":3, "text":"bicycle"}];

var List = React.createClass({
    render: function() {
        var listItems = ingredients.map(function(item){
            return <ListItem key={item.id} ingredient={item.text} />;
        });

        return (<ul>{listItems}</ul>);
    }
});

module.exports = List;