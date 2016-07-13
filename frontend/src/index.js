 import 'babel-polyfill';
 import React from 'react'
 import { render } from 'react-dom'
 import { Provider } from 'react-redux'
 import App from './app'

 import Template from './containers/templateContainer'

 import { Router, IndexRoute, Route, Link, browserHistory } from 'react-router'

import { store, eventbus } from './store'

import bind_actors from './actors'
bind_actors(eventbus);

 render(
   <Provider store={store}>
     <Router history={browserHistory}>
       <Route path="/" component={App}>
         <IndexRoute component={Template} />
       </Route>
      </Router>
   </Provider>,
   document.getElementById('root')
 )
