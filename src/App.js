import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import EventsListContainer from './components/EventsListContainer'


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Events</h1>
        </header>
        <main>
          <Route path='/' exact component={EventsListContainer} />
        </main>
      </div>
    );
  }
}

export default App;
