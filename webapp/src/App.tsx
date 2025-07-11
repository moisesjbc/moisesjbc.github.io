import React from 'react';
import './App.css';
import { Route, NavLink, BrowserRouter, Switch } from 'react-router-dom';
import Home from './sections/home/Home';
import Games from './sections/games/Games';
import GameDetail from './sections/game.detail/GameDetail';
import GamePlay from './sections/game.play/GamePlay';
import Software from './sections/software/Software';
import SoftwareDetail from './sections/software.detail/SoftwareDetail';
import Literature from './sections/literature/Literature';
import LiteratureDetail from './sections/literature.detail/LiteratureDetail';
import NotFound from './sections/not.found/NotFound';

function App() {
  const [language, setLanguage] = React.useState('es');

  console.log("App language ", language)

  const goToTop = (ev: any) => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };


  return (
    <div className="App container-fluid">
        <BrowserRouter>
            <div id="header">
                <header className="App-header">
                    <h1 id="siteTitle"><NavLink to="/">Moisés José</NavLink></h1>
                    <p id="page-subtitle">Desarrollador software y escritor</p>
                </header>
                <nav id="navigation" className="row center-box">
                    <div className="col-12 col-sm-3">
                        <NavLink to="/">Home</NavLink>
                    </div>
                    <div className="col-12 col-sm-3">
                        <NavLink to="/games">Videojuegos</NavLink>
                    </div>
                    <div className="col-12 col-sm-3">
                        <NavLink to="/software">Software</NavLink>
                    </div>
                    <div className="col-12 col-sm-3">
                        <NavLink to="/literature">Literatura</NavLink>
                    </div>
                </nav>
            </div>
            <div id="body">
                <div id="content">
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/home" exact component={Home} language={language} />
                        <Route path="/games" exact component={Games} language={language} />
                        <Route path="/games/:id" exact component={GameDetail} />
                        <Route path="/games/:id/play" exact component={GamePlay} />
                        <Route path="/software" exact component={Software} />
                        <Route path="/software/:id" exact component={SoftwareDetail} />
                        <Route path="/literature" exact component={Literature} />
                        <Route path="/literature/:id" exact component={LiteratureDetail} />
                        <Route exact component={NotFound} />
                    </Switch>
                    <div className="backTop" onClick={goToTop} >&#9650;</div>
                </div>
            </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
