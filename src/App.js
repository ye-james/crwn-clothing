import React from 'react'

import { auth } from './firebase/firebase.utils';
import { Route, Switch } from 'react-router-dom'
import HomePage from './components/HomePage'
import ShopPage from './components/ShopPage';
import Header from './components/Header';
import SignInOut from './components/SignInOut'

import './App.css';

class App extends React.Component {


  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  ubsubscribeFromAuth = null

  componentDidMount() {
    this.ubsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    })
  }

  componentWillUnmount() {
    this.ubsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path="/signin" component={SignInOut} />
        </Switch>

      </div>
    );
  }

}

export default App;
