import React, { Component, useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { getVideogames } from '../Actions/actions.js';



function Videogames(props) {
    const [title, setTitle] = useState('');

    function onChange(e) {
        setTitle(e.target.value);
    }

    function handdleSubmit(e) {
        e.preventDefault();
        props.getVideogames(title);
        setTitle('');
    }

    return(
        <div>
            <h3>Acá deben mostrarse todos los Videogames</h3>
            <form onSubmit={handdleSubmit}>
                <input type='text' value={title} placeholder='Buscar videogames' onChange={onChange} />
                <input type='submit' value='Buscar' onSubmit={handdleSubmit} />
            </form>

           {/*  <label for='filtrar'>Filtrar por</label>
            <select id='filtrar' name='filtrar'>
                <option value='' selected='selected'>-selecciona-</option>
                <option value='genre'>Genre</option>
                <option value='api'>Api</option>
                <option value='myGames'>My Games</option>
            </select>

            <label for='order'>Ordenar según</label>
            <select id='order' name='order'>
                <option value='' selected='selected'>-selecciona-</option>
                <option value='forNameAsc'>Nombre ASC</option>
                <option value='forNameDesc'>Nombre DESC</option>
                <option value='forRatingAsc'>Rating ASC</option>
                <option value='forRatingDesc'>Rating DESC</option>
            </select> */}

            <ul>
                {props.videogames === 'undefined' ? alert('No se encontraron games') :
                props.videogames.map(game => {
                    return (
                    <Link to={`/videogames/${game.id}`}>
                        <li>{game.name}</li>
                    </Link>
                    )}
                )}
            </ul>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        videogames: state.searchGames,
        genres: state.genresGames
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getVideogames: (title) => dispatch(getVideogames(title)),
        //getGenres: (title) => dispatch(getGenres())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Videogames);