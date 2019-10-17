import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import Home from './components/Home'


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Events</h1>
        </header>

        <Route path='/' exact component={Home}/>
      </div>
    );
  }
}

export default App;
