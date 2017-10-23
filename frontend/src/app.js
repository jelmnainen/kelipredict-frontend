import React from 'react'
import Header from './components/Header'
const App = ({ children }) => (
    <div className="row">
      <Header />
      <div className="col-xs-12">
        {children}
      </div>
    </div>
  )


export default App
