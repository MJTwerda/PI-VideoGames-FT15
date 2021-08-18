import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reset, getAllGames, getGenres } from '../../Actions/actions.js';

import Game from '../../Components/Game/Game.js';
import Pagination from '../../Components/Pagination/Pagination.js';
import ActGames from '../ActGames/ActGames.js';

import style from './Videogames.module.css';

export default function Videogames() {

    let games = useSelector(state => state.processGames);
    const allGamesOriginal = useSelector(state => state.searchAllGames);
    //const [gamesWork, setGamesWork] = useState([]);
    //const SearchmyGames = useSelector(state => state.myGamesOnly)

    /* const myGamesOnly = useSelector(state => state.myGamesOnly);
    const allMyGames = useSelector(state => state.allMyGames); */
    
    //Para el paginado
    const [currentPage, setcurrentPage] = useState(1);
    const [gamesPerPage, setgamesPerPage] = useState(9);

    const dispatch = useDispatch();
   
    useEffect(() => {
        //setGamesWork(games);
        dispatch(getAllGames());
        dispatch(getGenres());
        dispatch(reset());
    },[dispatch]);
    
    const lastIndex = currentPage * gamesPerPage; //pag en la que estoy(2) * 9
    const firstIndex = lastIndex - gamesPerPage; //18 - 9
    const currentGames = games.slice(firstIndex, lastIndex) //se lo mando a <Game />

    //Funciones para paginar <Pagination />
    function paginate (pageNumber) {
        setcurrentPage(pageNumber);
    }
    const paginateButtonPrev = ()  => {
        setcurrentPage(currentPage - 1)
    }
    const paginateButtonNext  = ()  => {
        setcurrentPage(currentPage + 1)
    }
     

    if (!allGamesOriginal.length) {
        return <h3>Loading Games.Please wait...</h3>
    } 
    if (!games.length) {
        return <h3>Games cannot Found. Try with another Genre</h3>
    }

    function myGamesOnly() {
        games = games.filter(g => g.dispatch.length > 8);
    }

    return (
         <div className={style.container}>
            <ActGames seeMyGames={myGamesOnly}/>
            <div className={style.game}>
                <Game games={currentGames} /> 
            </div>
            <Pagination 
                gamesPerPage={gamesPerPage} //9
                totalGames={games.length} //100
                paginate={paginate}
                prev={paginateButtonPrev}
                next={paginateButtonNext}
                numPag={currentPage}
            />
            <h5>Page {currentPage}</h5>
            </div>
     )
}
