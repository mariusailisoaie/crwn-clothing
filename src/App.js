import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import Shop from './components/Shop/Shop';
import SignInAndSignUp from './pages/SignInAndSignUp/SignInAndSignUp';
import { auth } from './firebase/firebase.utils';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  render() {
    return (
      <div className='App'>
        <Header />
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
