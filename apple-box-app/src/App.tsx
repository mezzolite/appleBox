import React from 'react';
import './App.scss';
// import { BrowserRouter as Router } from 'react-router-dom';
import Main from './components/MainContainer/Main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>AppleBox</h1>
          <h4>A task based adventure</h4>
        </div>
      </header>
      <Main />
    </div>
  );
}

export default App;
