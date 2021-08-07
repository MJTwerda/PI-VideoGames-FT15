//import { URL_VIDEOGAMES } from '../constantes.js'
import axios from 'axios';

export const GET_VIDEOGAMES = 'ALL_VIDEOGAMES';
export const DETAIL_GAMES = 'DETAIL_GAMES';
export const GET_GENRES = 'ALL_GENRES';


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