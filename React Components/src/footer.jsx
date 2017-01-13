var React = require('react');
var Menu = require('./menu');

module.exports = React.createClass({
	render: function() {
		return <footer>
					<div className="clearfix"></div>
					<h2>My footer</h2>
					<Menu menu={this.props.menu} />
					<div className="well">
						<p>{this.props.contacts.adress}</p>
						<p>{this.props.contacts.tel}</p>
					</div>
				</footer>
	}
});