'use strict';

var React = require('react'),
	EditableDiv = require('./EditableDiv.jsx');	

module.exports = React.createClass({
	displayName: 'Example',

	getInitialState: function() {
		return {
			content: '' // initial content
		};
	},

	handleContentChange: function(e) {
		this.setState({content: e.target.value});
	},

	render: function() {
		var editorStyle = {
			overflow: 'auto',
			width: 300,
			height: 100,
			maxHeight: 100
		}
		return(
			React.createElement("div", {className: "form-group"}, 
				React.createElement("label", null, "Comment:"), 
				React.createElement(EditableDiv, {style: editorStyle, content: this.state.content, onChange: this.handleContentChange})
			)
		);
	}
});