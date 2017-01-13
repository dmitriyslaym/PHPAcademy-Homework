var React = require('react');
var ThumbnailList = require('./thumbnail-list');
var Header = require('./header');
var Footer = require('./footer');

module.exports = React.createClass({
	render: function() {
		var menu = this.props.menu;

		return <div>
					<Header menu={menu} />
					<ThumbnailList thumbnailData={this.props.thumbnailData} />
					<Footer contacts={this.props.contacts} menu={menu} />
				</div>
	}
});