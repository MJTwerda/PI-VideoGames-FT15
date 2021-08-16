import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reset } from '../Actions/actions.js';

import Game from '../Components/Game.js';
import Pagination from '../Components/Pagination.js';
import ActGames from './ActGames.js';

export default function Videogames() {

    const games = useSelector(state => state.processGames);

    //Para el paginado
    const [currentPage, setcurrentPage] = useState(1);
    const [gamesPerPage, setgamesPerPage] = useState(9);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(reset());
    }, []);
    
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
    
    //console.log('processGames del Store: ', games);
    //console.log('CURRENT GAMESSS: ', currentGames);
     
    if (!games.length) {
        return <h3>Loading Games...</h3>
    } 

    return (
         <div>
            <ActGames />
            <Game games={currentGames} /> 
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
