import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

import { useSelector, useDispatch } from 'react-redux';

export default function CreateGame() {
    const [input, setInput] = useState(
    {
        name: '',
        description: '',
        released: '',
        rating: '',
        platforms: [],
        genres: []
    });

    const dispatch = useDispatch();
    const addGame = useSelector(state => state.searchGames)

    function handdleInputChange(e) {
        setInput({...input, [e.target.name]: e.target.value});
    }

    /* function handleSubmit(e) {
        e.preventDefault();
        dispatch(addGame())
    } */

    return(
        <form onSubmit={handdleInputChange}>
        <div>
            <label>Name</label>
            <input  name='name' type='text' 
                    value={input.name} onChange={handdleInputChange} />
        </div>
        <div>
            <label>Description</label>
            <input  name='description' type='text' 
                    value={input.description} onChange={handdleInputChange} />
        </div>
        <div>
            <label>Platforms</label>
            <input  name='platforms' type='text' 
                    value={input.platforms} onChange={handdleInputChange} />
        </div>
        <div>
            <label>Released</label>
            <input  name='released' type='text' 
                    value={input.released} onChange={handdleInputChange} />
        </div>
        <div>
            <label>Rating</label>
            <input  name='rating' type='text' 
                    value={input.rating} onChange={handdleInputChange} />
        </div>
        <div>
            <label>Genres</label>
            <input  name='genres' type='text' 
                    value={input.genres} onChange={handdleInputChange} />
        </div>

        <input type='submit' value='Add Game' />
        </form>
    )
}