import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={ HomePage } />
        <Route path='/shop' component={ Shop } />
      </Switch>
    </div>
  );
}

export default App;
