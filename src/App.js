import React from 'react'
import { Route, Link } from 'react-router-dom'
import HomePage from './components/HomePage'
import ShopPage from './components/ShopPage';

import './App.css';

const HatsPage = () => {
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );

}



const App = () => {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
    </div>
  );
}

export default App;
