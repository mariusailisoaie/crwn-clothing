import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import Shop from './components/Shop/Shop';
import SignInAndSignUp from './pages/SignInAndSignUp/SignInAndSignUp';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            }
          });
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className='App'>
        <Header currentUser={ this.state.currentUser } />
        <Switch>
          <Route exact path='/' component={ HomePage } />
          <Route path='/shop' component={ Shop } />
          <Route path='/signIn' component={ SignInAndSignUp } />
        </Switch>
      </div>
    );
  }
}

export default App;
