var React = require('react');
var connect = require('react-redux').connect;
var Link = require('react-router').Link;
const Menu = require('./components/menu')();

var Index = React.createClass({

	render: function() {
		return (
		<html>
			<head>
				<meta charSet="utf-8" />
				<title>BGKCHAN</title>
				<link rel="stylesheet" href="css/base.css" />
				<link rel="icon" 
				      type="image/png" 
				      href="./images/favicon.png"/>
				<script dangerouslySetInnerHTML={{__html: this.props.initialState}} />
			</head>
			<body>
				<div id="content">
					<Menu></Menu>
					{this.props.children}
					<p style={{marginTop: '4em', textAlign: 'center'}}>© 2016 Brendan Chan. Valid HTML5.</p>
				</div>



				<script src="scripts/polyfill.js"></script>
				<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>

				{/* Un-comment script tag below to include bundle.js when using webpack */}
				<script src="scripts/bundle.js"></script>

			</body>
		</html>
		)
	}
});

var IndexState = function(state) {
	var stateJSON = JSON.stringify(state).replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--');
	return {
		initialState: "window.__INITIAL_STATE__ = "+stateJSON
	}
}

Index = connect(
	IndexState
)(Index)

module.exports = Index
