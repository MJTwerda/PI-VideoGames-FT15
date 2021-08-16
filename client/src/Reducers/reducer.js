import { GET_VIDEOGAMES_BY_NAME, DETAIL_GAME , GET_GENRES, ADD_NEW_GAME, GET_ALL_GAMES, RESET, /* FILTER_AND_ORDER, */ ORDER_GAMES, FILTER_BY_GENRES,/* HARDCO */} from '../Actions/actions.js';

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
    if (action.type === ADD_NEW_GAME) {
        return {
            ...state,
            searchAllGames: [...state.searchAllGames].concat(action.payload),
            processGames: [...state.processGames].concat(action.payload)
        }
    }
    if (action.type === RESET) {
        return {
            ...state,
            detailGame: {},
            //searchAllGames: [],
        }
    }
    //-----con la PRIMERA ----
    /* if (action.type === FILTER_AND_ORDER) {
        return {
            ...state,
            processGames: action.payload
        }
    } */

    // -------con la SEGUNDA---
    if (action.type === ORDER_GAMES) {
        return {
            ...state,
            processGames: action.payload
        }
    }
    if (action.type === FILTER_BY_GENRES) {
        return {
            ...state,
            processGames: action.payload
        }
    }

    //------- Con la tercer forma HARDCODEADO -------- FUNCIONA
    /* if (action.type === HARDCO) {
        return {
            ...state,
            //processGames: state.processGames.sort((a, b) => {return b.rating - a.rating})
            processGames:  state.processGames.sort((a, b) => {
                if (a.name > b.name) {
                    return 1
                } else return -1
            }) 
        }
    } */


    return state;
}

export default rootReducer;