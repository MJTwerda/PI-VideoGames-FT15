//import { URL_VIDEOGAMES } from '../constantes.js'
import axios from 'axios';

export const GET_VIDEOGAMES = 'GET_VIDEOGAMES';
export const DETAIL_GAME = 'DETAIL_GAME';
export const GET_GENRES = 'GET_GENRES';
export const GET_IMAGE_GAME = 'GET_IMAGE_GAME';
export const ADD_GAME = 'ADD_GAME';

export function getVideogames(title) {
    return function(dispatch) {
        return axios.get('http://localhost:3001/videogames?name=' + title)
        //.then(data => data.json)
        //return axios.get(URL_VIDEOGAMES)
        .then(res => {
            dispatch({type: GET_VIDEOGAMES, payload: res.data})
        })
    }
}

export function getGenres() {
    return function(dispatch) {
        return axios('http://localhost:3001/genres')
        //.then(data => data.json)
        .then(res => {
            dispatch({type: GET_GENRES, payload: res.data})
        })
    }
}

export function getDetailGame(id) {
    return function(dispatch) {
        return axios.get('http://localhost:3001/videogame/' + id)
        .then(res => {
            dispatch({type: DETAIL_GAME, payload: res.data})
        })
    }
} 

export function addGame() {
    return function(dispatch) {
        return axios.post('http://localhost:3001/videogame/')
        .then(res => {
            dispatch({type: ADD_GAME, payload: res.data})
        })
    }
}