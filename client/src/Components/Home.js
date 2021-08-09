import React from 'react';
import { Link } from 'react-router-dom';

function Home() {

    return (
      <div className="App">
        <h1>Henry Videogames</h1>
        <Link to='/videogames'>
            <button>HOME</button>
        </Link>
      </div>
    )
}

export default Home;