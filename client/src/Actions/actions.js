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

export function filterAndOrder(stateProcess) {
    return function (dispatch, getState) {

    let sGenre = stateProcess.genre;
    let sOrder = stateProcess.order;
    let objectToProcess;
    //let state = getState()
    console.log('STATE REDUXX desde actions: ', getState())

    if (getState().searchGamesByName === true) {
        objectToProcess = [...getState().processGames];
    }
    else {
        objectToProcess = [...getState().searchAllGames];
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
    return function(dispatch) {
        dispatch({
            type: FILTER_AND_ORDER,
            payload: objectToProcess
        })
    }
}
}




