import React from 'react';
import './App.css';
import Navbar from './navbar';
import Home from './home';
import Products from './products';
import Product from './product';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
      <Router>
          <Navbar/>
          <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/home' component={Home}/>
              <Route path='/products/:productId' exact component={Product} />
              <Route path='/products' exact component={Products} />
            </Switch>
      </Router>
  );
}

export default App;
