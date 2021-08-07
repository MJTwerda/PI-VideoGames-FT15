import React from "react";
import './App.css';

import { Route } from "react-router-dom";
import Videogames from "./Components/Videogames.js";
import Home from "./Components/Home.js";
import Genres from "./Components/Genres.js";

function App() {
  return (
    <React.Fragment>
      <Route exact path='/' component={Home} />
      <Route path='/videogames' component={Videogames} />
      <Route path='/genres' component={Genres} />
    </React.Fragment>
  );
}

export default App;
