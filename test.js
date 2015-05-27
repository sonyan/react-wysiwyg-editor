'use strict';

var React = require('react'),
	Example = React.createFactory(require('./Example.jsx')),
	content = document.getElementById('content');

React.render(Example(), content);