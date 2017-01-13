var React = require('react');

module.exports = React.createClass({
	render: function() {
		var menuLinks = this.props.menu.map(function(link) {
			return <li role="presentation"><a href="#">{link}</a></li>
		});
		return <ul className="nav nav-pills">{menuLinks}</ul>
	}
});