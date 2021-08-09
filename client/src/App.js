import React from "react";
import './App.css';

import { Route } from "react-router-dom";
import Videogames from "./Components/Videogames.js";
import Home from "./Components/Home.js";
import Genres from "./Components/Genres.js";
import NavBar from "./Components/NavBar.js";
import DetailGame from './Components/DetailGame.js';

function App() {
  return (
    <React.Fragment>
      <Route exact path='/' component={Home} />
      <Route path='/:algo' component={NavBar} />
      <Route path='/videogames' component={Videogames} />
      <Route exact path='/videogame/:id' 
            render={({match}) => <DetailGame idGame={match.params.id} />} 
            />
      <Route path='/genres' component={Genres} />
    </React.Fragment>
  );
}

export default App;
