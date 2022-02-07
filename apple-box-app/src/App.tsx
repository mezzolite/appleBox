import React from 'react';
import './App.scss';
import Main from './components/MainContainer/Main';
import UserHeader from './components/UserHeader/UserHeader';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-titles">
          <h1>AppleBox</h1>
          <h4>A task based adventure</h4>
        </div>
        <UserHeader />
      </header>
      <Main />
    </div>
  );
}

export default App;
