import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
        <div id="content">
            <header id="header" className="App-header">
                <h1>moisesjose.com</h1>
            </header>
            <nav id="navigation">
                <a href="/">Home</a>
                <a href="/games">Videjuegos</a>
                <a href="/software">Software</a>
                <a href="/literature">Literatura</a>
            </nav>
        </div>
    </div>
  );
}

export default App;
