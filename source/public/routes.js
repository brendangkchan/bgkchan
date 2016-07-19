import React from 'react';
var ReactRouter = require('react-router');
const { Router, Route, IndexRoute, browserHistory } = ReactRouter;

var Index = require('./index')
var CommentBox = require('./commentbox')
const AnotherPage = require('./components/another-page')();
const Work = require('./components/work')();

var routes = (
  <Router history={browserHistory}>
  	<Route path="/" component={Index}>
    	<Route path="work" component={Work}/>
    	<Route path="*" component={Index}/>
    </Route>
  </Router>
)

module.exports = {
  routes: routes
}
