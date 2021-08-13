import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { getVideogamesByName, getAllGames } from '../Actions/actions.js';

export default function SearchGames() {

    const [name, setName] = useState('');
    const dispatch = useDispatch();

    function onChange(e) {
        setName(e.target.value);
    }

    function handdleSubmit(e) {
            e.preventDefault();
            dispatch(getVideogamesByName(name));
            setName('') 
    }
    function handdleSubmitAllGames(e) {
        e.preventDefault();
            dispatch(getAllGames())
            setName('');
    }

    return(
        <div>
        <form onSubmit={handdleSubmit}>
            <input type='text' value={name} placeholder='Search videogames' onChange={onChange} />
            <input  type='submit' name={'ByName'}  
                    value='By Name' onSubmit={handdleSubmit} />
        </form>
        <form onSubmit={handdleSubmitAllGames}>
            <input  type='submit' name={'All'} 
                    value='All Games' onSubmit={handdleSubmitAllGames} />
        </form>
        </div>
    )
}