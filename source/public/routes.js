import React from 'react';
import ReactRouter, { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Index from './components/index'
import Work from './components/work';
import Piece from './components/piece';
import Product from './components/product';
import Home from './components/home';
import Shop from './components/shop';
import About from './components/about';

// export const routes = (
//   <Router history={browserHistory}>
//   	<Route path="/" component={Index}>
//   		<IndexRoute component={Home} />
//     	<Route path="/work" component={Work}/>
//   		<Route path="/work/:piece" component={Piece} />
//     	<Route path="/shop" component={Shop} />
//     	<Route path="/about" component={About} />
//     	<Route path="*" component={Home} />
//     </Route>
//   </Router>
// )

export const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Index}>
      <IndexRoute component={Home} />

      <Route path="/work">
        <IndexRoute component={Work} />
        <Route path="/work/:piece" component={Piece} />
      </Route>
      <Route path="/shop">
        <IndexRoute component={Shop} />
        <Route path="/shop/:product" component={Product} />
      </Route>
      <Route path="/about" component={About} />
      <Route path="*" component={Home} />
    </Route>
  </Router>
)
