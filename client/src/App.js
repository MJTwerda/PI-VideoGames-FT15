import React from "react";
import './App.css';

import { Route } from "react-router-dom";
import Videogames from "./Containers/Videogames.js";
import NavBar from "./Components/NavBar.js";
import DetailGame from './Containers/DetailGame.js';
import CreateGame from './Components/CreateGame.js';
import Home from './Components/Home.js';
import SearchGames from "./Containers/SearchGames";

function App() {

  return (
    <React.Fragment>
      <Route exact path='/' component={Home} />
      <Route path='/:algo' component={NavBar} />
      <Route exact path='/creategame' component={CreateGame} />
      <Route path='/videogames' component={SearchGames} />
      <Route path='/videogames' component={Videogames} />
      <Route exact path='/videogame/:id' 
            render={({match}) => <DetailGame idGame={match.params.id} />} 
            />
    </React.Fragment>
  );
}

export default App;
