import React from 'react';
var ReactRouter = require('react-router');
const { Route, IndexRoute } = ReactRouter;

var Index = require('./index')
var CommentBox = require('./commentbox')
const AnotherPage = require('./components/another-page')();
const Work = require('./components/work')();

var routes = (
  <Route path="/" component={Index}>
    <IndexRoute component={CommentBox}/>
    <Route path="another-page" component={AnotherPage} />
    <Route path="work" component={Work} />
  </Route>
)

module.exports = {
  routes: routes
}
