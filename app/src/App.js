import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './containers/header';
import Menu from './containers/menu';

class App extends Component {

  render() {
    return (
      <div>
        <header>
          <Header />
        </header>
        <main className="bodyContainer">
          <Menu />
          <Switch>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;

