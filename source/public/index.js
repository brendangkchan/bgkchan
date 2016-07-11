var React = require('react');
var connect = require('react-redux').connect;
var Link = require('react-router').Link;

var Index = React.createClass({

	render: function() {
		return (
		<html>
			<head>
				<meta charSet="utf-8" />
				<title>React Server Tutorial</title>
				<link rel="stylesheet" href="css/base.css" />
				<script dangerouslySetInnerHTML={{__html: this.props.initialState}} />
			</head>
			<body>
				<div id="content">
					<em>React Server Tutorial: <a href="https://medium.com/@firasd/quick-start-tutorial-universal-react-with-server-side-rendering-76fe5363d6e" target="_blank">Tutorial</a> &middot; <a href="https://github.com/firasd/react-server-tutorial/" target="_blank">Github</a></em>
					<ul>
						<li><Link to="/" activeStyle={{fontWeight: 'bold'}} onlyActiveOnIndex>Comments</Link></li>
						<li><Link to="/another-page" activeStyle={{fontWeight: 'bold'}}>Another Page</Link></li>
					</ul>
					{this.props.children}
					<p style={{marginTop: '4em', textAlign: 'center'}}>Made with &hearts; in 2016</p>
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
