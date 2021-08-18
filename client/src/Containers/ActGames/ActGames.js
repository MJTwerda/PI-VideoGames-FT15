import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { OrderTwo, filterTwo, MyGames } from '../../Actions/actions.js';

export default function ActGames({myGamesOnly}) {
    const [orders, setOrders] = useState('');
    const [filters, setFilters] = useState('');

    const allGenres = useSelector(state => state.genresGames);
    const myGames = useSelector(state => state.allMyGames);

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
        e.preventDefault();
        dispatch(OrderTwo(orders));
        setOrders('');
        console.log('Ordered has be okay');
    } 

    function handdleFilterSubmit(e) {
        e.preventDefault();
        if (filters.length) {
            dispatch(filterTwo(filters));
            setFilters('')
        }
        else return ('No hay games con ese Genre')
        console.log('Filtered has be okay');
    }

    function handdleSubmitMyGames(e) {
        e.preventDefault();
        dispatch(MyGames());
        //seeGames(myGames);
        //myGamesOnly();
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

        <form>
            <input  type='submit' name='MyGames'
                    value='My Games' onSubmit={handdleSubmitMyGames} />
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