import React from 'react';
var ReactRouter = require('react-router');
const { Route, IndexRoute } = ReactRouter;

var Index = require('./index')
var CommentBox = require('./commentbox')
const AnotherPage = require('./components/another-page')();

var routes = (
  <Route path="/" component={Index}>
    <IndexRoute component={CommentBox}/>
    <Route path="another-page" component={AnotherPage} />
  </Route>
)

module.exports = {
  routes: routes
}
