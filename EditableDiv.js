'use strict';

var React = require('react');

module.exports = React.createClass({
	displayName: 'EditableDiv',

	propTypes: {
		content: React.PropTypes.string.isRequired,
		onChange: React.PropTypes.func.isRequired
	},

	getInitialState: function() {
		// this is anti-pattern but we treat this.props.content as initial content
		return {html: this.props.content};
	},

	emitChange: function() {
		var newHtml = this.editor.innerHTML;

		this.setState({html: newHtml}, function() {
			this.props.onChange({
				target: {
					value: newHtml
				}
			});
		}.bind(this));
	},

	componentWillReceiveProps: function(nextProps) {
		this.setState({
			html: nextProps.content
		});
	},

	shouldComponentUpdate: function(nextProps) {
        return nextProps.content !== this.state.html;
    },

    execCommand: function(command, arg) {
    	document.execCommand(command, false, arg);
    },

	render: function() {
		var self = this;
		// customize css rules here
		var buttonSpacing = {marginRight: 2},
			toolbarStyle = {marginBottom: 3};

		return (
			React.createElement("div", null, 
				React.createElement("div", {style: toolbarStyle}, 

					/** feel free to customize buttons below. 
					for list of supported commands, please see https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand */
					React.createElement("div", {className: "btn-group", style: buttonSpacing}, 
						React.createElement("button", {
							className: "btn btn-default btn-xs dropdown-toggle", 
							type: "button", "data-toggle": "dropdown", 
							"aria-expanded": "true"}, 
							React.createElement("i", {className: "fa fa-paragraph"}), " ", React.createElement("i", {className: "fa fa-caret-down"})
						), 
						React.createElement("ul", {className: "dropdown-menu", role: "menu"}, 
							React.createElement("li", null, 
								React.createElement("a", {href: "javascript:;", onClick: this.execCommand.bind(this, 'formatBlock', 'P')}, 
									"Paragraph"
								), 
								React.createElement("a", {href: "javascript:;", onClick: this.execCommand.bind(this, 'formatBlock', 'BLOCKQUOTE')}, 
									"Block Quote"
								), 
								React.createElement("a", {href: "javascript:;", onClick: this.execCommand.bind(this, 'formatBlock', 'H1')}, 
									"Header 1"
								), 
								React.createElement("a", {href: "javascript:;", onClick: this.execCommand.bind(this, 'formatBlock', 'H2')}, 
									"Header 2"
								), 
								React.createElement("a", {href: "javascript:;", onClick: this.execCommand.bind(this, 'formatBlock', 'H3')}, 
									"Header 3"
								), 
								React.createElement("a", {href: "javascript:;", onClick: this.execCommand.bind(this, 'formatBlock', 'H4')}, 
									"Header 4"
								), 
								React.createElement("a", {href: "javascript:;", onClick: this.execCommand.bind(this, 'formatBlock', 'H5')}, 
									"Header 5"
								), 
								React.createElement("a", {href: "javascript:;", onClick: this.execCommand.bind(this, 'formatBlock', 'H6')}, 
									"Header 6"
								)
							)
						)
					), 

					React.createElement("div", {className: "btn-group btn-group-xs", role: "group", style: buttonSpacing}, 
						React.createElement("button", {type: "button", className: "btn btn-default", onClick: this.execCommand.bind(this, 'bold')}, 
							React.createElement("i", {className: "fa fa-bold"})
						), 
						React.createElement("button", {type: "button", className: "btn btn-default", onClick: this.execCommand.bind(this, 'italic')}, 
							React.createElement("i", {className: "fa fa-italic"})
						), 
						React.createElement("button", {type: "button", className: "btn btn-default", onClick: this.execCommand.bind(this, 'underline')}, 
							React.createElement("i", {className: "fa fa-underline"})
						), 
						React.createElement("button", {type: "button", className: "btn btn-default", onClick: this.execCommand.bind(this, 'strikeThrough')}, 
							React.createElement("i", {className: "fa fa-strikethrough"})
						), 

						React.createElement("div", {className: "btn-group", role: "group"}, 
							React.createElement("button", {
								className: "btn btn-default btn-xs dropdown-toggle", 
								type: "button", "data-toggle": "dropdown", 
								"aria-expanded": "true"}, 
								React.createElement("i", {className: "fa fa-text-height"}), " ", React.createElement("i", {className: "fa fa-caret-down"})
							), 
							React.createElement("ul", {className: "dropdown-menu", role: "menu"}, 
								React.createElement("li", null, 
									React.createElement("a", {href: "javascript:;", onClick: this.execCommand.bind(this, 'fontSize', 1)}, "1")
								), 
								React.createElement("li", null, 
									React.createElement("a", {href: "javascript:;", onClick: this.execCommand.bind(this, 'fontSize', 2)}, "2")
								), 
								React.createElement("li", null, 
									React.createElement("a", {href: "javascript:;", onClick: this.execCommand.bind(this, 'fontSize', 3)}, "3")
								), 
								React.createElement("li", null, 
									React.createElement("a", {href: "javascript:;", onClick: this.execCommand.bind(this, 'fontSize', 4)}, "4")
								), 
								React.createElement("li", null, 
									React.createElement("a", {href: "javascript:;", onClick: this.execCommand.bind(this, 'fontSize', 5)}, "5")
								), 
								React.createElement("li", null, 
									React.createElement("a", {href: "javascript:;", onClick: this.execCommand.bind(this, 'fontSize', 6)}, "6")
								), 
								React.createElement("li", null, 
									React.createElement("a", {href: "javascript:;", onClick: this.execCommand.bind(this, 'fontSize', 7)}, "7")
								)
							)
						)
					), 

					React.createElement("div", {className: "btn-group btn-group-xs", role: "group", style: buttonSpacing}, 
						React.createElement("button", {type: "button", className: "btn btn-default", onClick: this.execCommand.bind(this, 'insertOrderedList')}, 
							React.createElement("i", {className: "fa fa-list-ol"})
						), 
						React.createElement("button", {type: "button", className: "btn btn-default", onClick: this.execCommand.bind(this, 'insertUnorderedList')}, 
							React.createElement("i", {className: "fa fa-list-ul"})
						)
					), 

					React.createElement("div", {className: "btn-group", style: buttonSpacing}, 
						React.createElement("button", {
							className: "btn btn-default btn-xs dropdown-toggle", 
							type: "button", 
							"data-toggle": "dropdown", 
							"aria-expanded": "false"}, 
							React.createElement("i", {className: "fa fa-align-left"}), " ", React.createElement("i", {className: "fa fa-caret-down"})							
						), 
						React.createElement("ul", {className: "dropdown-menu", role: "menu"}, 
							React.createElement("li", null, 
								React.createElement("a", {href: "javascript:;", onClick: this.execCommand.bind(this, 'justifyLeft')}, "Align Left")
							), 
							React.createElement("li", null, 
								React.createElement("a", {href: "javascript:;", onClick: this.execCommand.bind(this, 'justifyRight')}, "Align Right")
							), 
							React.createElement("li", null, 
								React.createElement("a", {href: "javascript:;", onClick: this.execCommand.bind(this, 'justifyCenter')}, "Align Center")
							), 
							React.createElement("li", null, 
								React.createElement("a", {href: "javascript:;", onClick: this.execCommand.bind(this, 'justifyFull')}, "Align Justify")
							)
						)
					), 

					React.createElement("button", {
						type: "button", 
						className: "btn btn-default btn-xs", 
						onClick: this.execCommand.bind(this, 'removeFormat')}, 
						React.createElement("i", {className: "fa fa-eraser"})
					)
				), 

				React.createElement("div", Object.assign({
					ref: {function(el) { self.editor = el; }}, 
					className: "form-control"}, 
					this.props, 
					{contentEditable: "true", 
					dangerouslySetInnerHTML: {__html: this.state.html}, 
					onInput: this.emitChange}))
			)
		);
	}
});
