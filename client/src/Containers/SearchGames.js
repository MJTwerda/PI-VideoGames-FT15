import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { getVideogames } from '../Actions/actions.js';

export default function SearchGames() {

    const [name, setName] = useState('');
    const dispatch = useDispatch();

    function onChange(e) {
        setName(e.target.value);
    }
    function handdleSubmit(e) {;
        e.preventDefault();
        dispatch(getVideogames(name));
        setName('');
    }

    return(
        <form onSubmit={handdleSubmit}>
            <input type='text' value={name} placeholder='Buscar videogames' onChange={onChange} />
            <input type='submit' value='Buscar' onSubmit={handdleSubmit} />
        </form>
    )
}