import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterAndOrder } from '../Actions/actions.js';

export default function ActGames() {
    const [seeGames, setSeeGames] = useState(
    {
        order: null,
        genre: null
    });

    const allGenres = useSelector(state => state.genresGames);
    const dispatch = useDispatch();

    function handdleOrderGames(e) {
        let value = e.target.value;
        let name = e.target.name;

        if (value === 'NullSelected') {
            setSeeGames({...seeGames, order: null})
        }
        if (name === 'FilterGenre' && value === 'NullSelGenre') {
            setSeeGames({...seeGames, genre: null})
        }
        if (value === 'AlfA-Z' || value === 'AlfZ-A' || value === 'ascRating' || value === 'descRating') {
            setSeeGames({...seeGames, order: value})
        }
        if(name === 'FilterGenre') {
            setSeeGames({...seeGames, genre: value})
        }
        console.log('valor de casilla filtrado/ordenado: ', value);
        console.log('nombre de casilla filtrado/ordenado: ', name)
    }

    function handdleSubmit(e) {
        e.preventDefault();
        let stateProcess = {
            order: seeGames.order,
            genre: seeGames.genre
        };
        dispatch(filterAndOrder(stateProcess));
        setSeeGames({order: null, genre: null});
        console.log('state que se envía con dispatch: ', stateProcess)
        console.log('Filtered and Ordered be okay');
    } 


    return(
        <div>
        <form onSubmit={handdleOrderGames} >
            <label>See Games</label>
                <select onChange={handdleOrderGames}>
                <option selected value='NullSelected'>-Filter/Order-</option>

                <optgroup label='by Name' >
                    <option value='AlfA-Z'>ASC</option>
                    <option value='AlfZ-A'>DESC</option>
                </optgroup>

                <optgroup label='by Rating'>
                    <option value='ascRating'>Min-Max</option>
                    <option value='descRating'>Max-Min</option>
                </optgroup>
                </select>
       
            <label>Filter by Genres</label>
                <select name='FilterGenre' onChange={handdleOrderGames}>
                    <option selected value='NullSelGenre'>-Select Genre-</option>
                    {allGenres.map(genre =>
                        <option key={genre.id} value={genre.name}>{genre.name}</option>
                    )}
                </select>

                <input type='submit' value='Apply' onSubmit={handdleSubmit}/>
        </form>
        </div>
    )
}

/* function handdleSubmit(e) {
        e.preventDefault();
        let stateProcess = {
            order: seeGames.order,
            genre: seeGames.genre
        };
        dispatch(filterAndOrder(stateProcess));
        setSeeGames({order: null, genre: null});
        console.log('Filtered and Ordered be okay');
    } */

//Para usar sin botón de enviado de filtrado u ordenamiento
    /* 
    return(
        <div>
        <form onSubmit={handdleOrderGames} >
            <label>See Games</label>
                <select onChange={handdleOrderGames}>
                <option selected value='NullSelected'>-Filter/Order-</option>

                <optgroup label='by Name' >
                    <option value='AlfA-Z'>ASC</option>
                    <option value='AlfZ-A'>DESC</option>
                </optgroup>

                <optgroup label='by Rating'>
                    <option value='ascRating'>Min-Max</option>
                    <option value='descRating'>Max-Min</option>
                </optgroup>
                </select>
        </form>
        <form onChange={handdleFilterByGenre}>
            <label>Filter by Genres</label>
                <select name='FilterGenre' onChange={handdleFilterByGenre}>
                    <option selected value='NullSelGenre'>-Select Genre-</option>
                    {allGenres.map(genre =>
                        <option key={genre.id} value={genre.name}>{genre.name}</option>
                    )}
                </select>

                </form>
                </div>
            )
    */