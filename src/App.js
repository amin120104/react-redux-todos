import React, { Component } from 'react';
import Headline from './components/Headline';
import Addtodo from './components/Addtodo';
import Showtodo from './components/Showtodo/Showtodo';

import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Provider } from 'react-redux';
import store from './store/Store';

class App extends Component {
  render() {
    return (
      <Provider store = { store }>
        <div className="App">
          <header className="App-header">
              <Headline />
              <Addtodo />
              <Showtodo />
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
