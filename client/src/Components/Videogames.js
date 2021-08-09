import React, { Component, useState, useEffect } from "react";
//import { connect } from "react-redux";
//import { Link } from 'react-router-dom';
import { getVideogames } from '../Actions/actions.js';
import Game from './Game.js';

import {useSelector, useDispatch} from 'react-redux'

export default function Videogames(props) {
    const [name, setName] = useState('');
    //const []

    const videogames = useSelector(state => state.searchGames);
    const dispatch = useDispatch();

    function onChange(e) {
        setName(e.target.value);
    }
    
    function handdleSubmit(e) {
        e.preventDefault();
        dispatch(getVideogames(name));
        setName('');
    }
    return(
        <div>
            <h3>Acá deben mostrarse todos los Videogames</h3>
            <form onSubmit={handdleSubmit}>
                <input type='text' value={name} placeholder='Buscar videogames' onChange={onChange} />
                <input type='submit' value='Buscar' onSubmit={handdleSubmit} />
            </form>
                <div>
                {videogames === 'undefined' ? alert('No se encontraron games') :
                videogames.map(game => {
                    return (
                        <Game 
                        id={game.id} 
                        name={game.name} 
                        image={game.image} 
                        genres={game.Genres}
                        />
                    )}
                    
                )}
                </div>
        </div>
    )
}
