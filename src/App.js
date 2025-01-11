
/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; */

import React from 'react';
import { Clock } from './Clock';
import { UserGreeting, GuestGreeting } from './Greetings';

function App() {
  const isLoggedIn = true;
  return (
    <div>
      {/* Pass different interval values to each Clock */}
      <Clock interval={1000} />
      <Clock interval={3000} />
      <Clock interval={5000} />
      {isLoggedIn ? <UserGreeting /> : <GuestGreeting />}
    </div>
  );
}

export default App;
