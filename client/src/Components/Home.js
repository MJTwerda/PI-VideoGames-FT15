import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAllGames, getGenres } from '../Actions/actions.js';

function Home() {

  const dispatch = useDispatch();

  //Cargo mi store, searchAllGames y processGames para trabajar con este último
  useEffect(() => {
    let initial = async function() {
      await dispatch(getAllGames());
      await dispatch(getGenres());
      }
      initial();
  }, []);

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