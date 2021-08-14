//import { URL_VIDEOGAMES } from '../constantes.js'
import axios from 'axios';

export const GET_VIDEOGAMES_BY_NAME = 'GET_VIDEOGAMES';
export const DETAIL_GAME = 'DETAIL_GAME';
export const GET_GENRES = 'GET_GENRES';
export const GET_IMAGE_GAME = 'GET_IMAGE_GAME';
export const ADD_GAME = 'ADD_GAME';
export const GET_ALL_GAMES = 'GET_ALL_GAMES';
export const RESET = 'RESET';
export const FILTER_AND_ORDER = 'FILTER_AND_ORDER';

export function getVideogamesByName(title) {
    return function(dispatch) {
        return axios.get('http://localhost:3001/videogames?name=' + title)
        .then(res => {
            dispatch({type: GET_VIDEOGAMES_BY_NAME, payload: res.data})
        })
        .catch(err => {return err})
    }
}
export function getAllGames() {
    return function(dispatch) {
        return axios.get('http://localhost:3001/videogames/')
        .then(res => {
            dispatch({type: GET_ALL_GAMES, payload: res.data})
        })
        .catch(err => {return err})
    }
}

export function getGenres() {
    return function(dispatch) {
        return axios('http://localhost:3001/genres')
        .then(res => {
            dispatch({type: GET_GENRES, payload: res.data})
        })
        .catch(err => {return err})
    }
}

export function getDetailGame(id) {
    return function(dispatch) {
        return axios.get('http://localhost:3001/videogame/' + id)
        .then(res => {
            dispatch({type: DETAIL_GAME, payload: res.data})
        })
        .catch(err => {return err})
    }
} 

export function addNewGame(newGame) {
    return function(dispatch) {
        return axios.post('http://localhost:3001/videogame/', newGame)
        .then(res => {
            dispatch({type: ADD_GAME, payload: res.data})
        })
        .catch(err => {return err})
    }
}

export function reset() {
    return function (dispatch) {
        dispatch({
          type: RESET
        });
      };
}

// ---------------Primero--------------
/* export function filterAndOrder(stateProcess) {
    return function (dispatch, getState) {

    let sGenre = stateProcess.genre;
    let sOrder = stateProcess.order;
    let byName = getState().searchGamesByName;
    const procesState = getState().processGames;
    const allGamesState = getState().searchAllGames;
    let objectToProcess;

    if (byName) {
        objectToProcess = [...procesState];
    }
    if (!byName) {
        objectToProcess = [...allGamesState];
    }
    if (sGenre) {
        objectToProcess = objectToProcess.filter(game => {
            return game.Genres.filter(g => g.name.includes(sGenre))})
    }
    if(sOrder) {
        if (sOrder === 'AlfA-Z') {
            objectToProcess.sort((a, b) => {
                if (a.name > b.name) {
                    return 1
                } else return -1
            }) 
        } 
        if (sOrder === 'AlfZ-A') {
            objectToProcess.sort((a, b) => {
                if (a.name < b.name) {
                    return 1
                } else return -1
            }) 
        }
        if (sOrder === 'ascRating') {
            objectToProcess.sort((a, b) => {return a.rating - b.rating})
        } 
        if (sOrder === 'descRating') {
            objectToProcess = objectToProcess.sort((a, b) => {return b.rating - a.rating})
        }
    } 
        dispatch({
            type: FILTER_AND_ORDER,
            payload: objectToProcess
        })
    
}
} */

//----------------para la segunda prueba en <AtGames /> ------------------
export const ORDER_GAMES = 'ORDER_GAMES';
export const FILTER_BY_GENRES = 'FILTER_BY_GENRES';

export function OrderTwo (order) {
    return function (dispatch, getState) {
        
        let byName = getState().searchGamesByName;
        let originGames = getState().searchAllGames;
        let processForOrder = getState().processGames;
        let objectToProcess = [...processForOrder];

        /* if (byName) {
            objectToProcess = [...processForOrder];
        }
        if(!byName) {
            objectToProcess = [...originGames];
        } */

        if (order === 'Not Order') {
            dispatch({
                type: ORDER_GAMES,
                payload: [...originGames]
            })
        }
        if (order === 'AlfA-Z') {
            objectToProcess.sort((a, b) => {
                if (a.name > b.name) {
                    return 1
                } else return -1
            }) 
        }
        if (order === 'AlfZ-A') {
            objectToProcess.sort((a, b) => {
                if (a.name < b.name) {
                    return 1
                } else return -1
            }) 
        }
        if (order === 'ascRating') {
            objectToProcess.sort((a, b) => {return a.rating - b.rating})
        }
        if (order === 'descRating') {
            objectToProcess.sort((a, b) => {return b.rating - a.rating})
        }
        
        dispatch({
            type: ORDER_GAMES,
            payload: objectToProcess
        })
    }
}
// --------------- para genre-----------
export function filterTwo(genre) {
    return function(dispatch, getState) {
        let flagName = getState().searchGamesByName;
        let originGames = getState().searchAllGames;
        let processForOrder = getState().processGames;

        let processByFilter =  [...processForOrder];

        /* if (flagName) {
            processByFilter = [...processForOrder];
        }
        if (!flagName) {
            processByFilter = [...originGames];
        } */

        if (genre === 'NullSelGenre') {
            dispatch({
                type: ORDER_GAMES,
                payload: [...originGames]
            })
        }
        else {
            processByFilter = processForOrder.filter(game => 
                game.Genres.includes(genre))
        }
        dispatch({
            type: FILTER_BY_GENRES,
            payload: processByFilter
        })
    }
}


//---------------- HARDCODEADO ---------------------
/* export const HARDCO = 'HARDCO';

export function hardcodeado() {
    return function (dispatch) {
        dispatch({
            type: HARDCO
        })
    }
} */