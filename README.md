# react-wysiwyg-editor
A bootstrap-style react component for wysiwyg editor

I need a wysiwyg editor that play nicely with the way data flow works in react, especially react way of dealing with form. Most of wysiwyg editor implementations out there are jQuery plugins. Of course, you can use them with react application, but it takes more work to make them play well with react component. This is a simple react component, with 184 lines of code, that works like react ```<input>``` component. 

## Demo
https://plnkr.co/edit/sSJfG1L1izDY8BJ1fWpF?p=preview

## Install

```sh
npm install react-wysiwyg-editor
or
bower install react-wysiwyg-editor
```

## Usage
Font-awesome is used for toolbar icons, so make sure you include its reference inside head tag

Example:
```html
<html>
	<head>
		...
		<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet" />
	</head>
	<body>
	....
	</body>
</html>
```

Simply require it to use it:

```javascript
var EditableDiv = require('react-wysiwyg-editor');
```

Specify initial content in getInitialState:

```javascript
getInitialState: function() {
	return {
		content: 'initial content'
	};
}
```

Define change handler:

```javascript
handleContentChange: function(e) {
	this.setState({content: e.target.value});
}
```

Compose it in render method:

```html
render: function() {
	// Customize your editor with css rules
	var editorStyle = {
		overflow: 'auto',
		width: 300,
		height: 100,
		maxHeight: 100
	}
	return(
		<div className="form-group">
			<label>Comment:</label>
			<EditableDiv style={editorStyle} content={this.state.content} onChange={this.handleContentChange} />
		</div>
	);
}
```

That's it for the API! For complete example, please see Example.jsx

## License

MIT.

