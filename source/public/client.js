var React = require('react');
var ReactDOM = require('react-dom');

var Provider = require('react-redux').Provider;
var Router = require('react-router').Router;
var browserHistory = require('react-router').browserHistory;

var store = require('./redux-store');
var routes = require('./routes').routes;

var Tracking = require('./lib/tracking').pageView

var initialState = window.__INITIAL_STATE__;
store = store.configureStore(initialState)

ReactDOM.render(
  <Provider store={store}>
  	<Router history={browserHistory} routes={routes} />
  </Provider>,
  document
)

if (process.env.NODE_ENV === 'production') {
	var ReactGA = require('react-ga');
	ReactGA.initialize('UA-89800729-1');

	browserHistory.listen(location => {
	 	ReactGA.set({ page: window.location.pathname });
	  ReactGA.pageview(window.location.pathname);
	  pageView()
	});
}
