import React from "react";
//import React, { useEffect } from "react";
import './App.css';
//import { useDispatch, useSelector } from "react-redux";
//import { getAllGames } from './Actions/actions.js';

import { Route } from "react-router-dom";
import Videogames from "./Containers/Videogames.js";
import Genres from "./Components/Genres.js";
import NavBar from "./Components/NavBar.js";
import DetailGame from './Containers/DetailGame.js';
import CreateGame from './Components/CreateGame.js';
import Home from './Components/Home.js';
import SearchGames from "./Containers/SearchGames";

function App() {
  /* const allGames = useSelector(state => state.searchGames);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllGames())
}, [allGames]); */

  return (
    <React.Fragment>
      <Route exact path='/' component={Home} />
      <Route path='/:algo' component={NavBar} />
      <Route exact path='/videogames' component={CreateGame} />
      <Route path='/videogames' component={SearchGames} />
      <Route path='/videogames' component={Videogames} />
      <Route exact path='/videogame/:id' 
            render={({match}) => <DetailGame idGame={match.params.id} />} 
            />
      <Route path='/genres' component={Genres} />
    </React.Fragment>
  );
}

export default App;
