import { GET_VIDEOGAMES_BY_NAME, DETAIL_GAME , GET_GENRES, ADD_GAME, GET_ALL_GAMES, RESET, FILTER_BY_GENRE } from '../Actions/actions.js';

const initialState = {
    searchAllGames: [],
    processGames: [],
    detailGame: {},
    genresGames: [],
    searchGamesByName: false
};


export function rootReducer(state = initialState, action) {

    if (action.type === GET_ALL_GAMES) {
        return {
            ...state,
            searchGamesByName: false,
            searchAllGames: action.payload,
            processGames: action.payload
        }
    }
    if (action.type === GET_VIDEOGAMES_BY_NAME) {
        return {
            ...state,
            searchGamesByName: true,
            processGames: action.payload
        }
    }
    if (action.type === GET_GENRES) {
        return {
            ...state,
            genresGames: action.payload
        }
    }
    if (action.type === DETAIL_GAME) {
        return {
            ...state,
            detailGame: action.payload
        }
    }
    if (action.type === ADD_GAME) {
        return {
            ...state,
            searchAllGames: action.payload
        }
    }
    if (action.type === RESET) {
        return {
            ...state,
            detailGame: {},
            //searchAllGames: [],
        }
    }
    if (action.type === FILTER_BY_GENRE) {
        
        return {
            ...state,
            seeGenres: action.payload.genreName,
            gamesFiltred: action.payload.filtersGenres
        }
    }
    return state
}

export default rootReducer;