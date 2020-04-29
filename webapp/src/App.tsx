import React from 'react';
import './App.css';
import { Route, NavLink, BrowserRouter } from 'react-router-dom';
import Home from './sections/home/Home';
import Games from './sections/games/Games';
import GameDetail from './sections/game.detail/GameDetail';
import Software from './sections/software/Software';
import SoftwareDetail from './sections/software.detail/SoftwareDetail';
import Literature from './sections/literature/Literature';
import LiteratureDetail from './sections/literature.detail/LiteratureDetail';

function App() {
  return (
    <div className="App container-fluid">
        <BrowserRouter>
            <div id="body">
                <header id="header" className="App-header">
                    <h1>moisesjose.com</h1>
                </header>
                <nav id="navigation">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/games">Videjuegos</NavLink>
                    <NavLink to="/software">Software</NavLink>
                    <NavLink to="/literature">Literatura</NavLink>
                </nav>
                <div id="content">
                    <Route path="/" exact component={Home} />
                    <Route path="/games" exact component={Games} />
                    <Route path="/games/:id" component={GameDetail} />
                    <Route path="/software" exact component={Software} />
                    <Route path="/software/:id" component={SoftwareDetail} />
                    <Route path="/literature" exact component={Literature} />
                    <Route path="/literature/:id" component={LiteratureDetail} />
                </div>
            </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
