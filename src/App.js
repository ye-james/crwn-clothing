import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from './components/HomePage'
import ShopPage from './components/ShopPage';
import Header from './components/Header';

import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>

    </div>
  );
}

export default App;
