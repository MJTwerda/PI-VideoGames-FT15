//import { URL_VIDEOGAMES } from '../constantes.js'
import axios from 'axios';

export const GET_VIDEOGAMES = 'GET_VIDEOGAMES';
export const DETAIL_GAME = 'DETAIL_GAME';
export const GET_GENRES = 'GET_GENRES';
export const GET_IMAGE_GAME = 'GET_IMAGE_GAME';
export const ADD_GAME = 'ADD_GAME';
export const GET_ALL_GAMES = 'GET_ALL_GAMES';
export const RESET = 'RESET';

export function getVideogames(title) {
    return function(dispatch) {
        return axios.get('http://localhost:3001/videogames?name=' + title)
        .then(res => {
            dispatch({type: GET_VIDEOGAMES, payload: res.data})
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