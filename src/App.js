import React from 'react'

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth)
          
        
        //Document snapshot record from out document reference object
        // allows us to check if a document exists at this query using .exists
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          });
          })
      }
      //set user to null if no userAuth 
      this.setState({currentUser: userAuth})
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
