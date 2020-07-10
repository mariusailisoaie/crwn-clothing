import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import Shop from './pages/Shop/Shop';
import SignInAndSignUp from './pages/SignInAndSignUp/SignInAndSignUp';
import Checkout from './pages/Checkout/Checkout';
import Contact from './pages/Contact/Contact';
import ReactNotification from 'react-notifications-component';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { currentUserSelector } from './selectors/userSelector';
import { checkUserSession } from './actions/userActions';

class App extends Component {
  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  render() {
    return (
      <div className='App'>
        <ReactNotification />

        <Header />
        <Switch>
          <Route exact path='/' component={ HomePage } />
          <Route path='/shop' component={ Shop } />
          <Route exact path='/checkout' component={ Checkout } />
          <Route exact path='/contact' component={ Contact } />
          <Route exact path='/signIn' render={ () => this.props.currentUser ? <Redirect to='/' /> : <SignInAndSignUp /> } />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: currentUserSelector,
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
