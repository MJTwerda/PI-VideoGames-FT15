import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllGames, reset } from '../Actions/actions.js';

import Game from '../Components/Game.js';
import Pagination from '../Components/Pagination.js';

export default function Videogames() {

    const games = useSelector(state => state.searchGames)
    const [loading, setLoading] = useState(false);
    const [currentPage, setcurrentPage] = useState(1);
    const [gamesPerPage, setgamesPerPage] = useState(9);

    const dispatch = useDispatch();

    useEffect(() => {
        setLoading(true);
        dispatch(reset());
        dispatch(getAllGames());
        setLoading(false);
        console.log('ALL GAMESS: ', games)
    }, []);
    
    const lastIndex = currentPage * gamesPerPage; //pag en la que estoy(2) * 9
    const firstIndex = lastIndex - gamesPerPage; //18 - 9
    const currentGames = games.slice(firstIndex, lastIndex); //se lo mando a <Game />

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

    console.log('CURRENT GAMESSS: ', currentGames);
     return (
         <div>
            <Game games={currentGames} loading={loading} /> 
            <Pagination 
                gamesPerPage={gamesPerPage} //9
                totalGames={games.length} //100
                paginate={paginate}
                prev={paginateButtonPrev}
                next={paginateButtonNext}
            />
            <h5>Page {currentPage}</h5>
            </div>
     )
}


/* useEffect(() => {
        async function SearchGames() {
            setLoading(true);
            let res = await axios.get('http://localhost:3001/videogames/');
            setGames(res.data)
            setLoading(false);
        }
        SearchGames()
    }, []); */