import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import Home from './views/home.js'
import About from './views/about.js'
import Product from './views/product.js'
import Nav from './components/nav.js'

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Container}>
          <IndexRoute component={Home} />
          <Route path='/about' component={About} />
          <Route path='/product/:id' component={Product} />
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    )
  }
}

const NotFound = () => <h1>404... Not found</h1>
const Container = (props) => (
  <div>
    <Nav />
    {props.children}
  </div>
)

export default App
