import React, { Component, useState, useEffect } from "react";
//import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { getVideogames } from '../Actions/actions.js';

import {useSelector, useDispatch} from 'react-redux'

export default function Videogames(props) {
    const [name, setName] = useState('');

    const games = useSelector(state => state.searchGames);
    const dispatch = useDispatch();

    function onChange(e) {
        setName(e.target.value);
    }

    function handdleSubmit(e) {
        e.preventDefault();
        dispatch(getVideogames(name));
        setName('');
    }

    /* useEffect(() => {
        props
    },[]) 
 */
    return(
        <div>
            <h3>Acá deben mostrarse todos los Videogames</h3>
            <form onSubmit={handdleSubmit}>
                <input type='text' value={name} placeholder='Buscar videogames' onChange={onChange} />
                <input type='submit' value='Buscar' onSubmit={handdleSubmit} />
            </form>
                <div>
                {props.videogames === 'undefined' ? alert('No se encontraron games') :
                games.map(game => {
                    return (
                        <ul>
                            <li>{game.name}</li>
                            <Link to={`/videogame/${game.id}`}>
                                <img src={game.image} width='400' height='250' alt='Search'/>
                            </Link>
                            <ul>{game.Genres.map(genre => 
                                <li>{genre.name}</li>
                            )}</ul>
                        </ul>
                    )}
                )}
                </div>
        </div>
    )
}

/* function mapStateToProps(state) {
    return {
        videogames: state.searchGames,
        genres: state.genresGames
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getVideogames: (title) => dispatch(getVideogames(title)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Videogames); */