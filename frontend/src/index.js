import 'babel-polyfill'
import React, { Component }from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Template from './containers/templateContainer'

import { BrowserRouter, Route } from 'react-router-dom'

import { store, eventbus } from './store'

import bind_actors from './actors'
bind_actors(eventbus)

class AppRouter extends Component {
  render() {
    return (
      <Provider store={store}>
       <BrowserRouter>
         <Route exact path="/" component={Template} />
       </BrowserRouter>
      </Provider>
    )
  }
}

render(
  <AppRouter />,
  document.getElementById('root')
)
