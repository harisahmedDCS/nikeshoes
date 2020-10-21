import React, { Component, Fragment } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/Landing';
import Men from './components/Men';
import Women from './components/Women';
import Cart from './components/Cart';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Route exact path="/" component={Landing} />
          <Switch>
            <Route exact path="/men" component={Men} />
            <Route exact path="/women" component={Women} />
            <Route exact path="/cart" component={Cart} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
