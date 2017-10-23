import 'babel-polyfill'
import React, { Component }from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import Frontpage from './containers/frontpageContainer'
import Story from './components/Story'
import App from './app'
import { store, eventbus } from './store'
import bind_actors from './actors'
import css from '../static/app.scss'
bind_actors(eventbus)

class AppRouter extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <App>
            <Route exact path="/" component={Frontpage} />
            <Route path="/story" component={Story} />
          </App>
       </BrowserRouter>
      </Provider>
    )
  }
}

render(
  <AppRouter />,
  document.getElementById('root')
)
