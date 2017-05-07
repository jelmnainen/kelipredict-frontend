import 'babel-polyfill';
import React, { Component }from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './app'

import Template from './containers/templateContainer'

import { Router, IndexRoute, Route, Link, browserHistory } from 'react-router'

import { store, eventbus } from './store'

import bind_actors from './actors'
bind_actors(eventbus);

class AppRouter extends Component {
  render() {
    return (
      <Provider store={store}>
       <Router history={browserHistory}>
         <Route path="/" component={App}>
           <IndexRoute component={Template} />
         </Route>
        </Router>
      </Provider>
    )
  }
}

render(
  <AppRouter />,
  document.getElementById('root')
)
