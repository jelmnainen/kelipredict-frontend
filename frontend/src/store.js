import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware'
import rootReducer from './reducers/root'

import Bus from './utils/Bus'

const eventbus = new Bus();

const eventbusMiddleware = store => next => action => {
  eventbus.push(action)
  return next(action)
}

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, promiseMiddleware(), eventbusMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export {store, eventbus}
