/* import React, { useState } from 'react';
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
} */

//-------------Para usar sin botón de enviado de filtrado u ordenamiento ---------


import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { OrderTwo, filterTwo } from '../Actions/actions.js';

export default function ActGames() {
    const [orders, setOrders] = useState('');
    const [filters, setFilters] = useState('');

    const allGenres = useSelector(state => state.genresGames);
    const dispatch = useDispatch();
    
    function handdleInputOrder(e) {
        let value = e.target.value;

        if (value === 'NullSelected') {
            setOrders('Not Order')
        }
        if (value === 'AlfA-Z' || value === 'AlfZ-A' || value === 'ascRating' || value === 'descRating') {
            setOrders(value)
        }
        console.log('valor de casilla filtrado/ordenado: ', value);
    }

    function handdleInputFilter(e) {
        let value = e.target.value;
        let name = e.target.name;

        if (name === 'FilterGenre' && value === 'NullSelGenre') {
            setFilters('NullSelGenre')
        }
        if(name === 'FilterGenre') {
            setFilters(value)
        }
        console.log('value de option genre: ', value);
        console.log('name de option genre: ', name)
    }

    function handdleOrderSubmit(e) {
        dispatch(OrderTwo(orders));
        e.preventDefault();
        setOrders('');
        console.log('Ordered has be okay');
    } 

    function handdleFilterSubmit(e) {
        dispatch(filterTwo(filters));
        e.preventDefault();
        setFilters('')
        console.log('Filtered has be okay');
    }

     
    return(
        <div>
        <form onSubmit={handdleOrderSubmit} >
            <label>See Games</label>
                <select onChange={handdleInputOrder}>
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
            <input type='submit' value='Apply' onSubmit={handdleOrderSubmit}/>
        </form>

        <form onSubmit={handdleFilterSubmit}>
            <label>Filter by Genres</label>
                <select name='FilterGenre' onChange={handdleInputFilter}>
                    <option selected value='NullSelGenre'>-Select Genre-</option>
                    {allGenres.map(genre =>
                        <option key={genre.name} value={genre.name}>{genre.name}</option>
                    )}
                </select>
            <input type='submit' value='Apply' onSubmit={handdleFilterSubmit}/>  
        </form>
        </div>
            )
}

//-------------------- HARDCODEADO -----------------

/* import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hardcodeado } from '../Actions/actions.js';

export default function ActGames() {


    const dispatch = useDispatch();

    function handdleSubmitHard(e) {
        e.preventDefault();
        dispatch(hardcodeado());
    }
    
    return(
        <div>
        <form onSubmit={handdleSubmitHard} >
            <input type='submit' onSubmit={handdleSubmitHard} value='Hardcodealo dale'/>    
        </form>
        </div>
    )

} */