import React, { useEffect, useState } from 'react';
//import { NavLink } from 'react-router-dom';
//import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addNewGame, getGenres } from '../Actions/actions.js';

export default function CreateGame() {
    const [input, setInput] = useState(
    {
        name: '',
        description: '',
        released: '',
        rating: 0,
        platforms: '',
        genres: []
    });

    const dispatch = useDispatch();
    //const allVideoGames = useSelector(state => state.searchGames);
    const allGenres = useSelector(state => state.genresGames);
    const allGamesProcess = useSelector(state => state.processGames);

    useEffect(() => {
        dispatch(getGenres())
    }, []);

    function handdleInputChange(e) {
        let name = e.target.name;
        let value = e.target.value;
        let gerName = value[0].toUpperCase() + value.slice(1);

        if (name === 'AddGenres') {
                if (!input.genres.includes(value)) {
                    setInput({...input, genres: [...input.genres].concat(value)})
                    /* setInput({...input, genres: [...input.genres].concat({
                        id: value, name: gerName})}) */
                } else {
                    setInput({...input, genres: [...input.genres].filter(g => g.id !== value)})
                }
        } else {
            setInput({...input, [e.target.name]: e.target.value});
            console.log('INPUT CREAR GAME: ', input);
        }
    }

    function handdleSubmit(e) {
        e.preventDefault();
        let newGame = 
        {   name: input.name,
            description: input.description,
            released: input.released,
            rating: input.rating,
            platforms: input.platforms,
            genres: input.genres
        };
        if (!newGame.genres.length) {
            alert('Invalid Genres!')
        } 
        else {
        dispatch(addNewGame(newGame));
        //e.preventDefault();
        setInput(
            {   name: '',
                description: '',
                released: '',
                rating: 0,
                platforms: [],
                genres: []
            });
            console.log('TODOS LOS GAMES DESPUÉS DE CREAR UNO: ', allGamesProcess);
        alert('New game created, Good Job!');
        e.target.reset();
        }
    }
    
    return(
        <form onSubmit={handdleSubmit}>
        <div>
                <label>Genres</label>
                <select name='AddGenres' onChange={handdleInputChange} size='5' multiple>
                       {/*  <option selected value='None'>-Select Genres</option> */}
                    {allGenres.map(g => (
                        <option key={g.id} value={g.id}>{g.name}</option>
                    ))}
                </select>
        </div>
        <div>
            <label>Name</label>
            <input  name='name' type='text' 
                    value={input.name} onChange={handdleInputChange}
                    autoComplete='off' />
        </div>
        <div>
            <label>Description</label>
            <textarea   name='description' type='text' 
                        value={input.description} onChange={handdleInputChange}>
            </textarea>
        </div>
       
        <div>
            <label>Released</label>
            <input  name='released' type='date' 
                    value={input.released} onChange={handdleInputChange} 
                    autoComplete='off'
                    />
        </div>
        <div>
            <label>Rating</label>
            <input  name='rating' type='text' 
                    value={[input.rating]} onChange={handdleInputChange} 
                    autoComplete='off'
                    />
        </div>
        
        <div>
            <label>Platforms</label>
            <input  name='platforms' type='text' 
                    value={input.platforms} autoComplete='off'/>
            {/* {input.platforms.map(plat => (
                <div key={plat.name}>
                <input  name='platforms' type='checkbox' 
                        value={plat.id} autoComplete='off'/>
                <label name={plat.name}>{plat.name}</label>
                </div>
            ))
            }         */}
        </div>
        <input type='submit' value='Add Game' onSubmit={handdleSubmit} />
        </form>
    )
}


/* 
    handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name; */