var React = require('react');
var Menu = require('./menu');

module.exports = React.createClass({
	render: function() {
		return <header className="jumbotron">
					<h1>Hello World</h1>
					<Menu menu={this.props.menu} />
				</header>
	}
});