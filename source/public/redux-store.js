import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import reducer from './redux/reducers'

const middlewares = [thunk]
if (process.env.NODE_ENV === 'development') {
  const createLogger = require(`redux-logger`);
  const logger = createLogger();
  middlewares.push(logger);
}

module.exports = {
  configureStore: function(initialState) {
    return createStore(
      reducer,
      initialState,
      applyMiddleware(...middlewares)
    )
  }
}
